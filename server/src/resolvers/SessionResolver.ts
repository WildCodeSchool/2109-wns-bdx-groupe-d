import { Args, Resolver, Mutation, Ctx, Query } from 'type-graphql';
import Session from '../models/Session';

import User from '../models/User';
import LoginInput from './input/LoginInput';
import SessionUtils from '../models/utils/SessionUtils';
import IsLoggedInput from './input/IsLoggedInput';

interface Context {
  sessionId: string
}

@Resolver(Session)
class SessionResolver {
	@Mutation(() => User)
	async signIn(
		@Ctx() context: Context,
		@Args() { email, password }: LoginInput
		) {
		const { sessionId } = context;
		
		return SessionUtils.signIn({ email, password, sessionId });
	}

	@Query(() => User)
	async isLogged(@Ctx() context: Context,) {
		const { sessionId } = context;
		return SessionUtils.islogged({ sessionId });
	}
}

export default SessionResolver;
