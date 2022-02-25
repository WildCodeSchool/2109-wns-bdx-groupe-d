import dotenv from 'dotenv';
import 'reflect-metadata';
import express from 'express';
import cookieParser from 'cookie-parser';

import getServer from './apollo-server';
import getDatabaseConnection from './database-connection';
import UID from 'uid-safe';
import Session from './models/Session';
import User from './models/User';

dotenv.config();

const runServer = async () => {
	if (!process.env.DATABASE_URL) {
		throw Error('DATABASE_URL must be set in environment.');
	}

	await getDatabaseConnection(process.env.DATABASE_URL);
	console.log('Connected to database');

	const app = express();

	app.use(cookieParser());

	app.use(async function (req, res, next) {
		// check if client sent cookie
		const { sessionId } = req.cookies;
		if (sessionId === undefined) {
			// no: set a new cookie
			const uid = UID.sync(18);
			
			res.cookie('sessionId',uid, { maxAge: 900000, httpOnly: false });
			
			console.log('cookie created successfully');
		} else {
			// yes, cookie was already present
			console.log('cookie exists', sessionId);
			const session = await Session.findOne({ uid: sessionId});

			if (session) {
				const { user_id }: any = session;
				
				const user = await User.findOne(user_id);
				res.cookie('userInfo', user, { maxAge: 900000, httpOnly: true });
			}
		}
		next(); // <-- important!
	});

	const server = await getServer();

	await server.start();

	server.applyMiddleware({ app });
	// The `listen` method launches a web server. AIDEZ-VOUS VOUS MÊME
	const port = 3001;

	app.listen(port, () => {
		console.log(`🚀  Server ready at localhost:${port}`);
	});
};

runServer();
