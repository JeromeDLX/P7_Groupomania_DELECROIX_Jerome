// Imports 
const bcrypt = require("bcrypt");

// Mise en place de json web token
const jwt = require("jsonwebtoken");

// Récupération de Prisma
const { prisma } = require("../database/database");

// Gestion de la connexion d'un utilisateur
async function loginUser(req, res) {
    // Récupération email et password
    const {email, password} = req.body

    try {
    // Ensuite vérification si l'utilisateur existe déjà ou non
    const user = await getUser(email)
    if (user == null) return res.status(404).send({error: "Utilisateur non trouvé"})
    
    // Puis check du password si correct ou non en regard du hash
    const isPasswordCorrect = await passwordCheck(user, password)
    
        // En cas de mot de passe incorrect envoit de l'erreur ci-dessous
        if (!isPasswordCorrect) return res.status(401).send({error: "Mot de passe incorrect"})
        // Sinon envoit du token avec email de l'utilisateur
        const token = createToken(email)
        res.send({token: token, email: user.email})
    } catch(error) {
    res.status(500).send({error})
    }
};

// Récupération de l'email utilisateur et comparaison si déjà existant
function getUser (email) {
    return prisma.user.findUnique({ where: { email }})
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
async function signupUser (req, res) {
    const {email, password, confirmationPassword} = req.body
    try {
    // Vérification si le mot de passe de confirmation à bien été renseigné
    if (confirmationPassword == null) return res.status(400).send({error: "Veillez à confirmer votre mot de passe"})
    // Vérification de la concordance des mots de passe
    if (password !== confirmationPassword) return res.status(400).send({error: "Les mots de passe ne correspondent pas"})
    // Vérification si l'utilisateur existe déjà ou non
    const userInDatabase = await getUser(email)
    if (userInDatabase !=null) return res.status(400).send({error: "Utilisateur déjà enregistré"})
    
    const hash = await hashPassword(password)
    const user = await saveUserToDatabase({email, password: hash})
    res.send({ user })
    } catch(error) {
    res.status(500).send({error})
    }
};

// Fonction qui sert à sauvergarder l'utilisateur dans la base de données
function saveUserToDatabase (user) {
    return prisma.user.create({ data: user })
};

// Fonction qui sert à hasher les mots de passe 
function hashPassword (password) {
    const SALT_ROUNDS = 10
    return bcrypt.hash(password, SALT_ROUNDS)
};

module.exports = {loginUser, signupUser};