import gql from 'graphql-tag';

export const getProjects = gql`
	query getProjects {
		projects {
			id
			name
			description
			projectPictureName
			created_at
		}
	}
`;

export const getProjectById = gql`
	query getProjectById($id: Float!) {
		getProjectById(id: $id) {
			id
			name
			description
			created_at
			projectPictureName
			images {
				id
				name
				created_at
			  }
		}
	}
`;

export const createProject = gql`
	mutation createProject($name: String!, $description: String!, $createdAt: String!, $projectPictureName: String!) {
		createProject(name: $name, description: $description, created_at: $createdAt, projectPictureName: $projectPictureName) {
			id
			name
			description
			projectPictureName
			created_at
		}
	}
`;

export const createFile = gql`
	mutation createFile($picture: Upload!) {
		createFile(picture: $picture)
	}
`;
