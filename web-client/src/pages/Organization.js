import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getOrganizations } from '../graphql/Organization.js';

import DisplayOrganization from './components/organisations/DisplayOrganization';
import CreateOrganization from './components/organisations/CreateOrganization';
import Button from '../components/Button';
import SearchButton from '../components/SearchButton.js';

const Organization = () => {
	const [displayHover, setDisplayHover] = useState(false);
	const [displayCreation, setDisplayCreation] = useState(false);

	const { loading, error, data } = useQuery(getOrganizations);

	if (loading) return 'Loading...';

	if (error) return `Error! ${error.message}`;
	console.log(data);

	return (
		<div className="organization-container">
			<h2 className="font-chaney_title py-6 text-2xl">Organisations</h2>
			<div className="flex justify-around my-8">
				<SearchButton />

				<Button
					onClick={setDisplayCreation}
					onClickValue={displayCreation}
					buttonLabel="Créer une organisation"
					buttonType="button"
				/>
			</div>

			{displayCreation && <CreateOrganization setDisplayCreation={setDisplayCreation} />}

			<div className="my-24">
				{data.Organizations.length > 0 ? (
					data.Organizations.map((organizationObject, index) => {
						return (
							<DisplayOrganization
								key={index}
								setDisplayHover={setDisplayHover}
								index={index}
								organizationObject={organizationObject}
								displayHover={displayHover}
								organization={data.Organizations[index]}
							/>
						);
					})
				) : (
					<p>Aucune organisation pour le moment</p>
				)}
			</div>
		</div>
	);
};

export default Organization;
