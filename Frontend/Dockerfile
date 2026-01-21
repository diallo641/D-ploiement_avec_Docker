
FROM node:18 AS build

WORKDIR /app

# Copier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances Node
RUN npm install

# Copier tout le contenu du dossier Frontend
COPY . .

# Build Tailwind CSS (ou autres scripts de build)
RUN npm run build

# -----------------------------
# Étape 2 : Serveur statique Nginx
# -----------------------------
FROM nginx:alpine

# Copier tout le contenu du projet dans /usr/share/nginx/html
COPY --from=build /app /usr/share/nginx/html

# Exposer le port Nginx
EXPOSE 80

# Lancer Nginx en foreground
CMD ["nginx", "-g", "daemon off;"]
