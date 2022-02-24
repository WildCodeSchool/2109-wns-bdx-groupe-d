import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import Session from './models/Session';
import User from './models/User';
import SessionResolver from './resolvers/SessionResolver';
import UserResolver from './resolvers/UserResolver';

export default async function getServer() {
	const schema = await buildSchema({
		resolvers: [UserResolver, SessionResolver],
	});

	const apolloServer = new ApolloServer({
		schema,
		context: async ({ req }) => {
			const { sessionId } = req.cookies;

			const session = await Session.findOne({ uid: sessionId});

			// const user = await User.find(session.user_id)

			return { sessionId };
		}
	});
	return apolloServer;
}
