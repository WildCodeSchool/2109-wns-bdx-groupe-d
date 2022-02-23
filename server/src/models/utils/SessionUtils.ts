import md5 from "md5";
import LoginInput from "../../resolvers/input/LoginInput";
import User from "../User";
import UID from "uid-safe";
import Session from "../Session";

class SessionUtils extends User {
  static async signIn({ email, password }: LoginInput) {
		const user = await User.findOne({ email });
		const hash = md5(password);

		if (hash !== user?.password) throw new Error('Invalid email or password');

		const uid = UID.sync(18);
		
		const session = new Session();

		session.uid = uid;
		session.user_id = user.id;
	
		await session.save();

		return user;
	}
};

export default SessionUtils;