import md5 from "md5";
import SignInInput from "../../resolvers/input/SignInInput";
import User from "../User";
import Session from "../Session";

class SessionUtils extends User {
  static async signIn({ email, password, sessionId }: SignInInput) {
		const user = await User.findOne({ email });
		const hash = md5(password);

		if (hash !== user?.password) {
      throw new Error('Invalid email or password');
    } else if (!sessionId) {
      throw new Error('A problem occured');
    } else {
      const session = new Session();

      session.uid = sessionId;
      session.user_id = user.id;
    
      await session.save();

      return user;
    }
	}
};

export default SessionUtils;