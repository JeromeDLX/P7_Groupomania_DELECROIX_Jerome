<script>
import Commentary from './Commentary.vue'
import Avatar from '../Avatar.vue'
export default {
    name: "Card",
    components: {
        Commentary,
        Avatar
    },
    props: {
        email: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        comments: {
            type: Array,
            required: true
        },
    }
}
</script>

<template>
    <div class="card mb-3 m-auto">
        <div class="card-header bg-light">
            <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84587/preview.svg" alt="Avatar" class="rounded-circle shadow-4"/>
            
            <span>{{ email }}</span>
        </div>
            <img :src="url" class="card-img-top no-border">
                <div class="card-body">
                    <h5 class="card-title">{{ title }}</h5>
                    <p class="card-text">{{ content }}</p>
                    
                    <hr class="dropdown-divider mb-4">
                    
                    <div v-for="comment in comments">
                        <Commentary :email="comment.user" :content="comment.content"></Commentary>
                    </div>
                    
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
    width: 60px;
    margin-right: 5px;
}

.card-header {
    padding: 8px;
}

img {
    object-position: center;
    object-fit: cover;
    max-height: 600px;
}

@media (min-width: 768px) {
    .card {
        width: 70%;
    }

}
</style>