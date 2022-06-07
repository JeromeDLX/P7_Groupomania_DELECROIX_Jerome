// Mise en place du fichier ENV
require('dotenv').config();

// Mise en place de l'app avec express
const express = require('express');
const app = express();

// Mise en place du port du serveur
const port = process.env.PORT || 3000;

// Mise en place de body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Mise en place de CORS
const cors = require('cors');
app.use(cors());

// Récupération de la fonction loginUser
const { loginUser, signupUser } = require("./controllers/users");

// Récupération du router posts
const { routerPosts } = require("./routes/posts");

// Récupération de Prisma
const { prisma } = require('./database/database');

// Des qu'on arrive sur route /post redirection vers le routerPosts
app.use("/posts", routerPosts);
app.use("/images", express.static("images"));

/* - - - - - ROUTES - - - - - */ 
app.post("/auth/login", loginUser);
app.post("/auth/signup", signupUser);

app.listen(port, () => console.log(`Je tourne sur ce port ${port}`));