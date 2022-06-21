<script>
import Commentary from './Commentary.vue'
import Avatar from '../Avatar.vue'
import { url, headers } from './../../../services/fetch'
export default {
    name: "Card",
    components: {
        Commentary,
        Avatar
    },
    props: ["email", "content", "url", "comments", "id", "currentUser"],
    data() {
        return {
            currentComment: null
        }
    },
    mounted() {},
    methods: {
        addComment(e){
            const options = {
                headers: {...headers, "Content-Type": "application/json"},
                method: "POST",
                body: JSON.stringify({
                    comment: this.currentComment
                })
            }
            fetch(url + "posts/" + this.$props.id, options)
            .then((res) => {
                if (res.status === 200) {
                    return res.json()
                } else {
                    throw new Error("Echec de récupération des posts")
                }
            })
            .then((res) => {
                this.$router.go()
            })
            .catch((err) => console.log("err:", err))
        },
        deletePost() {
            fetch(url + "posts/" + this.$props.id, {
                headers: { ...headers, "Content-Type": "application/json"},
                method: "DELETE"
            })
            .then((res) => {
                if (res.status === 200) {
                    return res.json()
                } else {
                    throw new Error("Echec de supression du post")
                }
            })
            .then((res) => {
                this.$router.go()
            })
            .catch((err) => console.log("err:", err))
        }
    }
}
</script>

<template>
    <div class="card mb-3 m-auto">
        <div class="card-header bg-light d-flex">
            <img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84587/preview.svg" alt="Avatar" class="rounded-circle shadow-4"/>
            
            <span>{{ email }}</span>

            <button v-if="currentUser === email || currentUser === 'admingroupomania@gmail.com'" type="button" class="btn btn-outline-danger totheright" @click="deletePost">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                </svg>
            </button>
        </div>
            <img v-if="url" :src="url" class="card-img-top no-border">
                <div class="card-body">
                    <p class="card-text">{{ content }}</p>
                    
                    <hr class="dropdown-divider mb-4">
                    
                    <div v-for="comment in comments">
                        <Commentary :email="comment.user.email" :content="comment.content" :createdAt="comment.createdAt"></Commentary>
                    </div>
                    
                    <div class="d-flex gap-1">
                        <Avatar></Avatar>
                        <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Commentaire"
                        v-model="currentComment"
                        />
                        <button type="button" class="btn btn-danger ms-auto" @click="addComment">Poster</button>
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
    align-items: center;
    padding: 8px;
}
.totheright {
    margin-left: auto;
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
