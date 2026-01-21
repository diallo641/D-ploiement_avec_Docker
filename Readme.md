# Projet Docker - Backend & Frontend

## 🔹 Objectif du projet

Ce projet a pour objectif de mettre en place un **déploiement complet sous Docker** pour un projet composé de deux parties :

1. **Backend** : API REST "Personne" avec un CRUD complet pour gérer les utilisateurs.
2. **Frontend** : Interface utilisateur utilisant **Tailwind CSS**, avec des pages comme :
   - `index.html`  
   - `ajouterpersonne.html`  
   - `personnes.html`  

Chaque partie dispose de son **Dockerfile** dédié pour construire l'image Docker correspondante. Le fichier **docker-compose.yml** permet de lier les containers Backend et Frontend afin de faciliter la communication.  

> ⚠️ La base de données utilisée est **MongoDB Atlas (cloud)**, aucun service Mongo n’est défini dans Docker Compose.

## 🔹 Structure du projet
Projet_Final_Docker/
│
├─ Backend/
│ ├─ model/personne.js
│ ├─ controller/controller.js
│ ├─ routes/personne.js
│ ├─ config/basededonnee.js
│ ├─ server.js
│ └─ Dockerfile
│
├─ Frontend/
│ ├─ index.html
│ ├─ Dockerfile
│ ├─ pages/
│ │ ├─ js/
│ │ ├─ style/
│ │ └─ Autres pages html
│
├─ deploiement.sh
└─ docker-compose.yml

---

## 🔹 Technologies utilisées

- **Backend :** Node.js, Express.js  
- **Frontend :** HTML, JavaScript, Tailwind CSS  
- **Base de données :** MongoDB Atlas (Cloud)  
- **Conteneurisation :** Docker, Docker Compose  

---

## 🔹 Fonctionnalités principales

### Backend
- API REST "Personne"  
- CRUD complet (Créer, Lire, Mettre à jour, Supprimer)    
- Connexion à MongoDB Atlas  

### Frontend
- Interface responsive grâce à Tailwind CSS  
- Pages interactives pour ajouter et consulter des personnes, rechercher une personne  
- Communication avec le Backend via fetch API  

---

## 🔹 Lancer le projet en local

1. Vérifier que Docker et Docker Compose sont installés.  
2. Assurez-vous que les images Backend et Frontend existent (`docker images`).  
3. Lancer les containers :
docker compose up -d 

## 🔹 Accéder en local :
Frontend : http://localhost:3000
Backend API : http://localhost:5000
**email: admin@gmail.com**
**password: admin123!**

# Auteur : 
-**Thierno Boubacar DIALLO**



