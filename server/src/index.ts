import dotenv from 'dotenv';
import 'reflect-metadata';

import getServer from './apollo-server';
import getDatabaseConnection from './database-connection';

dotenv.config();

const runServer = async () => {
	await getDatabaseConnection();
	console.log('Connected to database');

	const server = await getServer();

	// The `listen` method launches a web server.
	server.listen({ port: 3004 }).then(({ url }) => {
		console.log(`🚀  Server ready at ${url}`);
	});
};

runServer();
