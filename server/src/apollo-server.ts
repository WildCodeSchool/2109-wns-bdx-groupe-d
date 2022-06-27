import { ApolloServer } from "apollo-server-express";
import { AuthChecker, buildSchema } from "type-graphql";
import User from "./models/User";
import SessionUtils from "./models/utils/SessionUtils";
import FileResolver from "./resolvers/FileResolver";
import ProjectResolver from "./resolvers/ProjectResolver";
import SessionResolver from "./resolvers/SessionResolver";
import UserResolver from "./resolvers/UserResolver";
import OrganizationResolver from "./resolvers/OrganizationResolver";

export interface Context {
  sessionId: string;
  user: User | null;
}

export const customAuthChecker: AuthChecker<Context> = ({ context }) => {
  return Boolean(context.user);
};

export default async function getServer() {
  const schema = await buildSchema({
    resolvers: [UserResolver, SessionResolver, ProjectResolver, FileResolver, OrganizationResolver],
    authChecker: customAuthChecker,
  });

  const apolloServer = new ApolloServer({
    schema,
    context: async ({ req }): Promise<Context> => {
      const sessionId = req.cookies.sessionId || "";
      const user = sessionId
        ? await SessionUtils.userInfo({ sessionId })
        : null;

      return { sessionId, user };
    },
  });
  return apolloServer;
}
