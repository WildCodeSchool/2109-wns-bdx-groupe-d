import { Args, Mutation, Query, Resolver } from 'type-graphql';

import Project from '../models/Project';
import CreateProjectInput from './input/CreateProjectInput';
import DeleteProjectInput from './input/DeleteProjectInput';
import GetProjectInput from './input/GetProjectInput';
import ProjectUtils from '../models/utils/ProjectUtils';
import ImageUtils from '../models/utils/ImageUtils';

@Resolver(Project)
class ProjectResolver {
	@Query(() => [Project])
		async projects() {
			return await Project.find();
		}

	@Mutation(() => Project)
		async createProject(
			@Args()
			{ name, description, created_at, projectPictureName, images }: CreateProjectInput
		) 	{
				const projectCreated = await ProjectUtils.createProject({
					name,
					description,
					created_at,
					projectPictureName,
					images
				})

				images.map(async image => {
					await ImageUtils.createImage({
						name: image,
						project: projectCreated.id, 
						created_at,	
					})
				})

				return await Project.findOneOrFail({where: {id : projectCreated.id}, relations: ["images"]})

			}

	@Mutation(() => Project)
	async deleteProject(@Args() { id }: DeleteProjectInput) {
		return ProjectUtils.deleteProject({ id });
	}

	@Query(() => Project)
	async getProjectById(@Args() { id }: GetProjectInput) {
		return ProjectUtils.getProjectById({ id });
	}

}

export default ProjectResolver;
