// Imports des pages
import LoginPage from '../pages/LoginPage.vue'
import WallPage from '../pages/Wall/WallPage.vue'
import ProfilPage from '../pages/ProfilPage.vue'
import EditProfilPage from '../pages/EditProfilPage.vue'

// Import des fonctions de routeur avec vue-routeur
import {createRouter, createWebHistory} from 'vue-router'

/* - - - - - ROUTES - - - - - */
const routes = [
    // Tu arrive sur localhost:3000 par défaut vas sur le chemin /home
    {path: "/", redirect: "/home"},
    // Tu arrive sur localhost:3000/login va chercher le composant LoginPage
    {path: "/login", component: LoginPage}, 
    // Tu arrive sur localhost:3000/home va chercher le composant WallPage
    {path: "/home", component: WallPage},
    // Tu arrive sur localhost:3000/profil va chercher le composant ProfilePage
    {path: "/profil", component: ProfilPage},
    // Tu arrive sur localhost:3000/editprofil va chercher le composant EditProfilePage
    {path: "/editprofil", component: EditProfilPage}
]
const router = createRouter({history: createWebHistory(), routes});

export {router};