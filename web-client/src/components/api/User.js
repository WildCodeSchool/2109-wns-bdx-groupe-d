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
