import { Args, Mutation, Query, Resolver } from 'type-graphql';

import Project from '../models/Project';
import CreateProjectInput from './input/CreateProjectInput';
import DeleteProjectInput from './input/DeleteProjectInput';
import ProjectUtils from '../models/utils/ProjectUtils';

@Resolver(Project)
class ProjectResolver {
  @Query(() => [Project])
	async projects() {
		return await Project.find();
	}

	@Mutation(() => Project)
	async createProject(
		@Args()
		{ name, description, created_at, projectPictureName	}: CreateProjectInput
	) {
		return await ProjectUtils.createProject({
			name,
			description,
			created_at,
			projectPictureName
		})
	}

	@Mutation(() => Project)
	async deleteProject(@Args() { id }: DeleteProjectInput) {
		return ProjectUtils.deleteProject({ id });
	}
}

export default ProjectResolver;
