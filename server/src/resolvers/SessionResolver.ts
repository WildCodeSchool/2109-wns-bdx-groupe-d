import md5 from 'md5';
import { Args, Query, Resolver, Mutation, Ctx } from 'type-graphql';
import Session from '../models/Session';
import uid from 'uid-safe';

import User from '../models/User';
import LoginInput from './input/LoginInput';
import SessionUtils from '../models/utils/SessionUtils';
import { Context } from 'apollo-server-core';

@Resolver(Session)
class SessionResolver {
	@Mutation(() => User)
	async signIn(
		@Ctx() context: string,
		@Args() { email, password }: LoginInput
		) {
		//console.log(context.sessionId, 'CONTEXT')
		return SessionUtils.signIn({ email, password });
	}
}

export default SessionResolver;
