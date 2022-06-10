<script>
import { url, headers } from './../../services/fetch'
export default {
    name: "Post",
    data() {
        return {
            content: "",
            imageSelect: null
        }
    },
    methods: {
        uploadNewFile(e) {
            this.imageSelect = e.target.files[0]
        },
        submitPost() {
            const formData = new FormData()
            
            formData.append("content", this.content)
            console.log("CONTENT:", this.content)
            
            formData.append("image", this.imageSelect)
            console.log("IMAGE:", this.imageSelect)

            const options = {
                headers,
                method: "POST",
                body: formData
            }
            fetch(url + "posts/", options)
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
            <span v-if="imageSelect" class="viewuser-file bg-light mt-2" > {{ imageSelect.name }}</span>
            <input id="input-file" type="file" @change="uploadNewFile"/>
            <button @click="submitPost" type="button" class="btn mt-2 ms-auto btn-outline-danger">Publier</button>
        </div>
    </div>
    
    <div class="divider d-flex">
        <hr class="dropdown-divider mb-3 mt-3">
    </div>

</template>

<style scoped>
input {
    display: none;
}

.viewuser-file {
    margin-left: 8px;
    padding: 4px;
    border-radius: 10px;
}

.container-sm {
    width: 72%;
    justify-content: center;
}

.divider {
    justify-content: center;
}

.dropdown-divider {
    width: 70%;
}

@media (max-width: 762px) {
    .container-sm {
        width: 100%;
    }
    .dropdown-divider {
        width: 100%;
    }
}
</style>