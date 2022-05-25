// Mise en place d'express et du router posts
const express = require('express');
const routerPosts = express.Router();

// Récupération de la fonction de vérification du token utilisateur
const { checkToken } = require("../middleware/token");

// Récupération de la fonction de recup des posts
const { getPosts } = require("../controllers/posts");

// Récupération de la fonction de création d'un post
const { createPost } = require("../controllers/posts");

/* - - - - - ROUTES - - - - - */ 
// .use -> Sert à dire qu'il faut checker le token avant chaque routes
routerPosts.use(checkToken);
routerPosts.get("/", getPosts);
routerPosts.post("/", createPost);


module.exports = { routerPosts }; 