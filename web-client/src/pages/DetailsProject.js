import React from 'react';
import Carousel, { CarouselItem } from '../components/Carousel';

const DetailsProject = () => {
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
        <h3 class="mr-10">Collaborateurs du projet :</h3>
        <img class="rounded-full h-8 w-8 mx-2" src="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg" alt="collabo 1"/>
        <img class="rounded-full h-8 w-8 mx-2" src="https://img-0.journaldunet.com/PujDkZ9YAmFXrZxdCBLKNgiEnRg=/1500x/smart/45776488e7eb4b8080d4ad6e0da4bd74/ccmcms-jdn/11517282.jpg" alt="collabo 1"/>
        <img class="rounded-full h-8 w-8 mx-2" src="https://img-0.journaldunet.com/qFp6OxCIE6wbPymheqNsAcTShUo=/1500x/smart/7cfa455788b7461ea1782b0b72e31c8f/ccmcms-jdn/2383369.jpg" alt="collabo 1"/>
        <img class="rounded-full h-8 w-8 mx-2" src="https://planete.lesechos.fr/wp-content/uploads/2021/02/Mav-1-itv-gates-scaled.jpg" alt="collabo 1"/>
        <img class="rounded-full h-8 w-8 mx-2" src="https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/loisirs/livres/news/la-biographie-de-steve-jobs-paraitra-plus-tot-que-prevu-1755076/19393192-1-fre-FR/La-biographie-de-Steve-Jobs-paraitra-plus-tot-que-prevu.jpg" alt="collabo 1"/>
      </div>
      <Carousel>
        <CarouselItem><img class="object-none object-center" src="https://www.consoglobe.com/wp-content/uploads/2015/12/concours-animaux-sauvages-drole-1.jpg.webp" alt="collabo 1"/></CarouselItem>
        <CarouselItem><img class="object-none object-center" src="https://www.consoglobe.com/wp-content/uploads/2015/12/concours-photo-animaux-sauavge-drole-6.jpg.webp" alt="collabo 1"/></CarouselItem>
        <CarouselItem><img class="object-none object-center" src="https://www.consoglobe.com/wp-content/uploads/2015/12/concours-photo-animaux-sauvages-drole-8.jpg.webp" alt="collabo 1"/></CarouselItem>
        <CarouselItem><img class="object-none object-center" src="https://www.buzzwebzine.fr/wp-content/uploads/2017/02/animaux-selfie-01.jpg" alt="collabo 1"/></CarouselItem>
        <CarouselItem><img class="object-none object-center" src="https://i-mom.unimedias.fr/2020/09/16/les-photos-d-animaux-les-plus-droles-de-l-annee.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=675&w=1200" alt="collabo 1"/></CarouselItem>
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-lg">
                <button className="rounded-full py-1 px-4 bg-wildmine_black text-blue_green_flash" href="http://localhost:3000/issues">
                  #7762
                </button>
              </th>
              <td className="px-6 py-4 font-mono text-black text-lg font-semibold ">
              Pb affichage
              </td>
              <td className="px-6 py-4 font-serif text-lg">
              Le problème résul...
              </td>
              <td className="px-6 py-4 ">
                <div className="bg-green-500 rounded-full h-5 w-5 inline-block"></div>
              </td>
              <td className="px-6 py-4 font-sans italic font-black text-black text-lg">
              design
              </td>
              <td className="px-6 py-4 space-x-2 flex items-center justify-center">
                <img className="rounded-full h-8 w-8" src="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg" alt="collabo 1"/>
                <img className="rounded-full h-8 w-8" src="https://img-0.journaldunet.com/PujDkZ9YAmFXrZxdCBLKNgiEnRg=/1500x/smart/45776488e7eb4b8080d4ad6e0da4bd74/ccmcms-jdn/11517282.jpg" alt="collabo 1"/> 
              </td>
              <td className="px-6 py-4 text-lg">
              28/12/2021
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-lg">
              <button className="rounded-full py-1 px-4 bg-wildmine_black text-blue_green_flash">
                #5642
              </button>
              </th>
              <td className="px-6 py-4 font-mono text-black text-lg font-semibold ">
              Bug avec Docker
              </td>
              <td className="px-6 py-4 font-serif text-lg">
              Launch des cont...
              </td>
              <td className="px-6 py-4">
                <div className="bg-yellow-300 rounded-full h-5 w-5 inline-block"></div>
              </td>
              <td className="px-6 py-4 font-sans italic font-black text-black text-lg">
              dev
              </td>
              <td className="px-6 py-4 space-x-2 flex items-center justify-center">
              <img className="rounded-full h-8 w-8" src="https://img-0.journaldunet.com/qFp6OxCIE6wbPymheqNsAcTShUo=/1500x/smart/7cfa455788b7461ea1782b0b72e31c8f/ccmcms-jdn/2383369.jpg" alt="collabo 1"/>
              </td>
              <td className="px-6 py-4 text-lg">
              26/12/2021
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-lg">
              <button className="rounded-full py-1 px-4 bg-wildmine_black text-blue_green_flash">
              #3126
              </button>
              </th>
              <td className="px-6 py-4 font-mono text-black text-lg font-semibold ">
              Link erroné
              </td>
              <td className="px-6 py-4 font-serif text-lg">
              Le link de la partie...
              </td>
              <td className="px-6 py-4">
                <div className="bg-green-500 rounded-full h-5 w-5 inline-block"></div>
              </td>
              <td className="px-6 py-4 font-sans italic font-black text-black text-lg">
              intégration
              </td>
              <td className="px-6 py-4 space-x-2 flex items-center justify-center">
              <img className="rounded-full h-8 w-8" src="https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/loisirs/livres/news/la-biographie-de-steve-jobs-paraitra-plus-tot-que-prevu-1755076/19393192-1-fre-FR/La-biographie-de-Steve-Jobs-paraitra-plus-tot-que-prevu.jpg" alt="collabo 1"/>
              </td>
              <td className="px-6 py-4 text-lg">
              23/12/2021
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-lg">
              <button className="rounded-full py-1 px-4 bg-wildmine_black text-blue_green_flash">
                #3126
              </button>
              </th>
              <td className="px-6 py-4  font-mono text-black text-lg font-semibold ">
              Base de données
              </td>
              <td className="px-6 py-4 font-serif text-lg">
              La base de donnée...
              </td>
              <td className="px-6 py-4">
                <div className="bg-yellow-300 rounded-full h-5 w-5 inline-block"></div>
              </td>
              <td className="px-6 py-4 font-sans italic font-black text-black text-lg">
              dev
              </td>
              <td className="px-6 py-4 space-x-2 flex items-center justify-center">
              <img className="rounded-full h-8 w-8" src="https://planete.lesechos.fr/wp-content/uploads/2021/02/Mav-1-itv-gates-scaled.jpg" alt="collabo 1"/>
              <img className="rounded-full h-8 w-8" src="https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/loisirs/livres/news/la-biographie-de-steve-jobs-paraitra-plus-tot-que-prevu-1755076/19393192-1-fre-FR/La-biographie-de-Steve-Jobs-paraitra-plus-tot-que-prevu.jpg" alt="collabo 1"/>
              </td>
              <td className="px-6 py-4 text-lg">
              22/12/2021
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-lg">
              <button className="rounded-full py-1 px-4 bg-wildmine_black text-blue_green_flash ">
              #8756
              </button>
              </th>
              <td className="px-6 py-4 font-mono text-black  text-lg font-semibold ">
              Qualité d'image
              </td>
              <td className="px-6 py-4 font-serif text-lg">
              La qualité des imag...
              </td>
              <td className="px-6 py-4">
                <div className="bg-yellow-300 rounded-full h-5 w-5 inline-block"></div>
              </td>
              <td className="px-6 py-4 font-sans italic font-black text-black text-lg">
              design
              </td>
              <td className="px-6 py-4 space-x-2 flex items-center justify-center">
              <img className="rounded-full h-8 w-8" src="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg" alt="collabo 1"/>
              </td>
              <td className="px-6 py-4 text-lg">
              20/12/2021
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="rounded-full place-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-36 w-36" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
        </svg>
      </div>

    </div>
  );
}

export default DetailsProject;