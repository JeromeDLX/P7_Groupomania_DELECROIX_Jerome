<script>
export default {
    name : "LoginPage",
}
</script>

<template>
<main class="form-signin">
    <form>
        <img class="mb-4 d-block mx-auto" src="../../icon.svg" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal">Veuillez vous connecter</h1>

        <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Adresse mail</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Mot de passe</label>
        </div>
        <button class="w-100 btn btn-lg btn-danger" type="submit">Se connecter</button>
    </form>
</main>
</template>

<style scoped>
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