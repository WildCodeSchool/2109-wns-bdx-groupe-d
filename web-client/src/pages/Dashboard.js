import { useQuery } from '@apollo/client';
import gql from 'gql-tag';
import React from 'react';

// const getUser = gql`
// 	query getUsers {
// 		user {
// 			id
// 			first_name
// 			last_name
// 		}
// 	}
// `;

const onClickSubmit = async () => {
	// console.log(await useQuery(getUser));
};
const Dashboard = () => {
	return (
		<div className="dashboard-container">
			Hello Home! <button onClick={onClickSubmit}>Test</button>
		</div>
	);
};

export default Dashboard;
