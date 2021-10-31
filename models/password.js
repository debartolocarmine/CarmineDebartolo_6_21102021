// Api password-validator
// https://www.npmjs.com/package/password-validator
const passwordValidator = require('password-validator');

// Créer un schéma 
const passwordSchema = new passwordValidator();
// Wiki API-v5.0.0
// https://github.com/tarunbatra/password-validator/wiki/API-v5.0.0
// Ajoutez des propriétés à ce schéma . Règles pour imposer la présence de...
passwordSchema
    .is().min(5) // Longueur minimale
    .is().max(64) // Longueur maximale
    .has().uppercase()  // Doit contenir des lettres majuscules
    .has().lowercase()  // Doit contenir des lettres minuscules
    .has().symbols()    // Doit contenir des symboles
    .has().digits()     // Doit contenir des chiffres
    .has().not().spaces()// Ne devrait pas avoir d'espaces 

module.exports = passwordSchema;