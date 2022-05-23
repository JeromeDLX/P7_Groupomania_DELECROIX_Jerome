<script>
  // Import des composants dans l'App Vue
  import Navbar from "./components/layouts/Navbar.vue"

  // Export des composants importés de l'App Vue
  export default {
    name: "App",
    components: {
      Navbar
    }
  }
</script>

<template>
<!-- Ajout du composant barre de nav à l'app vue -->
  <Navbar/>
    <router-view></router-view>
</template>

<style>
body {
  background-color: var(--bs-white);
}
</style>