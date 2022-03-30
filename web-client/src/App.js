import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { userInfo } from "./graphql/UserSession.js";

import Settings from './pages/Settings.js';
import Dashboard from './pages/Dashboard.js';
import Organization from './pages/Organization.js';
import Issues from './pages/Issues.js';
import Projects from './pages/Projects.js';
import TopBar from './components/TopBar.js';
import Login from './pages/Login.js';
import './css/tailwind.css';
import Subsription from './pages/Subscription.js';
const App = () => {
	const { data, refetch } = useQuery(userInfo);

	return (
		<div className="w-full">
			{!data ? <>
				<Route exact path="/">
					<Login onLoginSuccess={refetch}/>
				</Route>
				<Route exact path="/subscription">
					<Subsription />
				</Route>
			</>
			: <>
			 	<TopBar />
				<Switch>
					<Route exact path="/">
						<Dashboard actualUser={data.userInfo} />
					</Route>
					<Route path="/organization">
						<Organization />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/issues">
						<Issues />
					</Route>
					<Route path="/settings">
						<Settings />
					</Route>
				</Switch>
			</>
			}
		</div>
	);
};
export default App;
