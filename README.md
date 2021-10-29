# 2109-wns-bdx-groupe-d

## Projet Fil Rouge : Outil de Gestion de Projet

Blablabla Lorem Ipsum

----------------------------
# Mise en place de Docker & MySQL

## Se rendre sur la documentation de Docker et chercher l'image de MySQL (si besoin)

### Lancer la commande pour initialiser un nouveau container

`` $ docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag ``

- Changer le **some-mysql** pour le nom de votre choix .
- Remplacer le **my-secret-pw** pour le mot de passe voulu.
- Remplacer le **tag** par la version voulue ou bien *:latest* pour avoir la dernière version.

### Accéder à MySQL via le bash 

``
$ docker exec -it some-mysql bash
``
- Remplacer le **some-mysql** par le nom défini lors de la première étape.

### Accéder à votre MySQL

`mysql -uroot -p`

- Le mot de passe que vous avez défini plus haut vous sera demandé après cette commande.

- Après cette commande, vous devriez accéder à votre MySQL : ils vous suffit alors de créer votre base de données.
- Le nom de la base de données par défaut sera **wildmine**.

``CREATE DATABASE wildmine;``

- Vérifier si la base de données a bien été créée.

``SHOW DATABASES;``