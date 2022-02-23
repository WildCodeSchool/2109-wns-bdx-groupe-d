import md5 from "md5";
import LoginInput from "../../resolvers/input/LoginInput";
import User from "../User";
import Session from "../Session";

class SessionUtils extends User {
  static async signIn({ email, password }: LoginInput) {
		const user = await User.findOne({ email });
		const hash = md5(password);

		if (hash !== user?.password) {
      throw new Error('Invalid email or password');
    } else {		
      const session = new Session();

      session.uid = 'bla';
      session.user_id = user.id;
    
      await session.save();

      return user;
    }
	}
};

export default SessionUtils;