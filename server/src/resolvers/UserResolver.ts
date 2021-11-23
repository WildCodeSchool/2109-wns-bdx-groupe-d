import { Args, Mutation, Query, Resolver } from 'type-graphql';

import User from '../models/User';
import CreateUserInput from './CreateUserInput';

@Resolver(User)
class UserResolver {
  @Query(() => [User])
  async Users() {
    const users = await User.find();
    return users;
  }

   @Mutation(() => User)
  async createWilder(@Args() { first_name, last_name, email, password }: CreateUserInput) {
    const user = new User();
    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.password = password;
    await user.save();
    return user;
  }
}

export default UserResolver;
