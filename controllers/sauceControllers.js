// Load Sauce model
const Sauce = require("../models/sauce");


// createSauce
exports.createSauce = (req, res, next) => {
	const sauceObject = JSON.parse(req.body.sauce)
	delete sauceObject._id;
	const sauce = new Sauce({
		...sauceObject,
		imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
	});
	sauce
		.save()
		.then(() => res.status(201).json({ message: "Sauce enregistrée" }))
		.catch((error) => res.status(400).json({ error }));
};
// updateSauce
exports.updateSauce = (req, res, next) => {
	const sauceObject = req.file ?
	  {
		...JSON.parse(req.body.sauce),
		imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
	  } : { ...req.body }
  
	Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
	  .then(res.status(200).json({ message: "Sauce modifiée" }))
	  .catch(error => res.status(400).json({ error }))
  } 