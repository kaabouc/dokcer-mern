# Étape 1 : Utiliser une image de base officielle Node.js
FROM node:18


# Étape 2 : Définir le répertoire de travail
WORKDIR /usr/src/app

# Étape 3 : Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier le reste des fichiers du projet
COPY . .

# Étape 6 : Exposer le port sur lequel l'application va tourner
EXPOSE 5000

# Étape 7 : Démarrer l'application
CMD ["npm", "start"]
