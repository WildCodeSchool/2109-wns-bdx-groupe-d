import gql from 'graphql-tag';

export const signIn = gql`
	mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
			id
			first_name
			last_name
			roles
			email
			created_at
		}
	}
`;

export const userInfo = gql`
	query userInfo {
		userInfo {
			id
			first_name
			last_name
			roles
			email
			created_at
		}
	}
`;

export const deleteAllUserSessions = gql`
	mutation deleteAllUserSessions($user: User) {
		deleteAllUserSessions(user: $user) {
			User
		}
	}
`;

export const deleteActualSession = gql`
	mutation deleteActualSession($uid: String) {
		deleteActualSession(uid: $uid) {
			uid
		}
	}
`

