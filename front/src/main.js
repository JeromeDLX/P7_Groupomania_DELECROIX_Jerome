// Import du fichier de routage
import {router} from './routes/router'

// Imports suivant la doc bootstrap-vue-3
import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'

// Import des regles de style css de bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Imports de l'app et des composants 
import App from './App.vue'

// Fabrication de l'app vue
const app = createApp(App);

// Injection de Bootstrap et, du router dans l'app vue
app.use(BootstrapVue3);
app.use(router);

// Montage de l'app en lien avec la div #app du HTML
app.mount('#app');