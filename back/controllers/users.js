// Imports 
const bcrypt = require("bcrypt");

// Mise en place de json web token
const jwt = require("jsonwebtoken");

// Récupération des utilisateurs de la base de données
const {users} = require("../database/database");

// Gestion de la connexion d'un utilisateur
function loginUser(req, res) {
    // Récupération email et password
    const {email, password} = req.body
    
    // Ensuite vérification si l'utilisateur existe déjà ou non
    const user = getUser(email)
    if (user == null) return res.status(404).send({error: "Utilisateur non trouvé"})
    
    // Puis check du password si correct ou non en regard du hash
    passwordCheck(user, password)
    .then((isPasswordValid) => {
        // En cas de mot de passe incorrect envoit de l'erreur ci-dessous
        if (!isPasswordValid) return res.status(401).send({error: "Mot de passe incorrect"})
        // Sinon envoit du token avec email de l'utilisateur
        const token = createToken(email)
        res.send({token: token, email: user.email})
    })
    .catch((error) => res.status(500).send({error}))
};

// Récupération de l'email utilisateur
function getUser (email) {
    return users.find((user) => user.email === email)
};

// Récupération du mot de passe de l'utilisateur pour comparaison du hash avec bcrypt
function passwordCheck (user, password) {
    return bcrypt.compare(password, user.password)
};

// Création du token unique utilisateur
function createToken (email) {
    return jwt.sign({email}, process.env.JWT_PASSWORD, {expiresIn: "24h"})
};

// Gestion de l'enregistrement d'un nouvel utilisateur
function signupUser (req, res) {
    const {email, password, confirmationPassword} = req.body
    // Vérification de la concordance des mots de passe
    if (password !== confirmationPassword) return res.status(400).send({error: "Les mots de passe ne correspondent pas"})
    
    // Vérification si l'utilisateur existe déjà ou non
    const user = getUser(email)
    if (user !=null) return res.status(400).send({error: "Utilisateur déjà enregistré"})
    
    hashPassword(password)
    .then((hashed) => {
        saveUserToDatabase({email, password: hashed})
        res.send({email: email})
    })
    .catch((error) => res.status(500).send({error}))
};

// Fonction qui sert à sauvergarder l'utilisateur dans la base de données
function saveUserToDatabase (user) {
    users.push(user)
};

// Fonction qui sert à hasher les mots de passe 
function hashPassword (password) {
    const SALT_ROUNDS = 10
    return bcrypt.hash(password, SALT_ROUNDS)
};

module.exports = {loginUser, signupUser};