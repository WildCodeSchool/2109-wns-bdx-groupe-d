import React, { useState } from 'react';
import Carousel, { CarouselItem } from '../components/Carousel';
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { getProjectById } from "../graphql/Project.js";
import smiley from '../images/smiley.png';
import Button from '../components/Button';
import CreateIssue from './components/issues/CreateIssue';
import { getIssuesByProjectId } from '../graphql/Issue';
import Issues from './Issues';

const imagesProject = [
  { id: 1,
    url: 'https://www.consoglobe.com/wp-content/uploads/2015/12/concours-animaux-sauvages-drole-1.jpg.webp'
  },
  { id: 2,
    url: 'https://www.consoglobe.com/wp-content/uploads/2015/12/concours-photo-animaux-sauavge-drole-6.jpg.webp'
  },
  { id: 3,
    url: 'https://www.consoglobe.com/wp-content/uploads/2015/12/concours-photo-animaux-sauvages-drole-8.jpg.webp'
  },
  { id: 4,
    url: 'https://www.buzzwebzine.fr/wp-content/uploads/2017/02/animaux-selfie-01.jpg'
  },
  { id: 5,
    url: 'https://i-mom.unimedias.fr/2020/09/16/les-photos-d-animaux-les-plus-droles-de-l-annee.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=675&w=1200'
  },
];

const collaboratorsProject = [
  { id: 1,
    img: 'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg'
  },
  { id: 2,
    img: 'https://img-0.journaldunet.com/PujDkZ9YAmFXrZxdCBLKNgiEnRg=/1500x/smart/45776488e7eb4b8080d4ad6e0da4bd74/ccmcms-jdn/11517282.jpg'
  },
  { id: 3,
    img: 'https://img-0.journaldunet.com/qFp6OxCIE6wbPymheqNsAcTShUo=/1500x/smart/7cfa455788b7461ea1782b0b72e31c8f/ccmcms-jdn/2383369.jpg'
  },
  { id: 4,
    img: 'https://planete.lesechos.fr/wp-content/uploads/2021/02/Mav-1-itv-gates-scaled.jpg'
  },
  { id: 5,
    img: 'https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/loisirs/livres/news/la-biographie-de-steve-jobs-paraitra-plus-tot-que-prevu-1755076/19393192-1-fre-FR/La-biographie-de-Steve-Jobs-paraitra-plus-tot-que-prevu.jpg'
  },
];


const DetailsProject = ({ actualUser }) => {
  const [displayCreation, setDisplayCreation] = useState(false);
  const [showFiveTickets, setShowFiveTickets] = useState(false)

  let { id } = useParams();

  const { loading, error, data, refetch } = useQuery(getProjectById, { variables: { id: parseInt(id) } });

  const issuesQuery = useQuery(getIssuesByProjectId, { variables: { projectId: parseInt(id) } });
  console.log(issuesQuery)

  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;

  return (
    <div className="detail-project-container">
      <div className='flex justify-between mb-8'>
        <div>
          <div className='detail-project-rollback'>
            {/* <a href='http://localhost:3000/projects'> */}
              {`Projets > ${data.getProjectById.name}`}
            {/* </a> */}
          </div>

          <div className='project-name'>
            <h1>{data.getProjectById.name}</h1>
          </div>

          <div className='project-description'>
            <h2>{ data.getProjectById.description }</h2>
          </div>

          <div className='project-collaborators flex items-start justify-start'>

            <h3 className="mr-10">
              Collaborateurs du projet :
            </h3>

            {collaboratorsProject && collaboratorsProject.map(collaborator =>
              <img key={collaborator.id} className="rounded-full h-8 w-8 mx-2" src={collaborator.img} alt="collabo 1"/>
            )}

          </div>
        </div>
        
        <Button
          onClick={setDisplayCreation}
          onClickValue={displayCreation}
          buttonLabel='Créer un ticket'
          buttonType='button'
        />

      {displayCreation &&
        <CreateIssue
          setDisplayCreation={setDisplayCreation}
          projectName={data.getProjectById.name}  
          projectId={data.getProjectById.id}
          userId={actualUser.id}
          refetch={() => refetch()}
        />
      }

      </div>

      <img
        className="object-none object-center"
        src={data.getProjectById.projectPictureName ? `/images/${data.getProjectById.projectPictureName}` : smiley} alt="collabo 1"
      />

      <Carousel>
        {imagesProject && imagesProject.map(image =>
          <CarouselItem>
            <img
              key={image.id}
              className="object-none object-center"
              src={image.url} alt="collabo 1"
            />
          </CarouselItem>
        )}
      </Carousel>

      {/* <div className='font-black text-2xl pt-20'>
        <NavLink to="/IssuesProject" >
          <p>Tickets en cours</p>
        </NavLink>
      </div> */}
      
      {!issuesQuery.loading && issuesQuery.data.getIssuesByProjectId[0]
      ? <div>
        <p className='font-black text-2xl pt-20'>Tickets en cours</p>
        
        <Issues issues={issuesQuery.data.getIssuesByProjectId}/>
      </div>
      : <p className='mx-auto text-xl font-bold tracking-wide py-20'>Aucun ticket associé à ce projet pour le moment</p>
      }
      {/* <div className="relative overflow-x-auto my-6 rounded-lg"> 
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 shadow-md">
            <tr>
              <th scope="col" className="px-6 py-3">
              N° de ticket
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
              Personne assigné
              </th>
              <th scope="col" className="px-6 py-3">
              Date
              </th>
            </tr>
          </thead>
          <tbody>
            {projectIssus && projectIssus.slice(0, 5).map(projectIssu =>
              <tr key={projectIssu.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-lg">
                  <NavLink to={"/issue/" + projectIssu.id} className="rounded-full py-1 px-4 bg-wildmine_black text-blue_green_flash">
                    {projectIssu.ticketNumber}
                  </NavLink>
                </td>
                <td className="px-6 py-4 font-mono text-black text-lg font-semibold ">{projectIssu.ticketName}</td>
                <td className="px-6 py-4 font-serif text-lg">{projectIssu.comment}</td>
                <td className="px-6 py-4 font-serif text-lg"><Statut value={projectIssu.statut}/></td>
                <td className="px-6 py-4 font-sans italic font-black text-black text-lg">{projectIssu.categorie}</td>
                <td className="px-6 py-4 space-x-2 flex items-center justify-center">
                  {projectIssu.avatars && projectIssu.avatars.map(avatar =>
                    <img key={avatar} className="rounded-full h-8 w-8" src={avatar.img} alt="collabo 1"/>
                  )}
                </td>
                <td className="px-6 py-4 text-lg">{projectIssu.date}</td>
              </tr>
            )}
            { showFiveTickets 
              ? projectIssus && projectIssus.slice(6, 10).map(projectIssu =>
                  <tr key={projectIssu.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-lg">
                      <NavLink to={"/issue/" + projectIssu.id} className="rounded-full py-1 px-4 bg-wildmine_black text-blue_green_flash">
                        {projectIssu.ticketNumber}
                      </NavLink>
                    </td>
                    <td className="px-6 py-4 font-mono text-black text-lg font-semibold ">{projectIssu.ticketName}</td>
                    <td className="px-6 py-4 font-serif text-lg">{projectIssu.comment}</td>
                    <td className="px-6 py-4 font-serif text-lg"><Statut value={projectIssu.statut}/></td>
                    <td className="px-6 py-4 font-sans italic font-black text-black text-lg">{projectIssu.categorie}</td>
                    <td className="px-6 py-4 space-x-2 flex items-center justify-center">
                      {projectIssu.avatars && projectIssu.avatars.map(avatar =>
                        <img key={avatar} className="rounded-full h-8 w-8" src={avatar.img} alt="collabo 1"/>
                      )}
                    </td>
                    <td className="px-6 py-4 text-lg">{projectIssu.date}</td>
                  </tr>
                )
              : null
            }
          </tbody>
        </table>
      </div> */}
      <div>
        {!showFiveTickets
            ? <button className="bg-blue_green_flash text-black rounded-full flex items-center justify-center" onClick={() => { setShowFiveTickets(true) }}><svg className="w-14 h-14 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg></button>
            : <button className="bg-blue_green_flash text-black rounded-full" onClick={() => { setShowFiveTickets(false) }}><svg className="h-14 w-14 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg></button>
        }
      </div>
      
      <div className="rounded-full place-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-36 w-36" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export default DetailsProject;