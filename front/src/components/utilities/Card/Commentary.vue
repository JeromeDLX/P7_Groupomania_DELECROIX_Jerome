<script>
import Avatar from '../Avatar.vue'
export default {
    name: "Commentary",
    components: {
        Avatar
    },
    props: {
        email: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
    }
}
</script>

<template>
    <div class="d-flex">
        <Avatar></Avatar>
            <div class="d-flex flex-column commentary p-2 bg-light">
                <p>{{ email }}</p>
                <p>{{ content }}</p>
            </div>
    </div>
</template>

<style scoped>
.commentary {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
    border-radius: 20px;
    width: 100%;
    margin: 0px 0px 15px 15px;
}

.commentary p {
    margin: 3px;
}

.commentary p:nth-child(1){
    font-weight: 600;
}
</style>