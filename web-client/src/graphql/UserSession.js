import gql from 'graphql-tag';

export const signIn = gql`
	mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      uid
      user_id
    }
	}
`;