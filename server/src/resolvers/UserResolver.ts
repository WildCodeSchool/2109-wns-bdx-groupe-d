import { Args, Mutation, Query, Resolver } from 'type-graphql';

import User from '../models/User';
import CreateUserInput from './input/CreateUserInput';
import UserUtils from '../models/utils/UserUtils';
import DeleteWilderInput from './input/DeleteWilderInput';

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
			created_at
		})
	}

	@Mutation(() => User)
	async deleteUser(@Args() { id }: DeleteWilderInput) {
		return UserUtils.deleteUser({ id });
	}
}

export default UserResolver;
