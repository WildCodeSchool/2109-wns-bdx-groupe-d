import React from 'react';
import { userWithRelations } from '../../../graphql/UserSession';
import { useQuery } from '@apollo/client';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

const Diagram = () => {
	const { loading, error, data } = useQuery(userWithRelations);
	// console.log(data);

	const status = data.userWithRelations.issues_assigned;
	const statusDiagram = status.length;
	// const unresolved = data.userWithRelations;
	// const resolved = data.userWithRelations;

	const pending = [];
	const done = [];
	const inProgress = [];

	status.forEach((element) => {
		console.log(element.status);
		if (element.status === 'IN_WAIT') {
			console.log('test');
		} else if (element.status === 'IN_PROGRESS') {
			console.log('test2');
		} else if (element.status === 'DONE') {
			console.log('test3');
		} else {
			console.log('Pas de données');
		}
	});

	console.log(status);
	console.log(statusDiagram);

	const datas = {
		labels: ['Red', 'Green', 'Yellow'],
		datasets: [
			{
				data: [statusDiagram, statusDiagram, statusDiagram],
				backgroundColor: ['#00957A', '#C1C1C1', '#EACC73'],
				hoverBackgroundColor: ['#00A550', '#F0F0F0', '#EACC41'],
			},
		],
		options: {
			// responsive: true,
			cutoutPercentage: 30,
		},
	};

	return (
		<>
			{/* <canvas className="diagram-size"> */}
			<pre>{JSON.stringify(status, null, 2)}</pre>
			<Doughnut data={datas} />
			{/* </canvas> */}
		</>
	);
};

export default Diagram;
