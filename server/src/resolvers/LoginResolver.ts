import { Args, Query, Resolver } from 'type-graphql';

import User from '../models/User';
import LoginInput from './LoginInput';

@Resolver(User)
class LoginResolver {
  @Query(() => User)
  async signIn(@Args() {
    email,
    password
  }: LoginInput) {
    const user = await User.findOne({ email });

    console.log(password);

    return user;
  }
}

export default LoginResolver;
