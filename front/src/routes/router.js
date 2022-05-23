// Imports des pages
import LoginPage from '../pages/LoginPage.vue'
import WallPage from '../pages/Wall/WallPage.vue'

// Import des fonctions de routeur avec vue-routeur
import {createRouter, createWebHistory} from 'vue-router'

/* - - - - - ROUTES - - - - - */
const routes = [
    // Tu arrive sur localhost:3000 par défaut vas sur le chemin /home
    {path: "/", redirect: "/home"},
    // Tu arrive sur localhost:3000/login va chercher le composant LoginPage
    {name: "login", path: "/login", component: LoginPage}, 
    // Tu arrive sur localhost:3000/signup va chercher le composant LoginPage
    {name: "signup", path: "/signup", component: LoginPage}, 
    // Tu arrive sur localhost:3000/home va chercher le composant WallPage
    {name: "home", path: "/home", component: WallPage},
]
// Permet de créer un historique web sans hash (Sans #)
const router = createRouter({history: createWebHistory(), routes});

// Avant chaque routes
router.beforeEach((to, from) => {
    // On demande de vérifier si le login est demandé, en conséquence rediriger vers la page Login 
    if (isLoginRequired(to)) {
        return router.push('/login')
    }
});

// Fonction de vérification si le Login et demandé
function isLoginRequired (to) {
    // Si on est sur une page public, le login n'est pas demandé
    if (!isPrivatePage(to)) return false
    // En conséquence si on est sur une page privée, que l'user nest pas logé -> /login
    if (!tokenInCache()) return true
    // Enfin si on est sur une page privée loger avec token en cache mais non valide -> /login
    if (!isTokenValid()) return true
    return false
};

// Si on est sur une page du site privée (Autre que login ou signup)
function isPrivatePage(to) {
    const pagePublic = ['/login', '/signup']
    return !pagePublic.includes(to.path)
};

// Fonction de vérification si token présent en cache
function tokenInCache() {
    return localStorage.getItem("token") != null
};

// Fonction de vérification du token en le récupérant depuis le cache
function isTokenValid () {
    const token = localStorage.getItem("token")
    return token === "My jwt token"
};

export {router};