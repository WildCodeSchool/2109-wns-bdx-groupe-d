import md5 from 'md5';
import { Args, Query, Resolver, Mutation } from 'type-graphql';
import Session from '../models/Session';
import uid from 'uid-safe';

import User from '../models/User';
import LoginInput from './LoginInput';

@Resolver(Session)
class LoginResolver {
	@Mutation(() => User)
	async signIn(@Args() { email, password }: LoginInput) {
		const user = await User.findOne({ email });
		const hash = md5(password);

		if (hash !== user?.password) throw new Error('Invalid email or password');

		const uuid = uid.sync(18);
		
		const session = new Session();

		session.uid = uuid;
		session.user_id = user.id;
	
		await session.save();

		return user;
	}
}

export default LoginResolver;
