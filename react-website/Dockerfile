# Use the latest LTS version of Node.js
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app/react-website

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Exposer le port sur lequel votre application s'exécute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]