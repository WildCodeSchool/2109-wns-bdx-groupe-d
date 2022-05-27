import React, { useState } from 'react';
import Carousel, { CarouselItem } from '../components/Carousel';
import { NavLink } from 'react-router-dom';

const projectIssus = [
  { id: 1, 
    ticketNumber: '#7762', 
    ticketName: 'Pb affichage', 
    comment: 'Le problème résul...', 
    statut: 'Done', 
    categorie: 'design', 
    avatars: [
      { id: 1,
        img : 'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg'
      },
      { id: 2,
        img: 'https://img-0.journaldunet.com/PujDkZ9YAmFXrZxdCBLKNgiEnRg=/1500x/smart/45776488e7eb4b8080d4ad6e0da4bd74/ccmcms-jdn/11517282.jpg'
      }
    ], 
    date: '28/12/2021' 
  },
  { id: 2, 
    ticketNumber: '#5642', 
    ticketName: 'Bug avec Docker', 
    comment: 'Launch des cont...', 
    statut: 'In progress', 
    categorie: 'dev', 
    avatars: [
      { id: 1,
        img:'https://img-0.journaldunet.com/qFp6OxCIE6wbPymheqNsAcTShUo=/1500x/smart/7cfa455788b7461ea1782b0b72e31c8f/ccmcms-jdn/2383369.jpg'
      }
    ], 
    date: '26/12/2021' 
  },
  { id: 3, 
    ticketNumber: '#3126', 
    ticketName: 'Link erroné', 
    comment: 'Le link de la partie...', 
    statut: 'Done', 
    categorie: 'intégration', 
    avatars: [
      { id: 1,
        img: 'https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/loisirs/livres/news/la-biographie-de-steve-jobs-paraitra-plus-tot-que-prevu-1755076/19393192-1-fre-FR/La-biographie-de-Steve-Jobs-paraitra-plus-tot-que-prevu.jpg'
      }
    ], 
    date: '23/12/2021' 
  },
  { id: 4, 
    ticketNumber: '#3226', 
    ticketName: 'Base de données', 
    comment: 'La base de donnée...', 
    statut: 'In progress', 
    categorie: 'dev', 
    avatars: [
      { id: 1,
        img: 'https://planete.lesechos.fr/wp-content/uploads/2021/02/Mav-1-itv-gates-scaled.jpg'
      },
      { id: 2,
        img: 'https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/loisirs/livres/news/la-biographie-de-steve-jobs-paraitra-plus-tot-que-prevu-1755076/19393192-1-fre-FR/La-biographie-de-Steve-Jobs-paraitra-plus-tot-que-prevu.jpg'
      }
    ], 
    date: '21/12/2021' 
  },
  { id: 5, 
    ticketNumber: '#8756', 
    ticketName: 'Qualité d\'image', 
    comment: 'La qualité des imag...', 
    statut: 'In progress', 
    categorie: 'design', 
    avatars: [
      { id: 1,
        img: 'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg'
      }
    ], 
    date: '17/12/2021' 
  },
  { id: 6, 
    ticketNumber: '#7864', 
    ticketName: 'Mauvais resposive', 
    comment: 'Les éléments sont...', 
    statut: 'Done', 
    categorie: 'intégration', 
    avatars: [
      { id: 1,
        img: 'https://planete.lesechos.fr/wp-content/uploads/2021/02/Mav-1-itv-gates-scaled.jpg'
      },
      { id: 2,
        img: 'https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/loisirs/livres/news/la-biographie-de-steve-jobs-paraitra-plus-tot-que-prevu-1755076/19393192-1-fre-FR/La-biographie-de-Steve-Jobs-paraitra-plus-tot-que-prevu.jpg'
      }
    ], 
    date: '15/12/2021' 
  },
  { id: 7, 
    ticketNumber: '#6314', 
    ticketName: 'Erreur chargement', 
    comment: 'Erreur lors du...', 
    statut: 'In progress', 
    categorie: 'dev', 
    avatars: [
      { id: 1,
        img:'https://img-0.journaldunet.com/qFp6OxCIE6wbPymheqNsAcTShUo=/1500x/smart/7cfa455788b7461ea1782b0b72e31c8f/ccmcms-jdn/2383369.jpg'
      }
    ], 
    date: '13/12/2021' 
  },
  { id: 8, 
    ticketNumber: '#9982', 
    ticketName: 'Décalage navbar', 
    comment: 'Navbar à déca...', 
    statut: 'In progress', 
    categorie: 'intégration', 
    avatars: [
      { id: 1,
        img: 'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg'
      }
    ], 
    date: '11/12/2021' 
  },
  { id: 9, 
    ticketNumber: '#2457', 
    ticketName: 'Changement chart graphic', 
    comment: 'Chagement des coul...', 
    statut: 'Done', 
    categorie: 'design', 
    avatars: [
      { id: 1,
        img: 'https://planete.lesechos.fr/wp-content/uploads/2021/02/Mav-1-itv-gates-scaled.jpg'
      },
      { id: 2,
        img: 'https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/loisirs/livres/news/la-biographie-de-steve-jobs-paraitra-plus-tot-que-prevu-1755076/19393192-1-fre-FR/La-biographie-de-Steve-Jobs-paraitra-plus-tot-que-prevu.jpg'
      }
    ], 
    date: '10/12/2021' 
  },
  { id: 10, 
    ticketNumber: '#6791', 
    ticketName: 'Etude parcours utilisateur', 
    comment: 'Parcours utilisa...', 
    statut: 'In progress', 
    categorie: 'design', 
    avatars: [
      { id: 1,
        img : 'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg'
      },
      { id: 2,
        img: 'https://img-0.journaldunet.com/PujDkZ9YAmFXrZxdCBLKNgiEnRg=/1500x/smart/45776488e7eb4b8080d4ad6e0da4bd74/ccmcms-jdn/11517282.jpg'
      }
    ], 
    date: '9/12/2021' 
  }
];

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


const DetailsProject = () => {

  const [showFiveTickets, setShowFiveTickets] = useState(false)

  function Statut(value) {
    if (value === 'Done') {
      return <div className="bg-green-500 rounded-full h-5 w-5 inline-block"></div>;
    } else {
      return <div className="bg-yellow-300 rounded-full h-5 w-5 inline-block"></div>;
    }
  }

  return (
    <div className="detail-project-container">
      <div className='detail-project-rollback'>
        <a href='http://localhost:3000/projects'>Projects {' > '} The Smiling Green Bean</a>
      </div>
      <div className='project-name'>
        <h1>SURF COFFEE SHOP</h1>
      </div>
      <div className='project-description'>
        <h2>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h2>
      </div>
      <div className='project-collaborators flex items-start justify-start'>
        <h3 className="mr-10">Collaborateurs du projet :</h3>
        {collaboratorsProject && collaboratorsProject.map(collaborator =>
          <img key={collaborator.id} className="rounded-full h-8 w-8 mx-2" src={collaborator.img} alt="collabo 1"/>
        )}  
      </div>
      <Carousel>
        {imagesProject && imagesProject.map(image =>
          <CarouselItem><img key={image.id} className="object-none object-center" src={image.url} alt="collabo 1"/></CarouselItem>
        )}
      </Carousel>
      <div className='font-black text-2xl pt-20'>
        <p>Tickets en cours</p>
      </div>     
      <div className="relative overflow-x-auto my-6 rounded-lg"> 
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
                  <NavLink to="/issues" className="rounded-full py-1 px-4 bg-wildmine_black text-blue_green_flash">
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
                      <NavLink to="/issues" className="rounded-full py-1 px-4 bg-wildmine_black text-blue_green_flash">
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
      </div>
      <div>
        { !showFiveTickets 
            ? <button className="bg-blue_green_flash text-black rounded-full flex items-center justify-center" onClick={() => { setShowFiveTickets(true) }}><svg class="w-14 h-14 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg></button>
            : <button className="bg-blue_green_flash text-black rounded-full" onClick={() => { setShowFiveTickets(false) }}><svg class="h-14 w-14 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg></button>
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