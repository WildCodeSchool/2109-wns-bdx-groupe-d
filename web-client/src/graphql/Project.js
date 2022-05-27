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

export const getProjectPicture = gql`
	query getPicture($pictureName: String!) {
		getPicture(pictureName: $pictureName)
	}
`;
