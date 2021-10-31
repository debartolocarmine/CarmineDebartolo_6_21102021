module.exports = (req, res, next) => {

    // On parse si nous sommes sur la page de création sinon, on renvoie l'objet
    const sauce = JSON.parse(req.body.sauce !== undefined) ? JSON.parse(req.body.sauce) : req.body;
    // On recupere les champs à tester.
    // Variable descructuré
    let { name, manufacturer, description, mainPepper } = sauce;
    // On prépare le tableau 
    let trimedTab = [];
    // Function qui supprime les espaces au début et a la fin d'une chaine de caractère.
    // La méthode trim() renvoie la chaîne sans blanc au début et à la fin.
    // La méthode trim() n'affecte pas la valeur de la chaîne courante.
    function toTrim(...string) {
        // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        trimedTab = string.map((elt) => elt.trim());
    }
    // On trim
    toTrim(name, manufacturer, description, mainPepper);

    // On vérifie que les champs contiennent bien 3 caractères minimum
    const hasThreeCharacters = (currentValue) => currentValue.length >= 3;
    // On loop le tableau des champs
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every
    if (trimedTab.every(hasThreeCharacters)) {
        next();
    } else {
        throw new Error("Les champs doivent contenir minimum 3 caractàres.");
    }

};