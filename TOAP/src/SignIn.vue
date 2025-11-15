

<template>

<div class="container-fluid">

  <div class="row">

                    <div id="logo" class="col-lg-5 my-auto mx-auto rounded">
            <img class="img-fluid rounded" src="../logo.png">
            <h2 class="text-center text-danger">The Congress of Weebs!</h2>
            <p class="text-center">© The Otaku Assembly v1.0.0 - 2025-26</p>
          </div>

          <div id="form" class="col-lg-6 col-11 justify-content-center py-auto align-middle mx-md-auto mx-3 py-4">
          <form class="p-3 rounded">
              <h1 class="text-center mb-4 text-white">Weeb's Sign In</h1>
          <div class="form-group my-2">
          <label class="text-white" for="exampleInputEmail1">Username</label>
          <input type="text" class="form-control m-0" id="exampleInputUsername" 
          v-model="username"
          name="username"
          aria-describedby="emailHelp">
        </div>



        <div class="form-group my-2">
          <label class="text-white" for="exampleInputPassword1">Password</label>
          <input type="password"
          v-model="password"
          name="password"
          class="form-control" id="exampleInputPassword1">
        </div>



        <button class="btn btn-danger my-3 w-100" @click.prevent="SignIn">Sign In</button>
        <div class="text-center">
                  <router-link to="/sign-up" id="below-text" class="text-center text-danger">Don't have a Weeb Account? Click Here to create one</router-link>
        </div>

          </form>
          </div>


  </div>
</div>


</template>

<script>
import axios from 'axios';
export default {
  name: 'SignIn',
  data() {
    return {
    username: '',
    password: '',
    }
  },
  methods: {
    async SignIn() {
        let result = await axios.get(`http://localhost:3000/users?username=${this.username}&password=${this.password}`);
        console.log(result.data)

        if(result.status == 200 && result.data.length > 0) {
            localStorage.setItem('user-info', JSON.stringify(result.data[0]));
            this.$router.push({name: "Home"})
        } 
  },

},


  mounted() {
    let user = localStorage.getItem("user-info");
    if(user) {
      this.$router.push({name: "Home"})
    }
  }
}


</script>


<style scoped>
#emailHelp {
  color: grey !important;
}

#below-text {
  text-decoration: none;
}

#below-text:hover {
  text-decoration: underline;
}

#form {
    margin: auto 0;
}

#logo{
    margin-top: auto;
    margin-bottom: auto;
}
</style>



