import md5 from "md5";
import SignInInput from "../../resolvers/input/SignInInput";
import User from "../User";
import Session from "../Session";
import IsLoggedInput from "../../resolvers/input/IsLoggedInput";

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
      session.user_id = user.id;
    
      await session.save();

      return user;
    }
	}

  static async islogged({ sessionId }: IsLoggedInput) {
    const userSession: any = await Session.findOne({ uid: sessionId }, { relations: ["user_id"] });
    console.log(userSession)
    return userSession.user_id;
  }
};

export default SessionUtils;