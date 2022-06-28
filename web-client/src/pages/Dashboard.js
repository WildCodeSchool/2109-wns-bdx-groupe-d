import React from 'react';
import diagram from '../assets/images/diagram.png';
import { useQuery } from "@apollo/client";
import { getMyIssues } from '../graphql/Issue';
// import { getUser } from "../graphql/User.js";

const Dashboard = ({ actualUser }) => {
	const { loading, error, data } = useQuery(getMyIssues);
	console.log(data)
	// if (loading) return 'Loading...';

	// if (error) return `Error! ${error.message}`;
	return (
		<div className="dashboard-container">
			{actualUser ? (
				<>
					<div className="grid grid-cols-3 gap-6">
						<div className="col-span-1">
							<div className="max-w-sm rounded overflow-hidden shadow-lg bg-secondary_color columns-2">
								<img className="w-full" src={diagram} alt="diagram" />
								<div className="px-6 py-4">
									<div className="font-bold text-xl mb-2 font-chaney">Résumé de mes tickets</div>
									<div className="grid grid-cols-2 mt-6 mb-6">
										<p className="text_color_light">Non traités En cours Résolus</p>
										<p className="text_color_light">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
											perferendis eaque, exercitationem praesentium nihil.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-2">
							<p className="font-bold text-xl mb-2 text_color_light font-chaney divide-y divide-solid">
								Projets auxquels je suis rattaché
							</p>
							<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
								<table className="w-full text-sm border text-left text-gray-500 dark:text-gray-400">
									<thead className="text-xs text-wildmine_black uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
										<tr>
											<th scope="col" className="px-6 py-3">
												Projet
											</th>
											<th scope="col" className="px-6 py-3">
												Entreprise
											</th>
											<th scope="col" className="px-6 py-3">
												Catégorie
											</th>
											<th scope="col" className="px-6 py-3">
												Date
											</th>
										</tr>
									</thead>
									<tbody>
										<tr className="text-text_color_light border-b dark:bg-gray-800 dark:border-gray-700">
											<th scope="row" className="px-6 py-4 font-medium dark:text-white whitespace-nowrap">
												plat learning
											</th>
											<td className="px-6 py-4">SGB</td>
											<td className="px-6 py-4">dev</td>
											<td className="px-6 py-4">15/09/2020</td>
										</tr>
										<tr className="text-text_color_light border-b dark:bg-gray-800 dark:border-gray-700">
											<th scope="row" className="px-6 py-4 font-medium dark:text-white whitespace-nowrap">
												Notre projet
											</th>
											<td className="px-6 py-4">OPC</td>
											<td className="px-6 py-4">dev</td>
											<td className="px-6 py-4">12/06/2022</td>
										</tr>
										<tr className="text-text_color_light dark:bg-gray-800">
											<th scope="row" className="px-6 py-4 font-medium dark:text-white whitespace-nowrap">
												Plat e-commerce
											</th>
											<td className="px-6 py-4">Smiling Green bean</td>
											<td className="px-6 py-4">dev</td>
											<td className="px-6 py-4">04/05/2020</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className="col-span-3">
							<p className="font-bold text-xl text_color_light mt-8 mb-12 font-chaney">Derniers tickets traités</p>
							<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
								<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-32">
									<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
										<tr>
											<th scope="col" className="px-6 py-3">
												No du ticket
											</th>
											<th scope="col" className="px-6 py-3">
												Nom du ticket
											</th>
											<th scope="col" className="px-6 py-3">
												Commentaire
											</th>
											<th scope="col" className="px-6 py-3">
												Statut
											</th>
											<th scope="col" className="px-6 py-3">
												Catégorie
											</th>
											<th scope="col" className="px-6 py-3">
												Client
											</th>
											<th scope="col" className="px-6 py-3">
												Date
											</th>
										</tr>
									</thead>
									<tbody className="bg-gradient-to-b from-wildmine_black to-gray-700 text-text_color_light">
										<tr className="dark:bg-gray-800 dark:border-gray-700">
											<th scope="row" className="px-6 py-4 font-medium dark:text-white whitespace-nowrap">
												<span className="bg-black_badge text-secondary_color text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 font-chaney">
													#16257
												</span>
											</th>
											<td className="px-6 py-4">Pb affichage</td>
											<td className="px-6 py-4">Le problème résulte...</td>
											<td className="px-6 py-4">
												<strong className="border border-warning text-white bg-warning uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide"></strong>
											</td>
											<td className="px-6 py-4">dev</td>
											<td className="px-6 py-4">OPC</td>
											<td className="px-6 py-4">08/01/2021</td>
										</tr>
										<tr className="dark:bg-gray-800 dark:border-gray-700">
											<th scope="row" className="px-6 py-4 font-medium dark:text-white whitespace-nowrap">
												<span className="bg-black_badge text-secondary_color text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 font-chaney">
													#28760
												</span>
											</th>
											<td className="px-6 py-4">Bug avec Docker</td>
											<td className="px-6 py-4">Launch des cont...</td>
											<td className="px-6 py-4">
												<strong className="border border-success text-white bg-success uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide"></strong>
											</td>
											<td className="px-6 py-4">dev</td>
											<td className="px-6 py-4">SGB</td>
											<td className="px-6 py-4">13/02/2021</td>
										</tr>
										<tr className="dark:bg-gray-800">
											<th scope="row" className="px-6 py-4 font-medium dark:text-white whitespace-nowrap">
												<span className="bg-black_badge text-secondary_color text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 font-chaney">
													#82635
												</span>
											</th>
											<td className="px-6 py-4">Link erroné</td>
											<td className="px-6 py-4">La base de données...</td>
											<td className="px-6 py-4">
												{' '}
												<strong className="border border-danger text-white bg-danger uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide"></strong>
											</td>
											<td className="px-6 py-4">dev</td>
											<td className="px-6 py-4">Surf Coffee Shop</td>
											<td className="px-6 py-4">20/06/2021</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					{/* </div> */}
				</>
			) : (
				<>Pas de données :'(</>
			)}
		</div>
	);
};

export default Dashboard;
