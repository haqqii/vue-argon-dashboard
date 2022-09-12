<template>
    <div class="card mx-4" id="top">
        <div class="card-header pb-0">
            <h2>Tambah User</h2>
        </div>
        <div class="card-body px-3 pt-0 pb-2">
            <div class="mb-3">
                <label for="Name" class="form-label fs-5 text-uppercase font-weight-bolder opacity-7">Name</label>
                <input type="text" class="form-control" id="Name" v-model="postName" />
                <div>
                    <label for="Job" class="form-label fs-5 text-uppercase font-weight-bolder opacity-7">Job</label>
                    <input type="text" class="form-control" id="Job" v-model="postJob" />
                </div><br>
                <button @click="postPost()" class="btn btn-primary">Save</button>
                <div id="name"></div>
                <div id="job"></div>
                <ul v-if="errors && errors.length">
                    <li v-for="error of errors">
                        {{error.message}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            postBody: '',
            postName: '',
            postJob: '',
            errors: []
        }
    },

    methods: {
        // Pushes posts to the server when called.
        postPost() {
            var text = {
                email: this.postEmail,
                name: this.postName
            }
            this.postBody = JSON.stringify(text)
            axios.post(`https://reqres.in/api/users`, {
                body: this.postBody
            })
                .then(response => { })
                .catch(e => {
                    this.errors.push(e)
                })
            document.getElementById('name').innerHTML = '<div class="fs-4">Nama : ' + this.postName + '</div>'
            document.getElementById('job').innerHTML = '<div class="fs-4">Job : ' + this.postJob + '</div>'
            console.log(this.postBody)
        }
    }
}
</script>