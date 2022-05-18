<script>
export default {
    name: "Post"
}
</script>

<template>
    <div class="container-sm">
        <div class="form-floating">
            <textarea class="form-control" placeholder="Commentaire" id="floatingTextarea2" style="height: 100px"></textarea>
            <label for="floatingTextarea2">Commentaire</label>
        </div>

        <div class="d-flex">
            <label for="input-file" class="btn btn-danger mt-2">Image</label>
            <input id="input-file" type="file"/>
            <button type="button" class="btn mt-2 ms-auto btn-outline-danger">Publier</button>
        </div>
    </div>
    
    <hr class="dropdown-divider mb-3 mt-3">

</template>

<style scoped>
input {
    display: none;
}
</style>