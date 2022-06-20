# 2109-wns-bdx-groupe-d

## Projet Fil Rouge : Outil de Gestion de Projet

----------------------------

### Prerequis :
 *Node >= 16.x.x*
 
 *NPM >= 7.x.x*
 
# Pour lancer l'app

### Lancer la commande pour la lancer

`` $ docker-compose up --build ``

### Bon chance.


# Déploiement de l'application 

## Contexte 

-  Création de deux fichiers *staging-front.yml* et *staging-back.yml* dans le dossier ``.github>workflows`` : ces derniers permettent de dicter un certains nombre d'étapes que doit prendre en compte Github Actions pour pusher les images sur DockerHub.

- Création sur DockerHub des repositories recevant nos fichiers de *front* et *back*.
- Définition de secrets sur Github pour la liaison entre ce dernier et DockerHub.

	*Les étapes ci-dessus permettent la mise à jour automatique des images lors d'un push sur la branche **staging***.
- Mise en place d'un *Caddyfile* pour rediriger les URL sur l'adresse IP et le localhost du serveur.

- Rédaction d'un script **.sh** pour la mise en place d'une mise à jour automatique
- Installation d'un *Webhook* tournant sur le **port:9000** -> redirection des requêtes venant de ops.[notre-url]/hooks/update.
- Mise en place sur nos 2 repositories Dockerhub (*front* et *back*) d'un Webhook qui envoie une requête sur ops.[notre-url]/hooks/update à chaque fois que les images subissent une modification.
*Cette dernière permet de mettre à jour le serveur de développement automatiquement.*

La mise en place de toutes ces étapes permet, au *push* sur la branche **staging**, de mettre à jour automatiquement le serveur de développement.

Résumé des étapes au *push* sur **staging** :
	- *push* sur la branche **staging** (bien évidemment)
	- build via les Github Actions
	- push des images Docker sur le DockerHub
	- requêtes sur l'url  ops.[notre-url]/hooks/update une fois les images DockerHub modifiées
	- la requête sur notre url déclenche le script **.sh**, mettant à jour le serveur de développement
	- après un délai d'environ 5 minutes, vérification du bon fonctionnement via l'URL *staging.[notre-url]*


--------------------------------------

## Modification du serveur de production

- connexion au serveur de prod ``ssh [user]@[ADRESSE-IP] -p 2269``
- ``cd wildmine``
- ``docker-compose -f docker-compose.prod.yml down && \ ``
``docker-compose -f docker-compose.prod.yml pull && \ ``    ``GATEWAY_PORT=8001 docker-compose -f docker-compose.prod.yml up -d``




