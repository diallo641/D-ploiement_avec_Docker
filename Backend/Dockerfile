FROM node:18

WORKDIR /app

# Dépendances système nécessaires aux modules natifs
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    bash \
    git \
    libssl-dev \
    libcairo2-dev \
    libjpeg-dev \
    libpango1.0-dev \
    libgif-dev \
    librsvg2-dev \
    && rm -rf /var/lib/apt/lists/*

# Copier uniquement les fichiers npm
COPY package*.json ./

# Installation npm avec affichage des logs en cas d'erreur
RUN npm ci --legacy-peer-deps || cat /root/.npm/_logs/*

# Copier le reste du projet
COPY . .

# Port de l'API
EXPOSE 5000

CMD ["node", "Backend/server.js"]
FROM node:18

# Définir le dossier de travail
WORKDIR /app

# Installer dépendances système nécessaires
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    bash \
    git \
    libssl-dev \
    && rm -rf /var/lib/apt/lists/*

# Copier package.json et package-lock.json pour npm install
COPY package*.json ./

# Installer les dépendances
RUN npm install --legacy-peer-deps

# Copier tout le reste du projet
COPY . .

# Exposer le port
EXPOSE 5000

# Lancer le serveur
CMD ["npm", "start"]
