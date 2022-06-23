<script>
import Logo from "./../../components/utilities/Logo.vue"
export default  {
    name: "Navbar",
    components: {Logo},
    data() {
        return {
            isUserLogin: false
        }
    },
    created() {
        const token = localStorage.getItem("token")
        if (token == null) {
            this.isUserLogin = true
        }
    },
    methods: {
        logout() {
            localStorage.removeItem("token")
            this.$router.go()
        }
    }
} 
</script>

<template>
    <header class="d-flex flex-wrap align-items-center justify-content-center py-3 px-3 mb-3 border-bottom bg-light">

        <Logo class="bi" width="40" height="32" role="img" aria-label="Bootstrap"></Logo>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
                <router-link v-if="!this.isUserLogin" to="/home" class="nav-link px-4 link-danger">Accueil</router-link>
            </li>
        </ul>

        <div class="col-md-4 text-end">
            <button 
            @click=""
            v-if="this.isUserLogin" 
            type="button" 
            class="btn btn-danger">Connexion
            </button>
            <button 
            @click="logout"
            v-if="!this.isUserLogin" 
            type="button" 
            class="btn btn-outline-danger me-2">Déconnexion
            </button> 
        </div>
    </header>
</template>

<style scoped>
.b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.form-control-dark {
    color: #fff;
    background-color: var(--bs-dark);
    border-color: var(--bs-gray);
}
.form-control-dark:focus {
    color: #fff;
    background-color: var(--bs-dark);
    border-color: #fff;
    box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
}

.bi {
    vertical-align: -.125em;
    fill: currentColor;
}

.text-small {
    font-size: 85%;
}

.dropdown-toggle {
    outline: 0;
}
</style>
