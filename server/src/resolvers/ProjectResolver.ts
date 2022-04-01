import { Args, Mutation, Query, Resolver } from 'type-graphql';

import Project from '../models/Project';
import CreateProjectInput from './input/CreateProjectInput';
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
		{
			name,
			description,
			created_at
		}: CreateProjectInput
	) {
		return ProjectUtils.createProject({
			name,
			description,
			created_at
		})
	}
}

export default ProjectResolver;
