import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';

import Issue from './models/Issue';
import User from './models/User';
import UserResolver from './resolvers/UserResolver';
import Organization from './models/Organization';
import Project from './models/Project';
import Color from './models/Color';
import Comment from './models/Comment';
import File from './models/File';

dotenv.config();

const runServer = async () => {
	await createConnection({
		type: 'mysql',
		host: 'localhost',
		port: 3306,
		entities: [User, Organization, Project, Issue, Color, Comment, File],
		username: process.env.ROOTERNAME,
		password: process.env.PASSWORD,
		database: process.env.DATABASE,
		synchronize: true,
		logging: true,
	});
	console.log('Connected to database');

	const schema = await buildSchema({ resolvers: [UserResolver] });
	const server = new ApolloServer({ schema });

	// The `listen` method launches a web server.
	server.listen({ port: 3004 }).then(({ url }) => {
		console.log(`🚀  Server ready at ${url}`);
	});
};

runServer();
