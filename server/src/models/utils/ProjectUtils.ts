
import CreateProjectInput from "../../resolvers/input/project/CreateProjectInput";
import DeleteProjectInput from "../../resolvers/input/project/DeleteProjectInput";
import GetProjectInput from "../../resolvers/input/project/GetProjectInput";
import Project from "../Project";

class ProjectUtils extends Project {
  static async createProject({ name, description, created_at, projectPictureName }: CreateProjectInput) {
      const project = new Project();
  
      project.name = name;
      project.description = description;
      project.created_at = created_at;
      project.projectPictureName = projectPictureName
  
      await project.save();
  
      return project;
  }

  static async deleteProject({ id }: DeleteProjectInput) {
    const project = await Project.findOneOrFail({ id });

    return await Project.remove(project);
  }

  static async getProjectById({ id }: GetProjectInput) {
    return await Project.findOneOrFail({ id });
  }
};

export default ProjectUtils;