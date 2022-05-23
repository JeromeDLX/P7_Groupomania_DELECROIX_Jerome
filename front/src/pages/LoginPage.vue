<script>
function checkIdentifiers(email, password) {
        console.log({email, password})

        if (email !== "jerome.delecroix@hotmail.fr") throw new Error("Invalid email")
        if (password !== "0000") throw new Error("Invalid password")
        
        const token = "My jwt token"
        localStorage.setItem("token", token)
        this.$router.push('/home')
};

export default {
    name : "LoginPage",
        data,
        methods: {
            checkIdentifiers,
            isValidForm
        },
        watch: {
            usermail(value) {
                const isValueEmpty = value === ""
                this.isValidForm(!isValueEmpty)
            },
            password(value) {
                const isValueEmpty = value === ""
                this.isValidForm(!isValueEmpty)
            }
        }
};

function isValidForm (boolean) {
    console.log("Is valid form", boolean)
    this.hasInvalidIdentifiers = !boolean
};

function data () {
    return { usermail: "jerome.delecroix@hotmail.fr", password: "0000", hasInvalidIdentifiers: false }
};
</script>

<template>
<main class="form-signin">
    <form :class="this.hasInvalidIdentifiers ? 'hasErrors': ''">
        <img class="mb-4 d-block mx-auto" src="../../icon.svg" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal">Veuillez vous connecter</h1>

        <div class="form-floating">
            <input type="email" class="form-control" 
                id="floatingInput" 
                placeholder="name@example.com" 
                v-model="usermail" 
                required="true" 
                @invalid="isValidForm">
            <label for="floatingInput">Adresse mail</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" 
                id="floatingPassword" 
                placeholder="Password" 
                v-model="password" 
                required="true" 
                @invalid="isValidForm">
            <label for="floatingPassword">Mot de passe</label>
        </div>

        <span class="mb-3 d-block field-error" v-if="hasInvalidIdentifiers">Veillez à bien remplir tout les champs</span>

        <button 
            class="w-100 btn btn-lg btn-danger" 
            type="submit" 
            @click.prevent="() => checkIdentifiers(this.usermail, this.password)"
            :disabled="hasInvalidIdentifiers">Se connecter
        </button>

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

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
    font-size: 3.5rem;
    }
}
</style>