import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import SessionResolver from './resolvers/SessionResolver';
import UserResolver from './resolvers/UserResolver';
import ProjectResolver from './resolvers/ProjectResolver';
import FileResolver from './resolvers/FileResolver';
import User from './models/User';

export interface Context {
  sessionId: string;
	user: User | null;
}

export default async function getServer() {
	const schema = await buildSchema({
		resolvers: [UserResolver, SessionResolver, ProjectResolver, FileResolver],
	});

	const apolloServer = new ApolloServer({
		schema,
		context: async ({ req }) => {
			const { sessionId } = req.cookies;

			return { sessionId };
		}
	});
	return apolloServer;
}
