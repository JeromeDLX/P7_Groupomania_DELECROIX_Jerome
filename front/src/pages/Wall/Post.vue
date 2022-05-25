<script>
export default {
    name: "Post",
    data() {
        return {
            content: "",
            imageSelect: null
        }
    },
    methods: {
        uploadNewFile(ev) {
            this.imageSelect = ev.target.files[0]
        },
        submitPost() {
            const { VITE_SERVER_ADRESS, VITE_SERVER_PORT} = import.meta.env
            const url = `http://${VITE_SERVER_ADRESS}:${VITE_SERVER_PORT}/posts`

            const formData = new FormData()
            formData.append("content", this.content)
            formData.append("image", this.imageSelect)
            const options = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",
                    "Accept": "application/json"
                },
                method: "POST",
                body: formData
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
                console.log("res", res)
                this.$router.go()
            })
            .catch((err) => console.log("err:", err))
        }
    }
}
</script>

<template>
    <div class="container-sm">
        <div class="form-floating">
            <textarea class="form-control" placeholder="Commentaire" id="floatingTextarea2" v-model="content" style="height: 100px"></textarea>
            <label for="floatingTextarea2">Commentaire</label>
        </div>

        <div class="d-flex">
            <label for="input-file" class="btn btn-danger mt-2">Image</label>
            <input id="input-file" type="file" @change="uploadNewFile"/>
            <button @click="submitPost" type="button" class="btn mt-2 ms-auto btn-outline-danger">Publier</button>
        </div>

        {{ content }}

    </div>
    
    <hr class="dropdown-divider mb-3 mt-3">

</template>

<style scoped>
input {
    display: none;
}
</style>