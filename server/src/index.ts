import dotenv from 'dotenv';
import 'reflect-metadata';
import express from 'express';
import cookieParser from 'cookie-parser';

import getServer from './apollo-server';
import getDatabaseConnection from './database-connection';

dotenv.config();

const runServer = async () => {
	if (!process.env.DATABASE_URL) {
		throw Error('DATABASE_URL must be set in environment.');
	}

	await getDatabaseConnection(process.env.DATABASE_URL);
	console.log('Connected to database');

	const app = express();

	app.use(cookieParser());

	app.use(function (req, res, next) {
		// check if client sent cookie
		const cookie = req.cookies.cookieName;
		if (cookie === undefined) {
			// no: set a new cookie
			let randomNumber=Math.random().toString();
			randomNumber=randomNumber.substring(2,randomNumber.length);
			res.cookie('sessionId',randomNumber, { maxAge: 900000, httpOnly: true });
			console.log('cookie created successfully');
		} else {
			// yes, cookie was already present 
			console.log('cookie exists', cookie);
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
