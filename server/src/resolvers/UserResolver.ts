import { Args, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";

import User from "../models/User";
import CreateUserInput from "./input/CreateUserInput";
import UserUtils from "../models/utils/UserUtils";
import DeleteWilderInput from "./input/DeleteWilderInput";
import { Context } from "../apollo-server";
import { ApolloError } from "apollo-server-express";

@Resolver(User)
class UserResolver {
  @Query(() => [User])
  async users() {
    return await User.find();
  }

  @Mutation(() => User)
  async createUser(
    @Args()
    {
      first_name,
      last_name,
      email,
      password,
      roles,
      created_at,
    }: CreateUserInput
  ) {
    return UserUtils.createUser({
      first_name,
      last_name,
      email,
      password,
      roles,
      created_at,
    });
  }

  @Authorized()
  @Mutation(() => User)
  async deleteMe(@Ctx() context: Context) {
    const currentUser = context.user as User;
    return UserUtils.deleteUser({ id: currentUser.id });
  }
}

export default UserResolver;
