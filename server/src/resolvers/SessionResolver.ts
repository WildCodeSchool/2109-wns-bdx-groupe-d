import { Args, Resolver, Mutation, Ctx, Query } from 'type-graphql';
import Session from '../models/Session';

import User from '../models/User';
import LoginInput from './input/LoginInput';
import SessionUtils from '../models/utils/SessionUtils';
import UserInfoInput from './input/UserInfoInput';
import DeleteSessionsInput from './input/DeleteSessionsInput';

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
	async userInfo(@Ctx() context: Context,) {
		const { sessionId } = context;
		return SessionUtils.userInfo({ sessionId });
	}

	@Mutation(() => User)
	async deleteAllUserSessions(
		@Args() {id} :DeleteSessionsInput
	) {
		return SessionUtils.deleteAllUserSessions({id});
	}

	// @Mutation(() => Session)
	// async logout(@Ctx() context: Context) {
	// 	const {sessionId} = context;
	// 	return SessionUtils.logout({sessionId});
	// }
}

export default SessionResolver;
