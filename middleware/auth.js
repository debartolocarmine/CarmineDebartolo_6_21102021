// Middleware qui vérifie le token envoyé par l'application frontend avec sa requête pour vérifier la validité du token 
// et que l'userId de la requête est bien celui encodé dans le token

// Importer jwt pour vérifier les token
const jwt = require('jsonwebtoken');

// Variable d'environnement
require('dotenv').config();

module.exports = (req, res, next) => {
  try {
    // recuperation du token dans le header authorization. 
    // Ons vas utiliser les headers de la requête.headers.authorization que l' on vas split autour de l'espace.
    // ça retourne un tableau avec [0-Bear, 1-le token]
    const token = req.headers.authorization.split(' ')[1];
    // Decoder le token.Qui utilise le package jwk avec sa fonction .verify pour verifier le token et la clef pour la creation du tokendans la foction login.
    const decodedToken = jwt.verify(token, process.env.ASK_TOKEN);
    // Une fois décodé le token devient un objet javascript dans lequel ons peux recupérer son userId.
    const userId = decodedToken.userId;
    // Si on a userId dans le corps de la requête et que celui ci est different du userId
    if (req.body.userId && req.body.userId !== userId) {
      // On retourne une erreur
      throw 'Invalid user ID';
      // Sinon si tout va bien on passe la requête avec next() au prochain middleware.
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};