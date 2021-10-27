// importation de mongoose
const mongoose = require('mongoose');
// installation d'un package de validation pour pré-valider les informations avant de les enregistrer.
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    /* Dans notre schéma, la valeur unique , avec l'élément mongoose-unique-validator passé comme plug-in,
    s'assurera qu'aucun des deux utilisateurs ne peut partager la même adresse e-mail.*/
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);