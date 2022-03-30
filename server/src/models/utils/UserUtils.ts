import md5 from "md5";
import CreateUserInput from "../../resolvers/input/CreateUserInput";
import DeleteWilderInput from "../../resolvers/input/DeleteWilderInput";
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

  static async deleteUser({ id }: DeleteWilderInput) {
    const user = await User.findOneOrFail({ id });
    
    const email = user.email;

    await User.remove(user);

    return email;
  }
};

export default UserUtils;