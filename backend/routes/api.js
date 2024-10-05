// routes/api.js
const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

// Route POST pour envoyer une valeur au serveur
router.post('/send', async (req, res) => {
    try {
        const { value } = req.body;
        if (!value) {
            return res.status(400).json({ msg: "Aucune valeur envoyée" });
        }

        const newData = new Data({ value });
        await newData.save();

        res.status(200).json({ msg: "Valeur enregistrée avec succès", data: newData });
    } catch (error) {
        res.status(500).json({ msg: "Erreur serveur", error: error.message });
    }
});

// Route GET pour récupérer toutes les valeurs
router.get('/get-values', async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ msg: "Erreur lors de la récupération des données", error: error.message });
    }
});


module.exports = router;
