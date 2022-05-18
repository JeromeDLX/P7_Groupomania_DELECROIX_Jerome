<script>
import Avatar from '../Avatar.vue'
export default {
    name: "Commentary",
    components: {
        Avatar
    }
}
</script>

<template>
    <div class="d-flex">
        <Avatar></Avatar>
            <div class="d-flex flex-column commentary p-2 bg-light">
                <p>Jéjé</p>
                <p>Pas mal du tout ce post !</p>
            </div>
    </div>
</template>

<style scoped>
.commentary {
    box-shadow: var(--bs-gray-300) 1.95px 1.95px 2.6px;
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