import md5 from 'md5';
import { Args, Query, Resolver, Mutation } from 'type-graphql';
import Session from '../models/Session';
import uid from 'uid-safe';

import User from '../models/User';
import LoginInput from './input/LoginInput';
import SessionUtils from '../models/utils/SessionUtils';

@Resolver(Session)
class SessionResolver {
	@Mutation(() => User)
	async signIn(@Args() { email, password }: LoginInput) {
		return SessionUtils.signIn({ email, password});
	}
}

export default SessionResolver;
