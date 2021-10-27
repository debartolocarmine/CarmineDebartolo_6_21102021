// app.js est un fichier qui contient l'application crée par express.js qui est en réalité une fonction qui va resevoir la reqête et la réponse.

// importer express pour pouvoir l'utiliser.
const express = require('express');
// importer mongoose. Mongoose est un package qui facilite les interactions avec notre base de données MongoDB grâce à des fonctions.
const mongoose = require('mongoose');

// Variable d'environnement
require('dotenv').config();

// Route
const userRoute = require('./routes/userRoute');

// Connection à la base de données
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log('Connexion à MongoDB échouée !', err));

// Constante app = mon application express
const app = express();

//express.json()est une méthode intégrée à express pour reconnaître l'objet de demande entrant en tant qu'objet JSON .
// Cette méthode est appelée en tant que middleware dans votre application à l'aide du code :app.use(express.json()).
app.use(express.json());

// J'enregristre la route pour l'authentification
app.use('/api/auth', userRoute);

// j'exporte mon application express pour povoir y accéder depuis les autre fichiers du projet, notamment le serveur Node.
module.exports = app;


//https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
// Qu'est-ce qu'un middleware ? 
// Ce sont ces méthodes/fonctions/opérations qui sont appelées ENTRE le traitement de la demande et l'envoi de la réponse dans votre méthode d'application.


//https://www.it-swarm-fr.com/fr/javascript/quest-ce-que-javascript-runtime-../1052982176/
// Un environnement d'exécution ou runtime est un logiciel responsable de l'exécution des programmes informatiques écrits dans un langage de programmation donné.
// Contrairement à un logiciel de développement permettant de programmer et développer son application, un runtime ne permet que l'exécution d'un programme.

//