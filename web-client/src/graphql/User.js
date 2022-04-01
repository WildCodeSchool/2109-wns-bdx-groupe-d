import gql from 'graphql-tag';

export const getUser = gql`
	query getUsers {
		getUsers {
			id
			first_name
			last_name
			roles
			email
			created_at
		}
	}
`;

export const setUser = gql`
	mutation createUser($firstName: String!, $lastName: String!, $roles: String!, $email: String!, $password: String!, $createdAt: String!) {
		createUser(first_name: $firstName, last_name: $lastName, roles: $roles, email: $email, password: $password, created_at: $createdAt) {
			id
			first_name
			last_name
			roles
			email
			created_at
		}
	}
`;

export const deleteUser = gql`
	mutation deleteUser($id: String!) {
		deleteUser(id: $id) {
			id
		}
	}
`;