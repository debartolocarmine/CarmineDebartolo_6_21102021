const User = require("../models/user");
const bcrypt = require('bcrypt')

//Fonction signup. 
//Méthode permettant à un utilisateur de s'inscrire.
exports.signup = (req, res, next) => {
    //nous appelons la fonction de hachage de bcrypt dans notre mot de passe et lui demandons de « saler » le mot de passe 10 fois.
    //il s'agit d'une fonction asynchrone qui renvoie une Promise dans laquelle nous recevons le hash généré
    //https://www.npmjs.com/package/bcrypt
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            //nous créons un utilisateur et l'enregistrons dans la base de données
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save()
            //en renvoyant une réponse de réussite en cas de succès,
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                //des erreurs avec le code d'erreur en cas d'échec 
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

//Fonction login. 
//Méthode permettant de vérifier si un utilisateur qui tente de se connecter dispose d'identifiants valides.

exports.login = (req, res, next) => {
    //nous utilisons notre modèle Mongoose pour vérifier que l'e-mail entré par l'utilisateur correspond à un utilisateur existant de la base de données.
    User.findOne({ email: req.body.email })
    //dans le cas contraire, nous renvoyons une erreur 401 Unauthorized.
    //si l'e-mail correspond à un utilisateur existant, nous continuons 
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        //nous utilisons la fonction compare debcrypt pour comparer le mot de passe entré par l'utilisateur avec le hash enregistré dans la base de données 
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
              //s'ils ne correspondent pas, nous renvoyons une erreur 401 Unauthorized et un message « Mot de passe incorrect ! » ;
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            //s'ils ne correspondent pas, nous renvoyons une erreur 401 Unauthorized et un message « Mot de passe incorrect ! » ;
            res.status(200).json({
              userId: user._id,
              token: 'TOKEN'
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };