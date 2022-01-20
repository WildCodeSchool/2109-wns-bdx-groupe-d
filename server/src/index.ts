import dotenv from 'dotenv';
import 'reflect-metadata';

import getServer from './apollo-server';
import getDatabaseConnection from './database-connection';

dotenv.config();

const runServer = async () => {
	if (!process.env.DATABASE_URL) {
    throw Error("DATABASE_URL must be set in environment.");
  }
	
	await getDatabaseConnection(process.env.DATABASE_URL);
	console.log('Connected to database');

	const server = await getServer();

	// The `listen` method launches a web server.
	server.listen({ port: 3001 }).then(({ url }) => {
		console.log(`🚀  Server ready at ${url}`);
	});
};

runServer();
