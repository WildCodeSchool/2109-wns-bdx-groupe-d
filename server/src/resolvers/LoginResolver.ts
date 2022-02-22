import md5 from 'md5';
import { Args, Query, Resolver, Mutation } from 'type-graphql';
import Session from '../models/Session';

import User from '../models/User';
import LoginInput from './LoginInput';

@Resolver(User)
class LoginResolver {
	@Mutation(() => Session)
	async signIn(@Args() { email, password }: LoginInput) {
		try {
			const user = await User.findOne({ email });
			const hash = md5(password);

			if (hash !== user?.password) throw new Error('Invalid email or password');

			const uid = md5(email);
			
			const session = new Session();

			session.uid = uid;
			session.user_id = user.id;
		
			await session.save();

			return session;
		} catch (error: any) {
			error.statusCode = 401;
  		throw error
		}
	}
}

export default LoginResolver;
