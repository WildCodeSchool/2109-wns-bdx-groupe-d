import md5 from "md5";
import SignInInput from "../../resolvers/input/SignInInput";
import User from "../User";
import Session from "../Session";
import UserInfoInput from "../../resolvers/input/UserInfoInput";

class SessionUtils extends Session {
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
      session.user = user;
    
      await session.save();

      return user;
    }
	}

  static async userInfo({ sessionId }: UserInfoInput) {
    const userSession: any = await Session.findOne({ uid: sessionId }, { relations: ["user"] });
 
    return userSession.user;
  }
};

export default SessionUtils;