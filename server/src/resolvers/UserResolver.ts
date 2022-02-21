import { Args, Mutation, Query, Resolver } from 'type-graphql';

import User from '../models/User';
import CreateUserInput from './CreateUserInput';

@Resolver(User)
class UserResolver {
  @Query(() => [User])
  async users() {
    const users = await User.find();
    return users;
  }

   @Mutation(() => User)
  async createUser(@Args() {
    first_name,
    last_name,
    email,
    password,
    roles,
    // color_id,
    // organization_id,
    created_at
  }: CreateUserInput) {
    const user = new User();

    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.password = password;
    user.roles = roles;
    // user.color_id = color_id;
    // user.organization_id = organization_id;
    user.created_at = created_at;

    await user.save();

    return user;
  }
}

export default UserResolver;
