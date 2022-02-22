import dotenv from 'dotenv';
import 'reflect-metadata';
import express from 'express';

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
	const server = await getServer();
	await server.start();
	server.applyMiddleware({ app });
	// The `listen` method launches a web server.
	const port = 3001;
	app.listen(port, () => {
		console.log(`🚀  Server ready at localhost:${port}`);
	});
};

runServer();
