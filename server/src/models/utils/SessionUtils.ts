import md5 from "md5";
import SignInInput from "../../resolvers/input/SignInInput";
import User from "../User";
import Session from "../Session";
import UserInfoInput from "../../resolvers/input/UserInfoInput";
import DeleteSessionsInput from "../../resolvers/input/DeleteSessionsInput";
import LogoutInput from "../../resolvers/input/LogoutInput";

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
    const userSession: Session | undefined = await Session.findOne({ uid: sessionId }, { relations: ["user"] });
 
    if (userSession) {
      return userSession.user;
    }
    return undefined;
  }

  static async deleteAllUserSessions({id}: DeleteSessionsInput) {
    const user = await User.findOne({id});

    return await Session.delete({user});
  }

  // static async logout({sessionId}: LogoutInput) {
  //   const actualSession = await Session.findOne({uid: sessionId});

  //   return await Session.delete({actualSession});
  // }

};

export default SessionUtils;