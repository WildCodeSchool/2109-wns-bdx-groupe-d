
import CreateProjectInput from "../../resolvers/input/CreateProjectInput";
import Project from "../Project";

class ProjectUtils extends Project {
  static async createProject({ name, description, created_at }: CreateProjectInput) {
      const project = new Project();
  
      project.name = name;
      project.description = description;
      project.created_at = created_at;
  
      await project.save();
  
      return project;
  }
};

export default ProjectUtils;