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

export default async (url: string, logging = false) => {
	await createConnection({
		type: "postgres",
    url,
		entities: [User, Organization, Project, Issue, Color, Comment, File],
		synchronize: true,
    logging,
	});
}
