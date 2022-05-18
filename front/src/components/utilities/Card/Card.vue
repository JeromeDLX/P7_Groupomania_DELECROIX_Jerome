<script>
import Commentary from './Commentary.vue'
import Avatar from '../Avatar.vue'
export default {
    name: "Card",
    components: {
        Commentary,
        Avatar
    }
}
</script>

<template>
    <div class="card mb-3 m-auto">
        <div class="card-header bg-light">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" alt="Avatar" class="rounded-circle shadow-4"/>
            Jérôme
        </div>
            <img src="https://picsum.photos/400/700" class="card-img-top no-border">
                <div class="card-body">
                    <h5 class="card-title">Petite photo</h5>
                    <p class="card-text">Le petit commentaire qui fait plaisir.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    
                    <hr class="dropdown-divider mb-4">
                    
                    <Commentary></Commentary>
                    
                    <div class="d-flex gap-1">
                        <Avatar></Avatar>
                        <input type="text" class="form-control" placeholder="Commentaire">
                        <button type="button" class="btn btn-danger ms-auto">Poster</button>
                    </div>
                </div>
    </div>
</template>

<style scoped>
.no-border{
    border-radius: 0px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}
.card-header img {
    width: 80px;
}

img {
    object-position: center;
    object-fit: cover;
    max-height: 650px;
}

@media (min-width: 768px) {
    .card {
        width: 70%;
    }

}
</style>