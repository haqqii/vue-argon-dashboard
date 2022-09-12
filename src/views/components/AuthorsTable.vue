<template>
  <div class="card" id="top">
    <div class="card-header pb-0">
      <h2>USER</h2>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0 text-center">
          <thead>
            <tr>
              <th class="text-uppercase font-weight-bolder opacity-7">
                Foto
              </th>
              <th class="text-uppercase font-weight-bolder opacity-7">
                First Name
              </th>
              <th class="text-uppercase font-weight-bolder opacity-7">
                Last Name
              </th>
              <th class="text-uppercase font-weight-bolder opacity-7">
                Email
              </th>
              <th class="text-uppercase font-weight-bolder opacity-7">
                Actions
              </th>
            </tr>
          </thead>
          <tbody v-if="posts && posts.length">
            <tr v-for="post of posts">
              <td>
                <img :src=post.avatar class="avatar avatar-xxl" alt="">
              </td>
              <td>
                <h5 class="font-weight-bold mb-0">{{ post.first_name }}</h5>
              </td>
              <td>
                <h5 class="font-weight-bold mb-0">{{ post.last_name }}</h5>
              </td>
              <td>
                <h5 class="font-weight-bold mb-0">{{ post.email }}</h5>
              </td>
              <td class="align-middle">
                <button @click="deleteUser" class="btn btn-danger">Delete</button>
              </td>

              <ul v-if="errors && errors.length">
                <li v-for="error of errors">
                  {{error.message}}
                </li>
              </ul>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "authors-table",
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`https://reqres.in/api/users`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },

  methods: {
    async deleteUser() {
      let x = window.confirm("You want to delete the user?");

      if (x) {
        const user = await axios.delete(
          "https://reqres.in/api/users"
        );

        console.log(user);
        alert("User deleted!");
      }
    },
  },
}

</script>