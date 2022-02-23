import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import SessionResolver from './resolvers/SessionResolver';
import UserResolver from './resolvers/UserResolver';

export default async function getServer() {
	const schema = await buildSchema({
		resolvers: [UserResolver, SessionResolver],
	});

	const apolloServer = new ApolloServer({ schema });
	return apolloServer;
}
