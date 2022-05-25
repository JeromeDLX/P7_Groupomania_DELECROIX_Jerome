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
const { routerPosts } = require("./routes/posts")

/* - - - - - ROUTES - - - - - */ 
app.use("/posts", routerPosts);
app.post("/auth/login", loginUser);
app.post("/auth/signup", signupUser);

//app.get("/", (req, res) => res.send("Port 3000"));
app.listen(port, () => console.log(`Je tourne sur ce port ${port}`));