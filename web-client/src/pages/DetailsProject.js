import React from 'react';

//import projectImage from '../images/dev.jpeg';



const DetailsProject = () => {
    const projectImages = [
      "1",
      "2",
    ]
  return (
    <div className="detail-project-container">
      <div className='detail-project-rollback'>
        <a to="/projects">Projects {' > '} The Smiling Green Bean</a>
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
        <div id="carouselDarkVariant" class="carousel slide carousel-fade carousel-dark relative" data-bs-ride="carousel">
          <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="1" aria-label="Slide 1"></button>
            <button data-bs-target="#carouselDarkVariant" data-bs-slide-to="2" aria-label="Slide 1"></button>
          </div>
          <div class="carousel-inner relative w-full overflow-hidden">
            <div class="carousel-item active relative float-left w-full">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp" class="block w-full" alt="Motorbike Smoke"/>
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item active relative float-left w-full">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp" class="block w-full" alt="Mountaintop"/>
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">First slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item active relative float-left w-full">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp" class="block w-full" alt="Woman Reading a Book"/>
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">First slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselDarkVariant"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      <div>
        <p>Tickets en cours</p>
      </div>     
      <div class="relative overflow-x-auto my-6 rounded-lg"> 
        <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 shadow-md">
            <tr>
              <th scope="col" class="px-6 py-3">
              N° de ticket
              </th>
              <th scope="col" class="px-6 py-3">
              Nom du ticket
              </th>
              <th scope="col" class="px-6 py-3">
              Commentaire
              </th>
              <th scope="col" class="px-6 py-3">
              Statut
              </th>
              <th scope="col" class="px-6 py-3">
              Catégorie
              </th>
              <th scope="col" class="px-6 py-3">
              Personne assigné
              </th>
              <th scope="col" class="px-6 py-3">
              Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-lg">
                <button class="rounded-full py-1 px-4 bg-wildmine_black text-blue_green_flash">
                  #7762
                </button>
              </th>
              <td class="px-6 py-4 font-mono text-black text-lg font-semibold ">
              Pb affichage
              </td>
              <td class="px-6 py-4 font-serif text-lg">
              Le problème résul...
              </td>
              <td class="px-6 py-4 ">
                <div class="bg-green-500 rounded-full h-5 w-5 inline-block"></div>
              </td>
              <td class="px-6 py-4 font-sans italic font-black text-black text-lg">
              design
              </td>
              <td class="px-6 py-4 space-x-2 flex items-center justify-center">
                <img class="rounded-full h-8 w-8" src="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg" alt="collabo 1"/>
                <img class="rounded-full h-8 w-8" src="https://img-0.journaldunet.com/PujDkZ9YAmFXrZxdCBLKNgiEnRg=/1500x/smart/45776488e7eb4b8080d4ad6e0da4bd74/ccmcms-jdn/11517282.jpg" alt="collabo 1"/> 
              </td>
              <td class="px-6 py-4 text-lg">
              28/12/2021
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-lg">
              <button class="rounded-full py-1 px-4 bg-wildmine_black text-blue_green_flash">
                #5642
              </button>
              </th>
              <td class="px-6 py-4 font-mono text-black text-lg font-semibold ">
              Bug avec Docker
              </td>
              <td class="px-6 py-4 font-serif text-lg">
              Launch des cont...
              </td>
              <td class="px-6 py-4">
                <div class="bg-yellow-300 rounded-full h-5 w-5 inline-block"></div>
              </td>
              <td class="px-6 py-4 font-sans italic font-black text-black text-lg">
              dev
              </td>
              <td class="px-6 py-4 space-x-2 flex items-center justify-center">
              <img class="rounded-full h-8 w-8" src="https://img-0.journaldunet.com/qFp6OxCIE6wbPymheqNsAcTShUo=/1500x/smart/7cfa455788b7461ea1782b0b72e31c8f/ccmcms-jdn/2383369.jpg" alt="collabo 1"/>
              </td>
              <td class="px-6 py-4 text-lg">
              26/12/2021
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-lg">
              <button class="rounded-full py-1 px-4 bg-wildmine_black text-blue_green_flash">
              #3126
              </button>
              </th>
              <td class="px-6 py-4 font-mono text-black text-lg font-semibold ">
              Link erroné
              </td>
              <td class="px-6 py-4 font-serif text-lg">
              Le link de la partie...
              </td>
              <td class="px-6 py-4">
                <div class="bg-green-500 rounded-full h-5 w-5 inline-block"></div>
              </td>
              <td class="px-6 py-4 font-sans italic font-black text-black text-lg">
              intégration
              </td>
              <td class="px-6 py-4 space-x-2 flex items-center justify-center">
              <img class="rounded-full h-8 w-8" src="https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/loisirs/livres/news/la-biographie-de-steve-jobs-paraitra-plus-tot-que-prevu-1755076/19393192-1-fre-FR/La-biographie-de-Steve-Jobs-paraitra-plus-tot-que-prevu.jpg" alt="collabo 1"/>
              </td>
              <td class="px-6 py-4 text-lg">
              23/12/2021
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-lg">
              <button class="rounded-full py-1 px-4 bg-wildmine_black text-blue_green_flash">
                #3126
              </button>
              </th>
              <td class="px-6 py-4  font-mono text-black text-lg font-semibold ">
              Base de données
              </td>
              <td class="px-6 py-4 font-serif text-lg">
              La base de donnée...
              </td>
              <td class="px-6 py-4">
                <div class="bg-yellow-300 rounded-full h-5 w-5 inline-block"></div>
              </td>
              <td class="px-6 py-4 font-sans italic font-black text-black text-lg">
              dev
              </td>
              <td class="px-6 py-4 space-x-2 flex items-center justify-center">
              <img class="rounded-full h-8 w-8" src="https://planete.lesechos.fr/wp-content/uploads/2021/02/Mav-1-itv-gates-scaled.jpg" alt="collabo 1"/>
              <img class="rounded-full h-8 w-8" src="https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/loisirs/livres/news/la-biographie-de-steve-jobs-paraitra-plus-tot-que-prevu-1755076/19393192-1-fre-FR/La-biographie-de-Steve-Jobs-paraitra-plus-tot-que-prevu.jpg" alt="collabo 1"/>
              </td>
              <td class="px-6 py-4 text-lg">
              22/12/2021
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-lg">
              <button class="rounded-full py-1 px-4 bg-wildmine_black text-blue_green_flash ">
              #8756
              </button>
              </th>
              <td class="px-6 py-4 font-mono text-black  text-lg font-semibold ">
              Qualité d'image
              </td>
              <td class="px-6 py-4 font-serif text-lg">
              La qualité des imag...
              </td>
              <td class="px-6 py-4">
                <div class="bg-yellow-300 rounded-full h-5 w-5 inline-block"></div>
              </td>
              <td class="px-6 py-4 font-sans italic font-black text-black text-lg">
              design
              </td>
              <td class="px-6 py-4 space-x-2 flex items-center justify-center">
              <img class="rounded-full h-8 w-8" src="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg" alt="collabo 1"/>
              </td>
              <td class="px-6 py-4 text-lg">
              20/12/2021
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='project-liste-issues'>
      </div>

      
    </div>
  );
}

export default DetailsProject;