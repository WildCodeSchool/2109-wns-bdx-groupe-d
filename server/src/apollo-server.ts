import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import SessionResolver from './resolvers/SessionResolver';
import UserResolver from './resolvers/UserResolver';
import ProjectResolver from './resolvers/ProjectResolver';

export default async function getServer() {
	const schema = await buildSchema({
		resolvers: [UserResolver, SessionResolver, ProjectResolver],
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
