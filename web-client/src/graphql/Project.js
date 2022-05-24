import gql from 'graphql-tag';

export const getProjects = gql`
	query getProjects {
		projects {
			id
			name
			description
			created_at
		}
	}
`;

export const setProject = gql`
	mutation createProject($name: String!, $description: String!, $createdAt: String!) {
		createProject(name: $name, description: $description, created_at: $createdAt) {
			id
			name
			description
			created_at
		}
	}
`;
