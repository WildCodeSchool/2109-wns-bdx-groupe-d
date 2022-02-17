import { useQuery } from "@apollo/client";
import React from 'react';
import { getUser } from "../components/api/User.js";

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
