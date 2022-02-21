import gql from 'graphql-tag';

export const getUser = gql`
	query getUsers {
		Users {
			id
			first_name
			last_name
			roles
			email
			password
			created_at
		}
	}
`;

export const setUser = gql`
	mutation($firstName: String!, $lastName: String!, $roles: String!, $email: String!, $password: String!, $createdAt: String!) {
		createUser(first_name: $firstName, last_name: $lastName, roles: $roles, email: $email, password: $password, created_at: $createdAt) {
			first_name
			last_name
			roles
			email
			password
			created_at
		}
	}
`;
