import { useQuery } from "@apollo/client";
import gql from 'graphql-tag';
import React from 'react';

const getUser = gql`
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

const onClickSubmit = (data) => {
	console.log(data);
};

const Dashboard = () => {
	const { loading, error, data } = useQuery(getUser);


  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;

	return (
		<div className="dashboard-container">
			{data ?
				<>Hello {data.Users[0].first_name} {data.Users[0].last_name}!!! <button onClick={() => onClickSubmit(data)}>Test</button></>
				: <>Pas de données :'(</>
			}
		</div>
	);
};

export default Dashboard;
