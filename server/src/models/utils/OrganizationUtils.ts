
import CreateOrganizationInput from "../../resolvers/input/CreateOrganizationInput";
import DeleteOrganizationInput from "../../resolvers/input/DeleteOrganizationInput";
import GetOrganizationInput from "../../resolvers/input/GetOrganizationInput";
import Organization from "../Organization";

class OrganizationUtils extends Organization {
  static async createOrganization({ name, description }: CreateOrganizationInput) {
      const organization = new Organization();
  
      organization.name = name;
      organization.description = description;
  
      await organization.save();
  
      return organization;
  }

  static async deleteOrganization({ id }: DeleteOrganizationInput) {
    const organization = await Organization.findOneOrFail({ id });

    return await Organization.remove(organization);
  }

  static async getOrganizationById({ id }: GetOrganizationInput) {
    return await Organization.findOneOrFail({ id });
  }
};

export default OrganizationUtils