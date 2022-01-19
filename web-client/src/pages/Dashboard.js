import { useQuery } from "@apollo/client";
import gql from 'graphql-tag';
import React from 'react';

const getUser = gql`
	query getUsers {
		user {
			id
			first_name
			last_name
		}
	}
`;

const onClickSubmit = () => {
	console.log('coucou');
};

const Dashboard = () => {
	const { loading, data } = useQuery(getUser);

	return (
		<div className="dashboard-container">
			{console.log(data)}
			Hello Home! <button onClick={onClickSubmit}>Test</button>
		</div>
	);
};

export default Dashboard;
