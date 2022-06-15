<script>
import { url, headers } from './../services/fetch'
import axios from 'axios'
function loginUser(email, password, router) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }
        fetch(url + "auth/login", options)
            .then((res) => {
                if (res.ok) return res.json()
                res.text().then((err) => {
                    const {error} = JSON.parse(err)
                    this.error = error
                    throw new Error(error)
                })
                throw new Error(JSON.stringify(res))
            })
            .then((res) => {
                createItemForReload()
                const token = res.token
                localStorage.setItem("token", token)
                this.$router.push("/home")
            })
            .catch((err) => {
                console.error(err)
            })
};

export default {
    name : "LoginPage",
        data() {
        return {
            usermail: "",
            password: "",
            confirmPassword: "",
            hasInvalidIdentifiers: false, 
            error: null,
            isLoginMode: true
        }},
        methods: {
            loginUser,
            setValidityOfForm,
            switchLoginMode() {
                this.isLoginMode = !this.isLoginMode
            },
            signupNewUser: async function(email, password, confirmPassword, router) {
                const body = JSON.stringify({
                    email,
                    password, 
                    confirmationPassword: this.confirmPassword
                })
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
                try {
                await axios.post(url + "auth/signup", body, options)
                this.$router.go("/")
                } catch (err) {
                    const error = err.response.data.error
                    this.error = error
                    throw new Error("Echec d'enregistrement" + error)
                }
            }
        },
        watch: {
            usermail(value) {
                const isValueEmpty = value === ""
                this.setValidityOfForm(!isValueEmpty)
                this.error = null
            },
            password(value) {
                const isValueEmpty = value === ""
                this.setValidityOfForm(!isValueEmpty)
                this.error = null
            }
        }
};

function setValidityOfForm (boolean) {
    this.hasInvalidIdentifiers = !boolean
};

function createItemForReload() {
    localStorage.setItem("reload", Date.now());
}
</script>

<template>
<main class="form-signin">
    <form :class="this.hasInvalidIdentifiers ? 'hasErrors': ''">
        <img class="d-block mx-auto" src="../../icon-above-font.svg" alt="icone groupomania" height="250">
        <h1 class="h3 mb-3 fw-normal">{{this.isLoginMode? "Veuillez vous connecter" : "Veuillez vous enregistrer"}}</h1>

        <div class="form-floating">
            <input type="email" class="form-control" 
                id="floatingInput" 
                placeholder="name@example.com" 
                v-model="usermail" 
                required="true" 
                @invalid="setValidityOfForm">
            <label for="floatingInput">Adresse mail</label>
        </div>

        <div class="form-floating">
            <input type="password" class="form-control mb-0" 
                id="floatingPassword" 
                placeholder="Password" 
                v-model="password" 
                required="true" 
                @invalid="setValidityOfForm">
            <label for="floatingPassword">Mot de passe</label>
        </div>
        <div v-if="!isLoginMode" class="form-floating">
            <input type="password" class="form-control mb-0" 
                placeholder="Confirm password" 
                v-model="confirmPassword" 
                required="true" 
                @invalid="setValidityOfForm">
            <label for="floatingPassword">Confirmation mot de passe</label>
        </div>

        <div class="mt-2 d-block field-error" v-if="hasInvalidIdentifiers">Veillez à bien remplir tout les champs</div>
        <div class="mt-2 d-block field-error" v-if="!hasInvalidIdentifiers && error">{{ error }}</div> <!-- Mot de passe incorrect-->
        
        <button v-if="isLoginMode"
            class="w-100 btn btn-lg btn-danger mt-2 mb-2" 
            type="submit" 
            @click.prevent="() => loginUser(this.usermail, this.password, this.$router)"
            :disabled="hasInvalidIdentifiers">Se connecter
        </button>
        <button v-if="!isLoginMode"
            class="w-100 btn btn-lg btn-danger mt-2 mb-2" 
            type="submit" 
            @click.prevent="() => signupNewUser (this.usermail, this.password, this.confirmPassword, this.$router)"
            :disabled="hasInvalidIdentifiers">S'enregistrer
        </button>

        <p class="mt-1 mb-3" @click.prevent="switchLoginMode">Nouveau ici ? <a href="" class="create-account">{{ this.isLoginMode? "Créer un compte" : "Se connecter"}}</a></p>

    </form>
</main>
</template>

<style scoped>
.hasErrors input {
    border: 1px solid red;
}

.field-error {
    font-weight: 600;
    color: red;
    border-radius: 8px;
    padding: 8px;
    background-color: var(--bs-gray-100);
}

h1{
color: var(--bs-red)
}

html,
body {
align-items: center;
}

.form-signin {
width: 100%;
max-width: 330px;
padding: 15px;
margin: auto;
}

.form-signin .checkbox {
font-weight: 400;
}

.form-signin .form-floating:focus-within {
z-index: 2;
}

.form-signin input[type="email"] {
margin-bottom: -1px;
border-bottom-right-radius: 0;
border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
margin-bottom: 10px;
border-top-left-radius: 0;
border-top-right-radius: 0;
}

.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

.create-account {
    text-decoration: none;
    color: var(--bs-red);
    border-bottom: 1px solid var(--bs-red);
    padding-bottom: 2px;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
    font-size: 3.5rem;
    }
}
</style>