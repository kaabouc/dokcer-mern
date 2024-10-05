// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = 'mongodb+srv://kaabouchmohamed13:Y3Rkwwu8dwYEqTt3@chatbot-xml.ajfrf.mongodb.net/?retryWrites=true&w=majority&appName=chatbot-xml';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connecté'))
    .catch(err => console.log(err));

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
