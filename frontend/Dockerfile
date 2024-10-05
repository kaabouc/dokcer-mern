# Étape 1 : Utiliser une image de base officielle Node.js pour builder le front-end
FROM node:18 as build

# Étape 2 : Définir le répertoire de travail
WORKDIR /usr/src/app

# Étape 3 : Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier le reste des fichiers
COPY . .

# Étape 6 : Builder l'application
RUN npm run build

# Étape 7 : Utiliser une image Nginx pour servir les fichiers construits
FROM nginx:alpine

# Étape 8 : Copier les fichiers construits dans le dossier Nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Étape 9 : Exposer le port 80 pour servir l'application
EXPOSE 80

# Étape 10 : Démarrer Nginx

CMD ["nginx", "-g", "daemon off;"]
