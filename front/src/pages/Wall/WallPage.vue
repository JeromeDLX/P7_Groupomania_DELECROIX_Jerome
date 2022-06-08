<script>
import Card from "../../components/utilities/Card/Card.vue"
import Post from "./Post.vue"
export default {
    name : "WallPage",
    components: {
    Card,
    Post
    },
    beforeCreate() {
        // Vérification si présence de token en cache si non, renvoit vers la page login
        const token = localStorage.getItem("token")
        if (token == null) {
            this.$router.push("/login")
        }
    },
    mounted() {
        const { VITE_SERVER_ADRESS, VITE_SERVER_PORT} = import.meta.env
        const url = `http://${VITE_SERVER_ADRESS}:${VITE_SERVER_PORT}/posts`
        const options = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        fetch(url, options)
            .then((res) => {
                if (res.status === 200) {
                    return res.json()
                } else {
                    throw new Error("Echec de récupération des posts")
                }
            })
            .then((res) => {
                const {posts, email} = res
                this.posts = posts
                this.email = email
            })
            .catch((err) => console.log("err:", err))
    },
    data() {
        return {
            posts: [],
            email: null
        }
    },
}
</script>

<template>
    <div v-if="email" class="container-sm">
        <Post></Post>
        <div v-if="posts.length === 0">Oups... il n'y à pas de post pour le moment</div>
        <div v-for="post in posts">
            <Card 
            :email="post.user.email" 
            :content="post.content" 
            :url="post.url"
            :comments="post.comments"
            :id="post.id">
            </Card>
        </div>
    </div>
</template>

<style scoped>
</style>