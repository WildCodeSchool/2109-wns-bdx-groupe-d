import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ISSUES = [
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

const Issues = () => {

  function Statut(value) {
    if (value === 'Done') {
      return <div className="bg-green-500 rounded-full h-5 w-5 inline-block"></div>;
    } else {
      return <div className="bg-yellow-300 rounded-full h-5 w-5 inline-block"></div>;
    }
  }

  const [issues, setIssues] = useState('');

  const [foundIssues, setFoundIssues] = useState(ISSUES);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = ISSUES.filter((issue) => {
        return issue.ticketName.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundIssues(results);
    } else {
      setFoundIssues(ISSUES);
      // If the text field is empty, show all users
    }

    setIssues(keyword);
  };


  return (
    <div className="issues-container">
      <div className='font-black text-2xl pt-20 pb-8'>
        <p>Tickets #7762</p>
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
            {ISSUES && ISSUES.slice(0, 1).map(issue =>
              <tr key={issue.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-lg">
                  <NavLink to="/issues" className="rounded-full py-1 px-4 bg-wildmine_black text-blue_green_flash">
                    {issue.ticketNumber}
                  </NavLink>
                </td>
                <td className="px-6 py-4 font-mono text-black text-lg font-semibold ">{issue.ticketName}</td>
                <td className="px-6 py-4 font-serif text-lg">{issue.comment}</td>
                <td className="px-6 py-4 font-serif text-lg"><Statut value={issue.statut}/></td>
                <td className="px-6 py-4 font-sans italic font-black text-black text-lg">{issue.categorie}</td>
                <td className="px-6 py-4 space-x-2 flex items-center justify-center">
                  {issue.avatars && issue.avatars.map(avatar =>
                    <img key={avatar} className="rounded-full h-8 w-8" src={avatar.img} alt="collabo 1"/>
                  )}
                </td>
                <td className="px-6 py-4 text-lg">{issue.date}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Issues;