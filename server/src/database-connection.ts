import { createConnection } from 'typeorm';
import dotenv from 'dotenv';

import Issue from './models/Issue';
import User from './models/User';
import Organization from './models/Organization';
import Project from './models/Project';
import Color from './models/Color';
import Comment from './models/Comment';
import File from './models/File';

dotenv.config();

export default async function getDatabaseConnection() {
	await createConnection({
		type: 'mysql',
		host: 'mysql',
		port: 3306,
		entities: [User, Organization, Project, Issue, Color, Comment, File],
		username: process.env.ROOTERNAME,
		password: process.env.PASSWORD,
		database: process.env.DATABASE,
		synchronize: true,
		logging: true,
	});
}
