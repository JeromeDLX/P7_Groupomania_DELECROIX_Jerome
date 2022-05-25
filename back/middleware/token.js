// Mise en place de json web token
const jwt = require("jsonwebtoken");

// Vérification du token unique utilisateur
function checkToken(req, res, next) {
    const token = req.headers.authorization.split(" ")[1]
    if (token == null) return res.status(401).send({error: "Il n'y a pas de token"})
    jwt.verify(token, process.env.JWT_PASSWORD, (error, decoded) => {
        console.log("Decoded", decoded)
        if (error) return res.status(401).send({error: "Le token n'est pas valide"})
        req.email = decoded.email
        next()
    })
};

module.exports = {checkToken};