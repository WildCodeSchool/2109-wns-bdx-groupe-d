import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import LoginResolver from './resolvers/LoginResolver';
import UserResolver from './resolvers/UserResolver';

export default async function getServer() {
	const schema = await buildSchema({
		resolvers: [UserResolver, LoginResolver],
	});
	const apolloServer = new ApolloServer({ schema });
	return apolloServer;
}
