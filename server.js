// Server Node pour retourner l'application express

// importer le package http natif de Node et l'utiliser pour créer un serveur,
// en passant une fonction qui sera exécutée à chaque appel effectué vers ce serveur.  
const http = require('http');
// importer l'application express avec la méthode require de Node pour importer le fichier app.js.
const app = require('./app');

const cors = require('cors');
app.use(cors()); 

// la fonction normalizePort renvoie un port valide, qu'il soit fourni sous la forme d'un numéro ou d'une chaîne ;
const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

// Je doit dire a l'application express sur quel port (environement ou 3000) elle doit tourner avec la méthode app.set 
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// la fonction errorHandler  recherche les différentes erreurs et les gère de manière appropriée. Elle est ensuite enregistrée dans le serveur ;
const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

// fonction qui sera exécutée à chaque appel effectué vers ce serveur au quel je passe l'application express.
const server = http.createServer(app);

// Un écouteur d'évènements est également enregistré, consignant le port ou le canal nommé sur lequel le serveur s'exécute dans la console.
server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});

// Je configure le serveur pour qu'il écoute
server.listen(port);
