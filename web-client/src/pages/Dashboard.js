import React from 'react';
// import { useQuery } from "@apollo/client";
// import { getUser } from "../graphql/User.js";

const Dashboard = ({ actualUser }) => {
	// const { loading, error, data } = useQuery(getUser);

  // if (loading) return 'Loading...';

  // if (error) return `Error! ${error.message}`;
	return (
		<div className="dashboard-container">
			{actualUser ?
				<>Hello {actualUser.first_name} {actualUser.last_name}!!! <button>Test</button></>
				: <>Pas de données :'(</>
			}
		</div>
	);
};

export default Dashboard;
