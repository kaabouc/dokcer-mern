// src/components/SendValue.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SendValue = () => {
    const [value, setValue] = useState('');
    const [responseMsg, setResponseMsg] = useState('');
    const [values, setValues] = useState([]); // Nouvel état pour stocker les valeurs

    // Fonction pour récupérer les valeurs depuis le back-end
    const fetchValues = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/get-values');
            setValues(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des valeurs', error);
        }
    };

    useEffect(() => {
        fetchValues(); // Appel au chargement du composant pour récupérer les valeurs
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/send', { value });
            setResponseMsg(response.data.msg);
            setValue(''); // Reset input field
            fetchValues(); // Met à jour la liste après avoir envoyé une nouvelle valeur
        } catch (error) {
            console.error(error);
            setResponseMsg('Erreur lors de l\'envoi des données');
        }
    };

    return (
        <div>
            <h2>Envoyer une valeur à l'API</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Entrez une valeur"
                />
                <button type="submit">Envoyer</button>
            </form>
            {responseMsg && <p>{responseMsg}</p>}

            <h2>Valeurs envoyées :</h2>
            <ul>
                {values.map((val) => (
                    <li key={val._id}>{val.value}</li>
                ))}
            </ul>
        </div>
    );
};

export default SendValue;
