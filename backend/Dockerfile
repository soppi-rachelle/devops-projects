
# Image officielle Node.js
FROM node:22-alpine

# Dossier de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le code source
COPY . .

# Exposer le port du backend
EXPOSE 5111

# Démarrer le serveur
CMD ["node", "server.js"]
