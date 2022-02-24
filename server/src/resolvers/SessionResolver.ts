import { Args, Resolver, Mutation, Ctx } from 'type-graphql';
import Session from '../models/Session';

import User from '../models/User';
import LoginInput from './input/LoginInput';
import SessionUtils from '../models/utils/SessionUtils';

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
		console.log(context.sessionId, 'CONTEXT')
		const { sessionId } = context;
		return SessionUtils.signIn({ email, password });
	}
}

export default SessionResolver;
