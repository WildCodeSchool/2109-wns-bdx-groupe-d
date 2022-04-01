import md5 from "md5";
import CreateUserInput from "../../resolvers/input/CreateUserInput";
import DeleteUserInput from "../../resolvers/input/DeleteUserInput";
import User from "../User";

class UserUtils extends User {
  static async createUser({ first_name, last_name, email, password, roles, created_at }: CreateUserInput) {
      const user = new User();
  
      user.first_name = first_name;
      user.last_name = last_name;
      user.email = email;
      user.password = md5(password);
      user.roles = roles;
      user.created_at = created_at;
  
      await user.save();
  
      return user;
  }

  static async deleteUser({ id }: DeleteUserInput) {
    const user = await User.findOneOrFail({ id });

    return await User.remove(user);
  }
};

export default UserUtils;