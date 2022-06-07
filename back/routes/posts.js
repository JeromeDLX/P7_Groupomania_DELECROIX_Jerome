// Mise en place d'express et du router posts
const express = require('express');
const routerPosts = express.Router();

// Récupération de la fonction de vérification du token utilisateur
const { checkToken } = require("../middleware/token");

// Récupération de la fonction d'upload d'images
const { imageToUpload } = require("../middleware/multer")

// Récupération des fonctions de fonctionnement
const { getPosts, createPost, createCommentary, deletePost } = require("../controllers/posts");

/* - - - - - ROUTES - - - - - */ 
// .use -> Sert à dire qu'il faut checker le token avant chaque routes
routerPosts.use(checkToken);
routerPosts.get("/", getPosts);
routerPosts.post("/", imageToUpload, createPost);
routerPosts.post("/:id", createCommentary);
routerPosts.delete("/:id", deletePost);


module.exports = { routerPosts }; 