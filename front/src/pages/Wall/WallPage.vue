<script>
import Card from "../../components/utilities/Card/Card.vue"
import Post from "./Post.vue"
    export default {
    name : "WallPage",
    components: {
    Card,
    Post
}
    }
</script>

<template>
    <div class="container-sm">
        <Post></Post>
        <Card></Card>
    </div>
</template>

<style scoped>
</style>