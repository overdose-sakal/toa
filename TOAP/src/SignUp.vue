

<template>

<div class="container-fluid">

  <div class="row">

                    <div class="col-lg-5 my-auto mx-auto rounded">
            <img class="img-fluid rounded" src="../logo.png">
            <h2 class="text-center text-danger">The Congress of Weebs!</h2>
            <p class="text-center">© The Otaku Assembly v1.0.0 - 2025-26</p>
          </div>

          <div class="col-lg-6 col-11 justify-content-center mx-md-auto mx-3 py-4">
          <form class="p-3 rounded">
              <h1 class="text-center mb-4 text-white">Create an account</h1>
          <div class="form-group my-2">
          <label class="text-white" for="exampleInputEmail1">Username</label>
          <input type="text" class="form-control m-0" id="exampleInputUsername" 
          v-model="username"
          name="username"
          aria-describedby="emailHelp">
          <small id="emailHelp" class="form-text text-muted">Others will be able to see your username</small>
        </div>


        <div class="form-group my-2">
          <label class="text-white" for="exampleInputEmail1">Email Address</label>
          <input type="email" class="form-control" 
          name="email"
          v-model="email"
          id="exampleInputEmail1" aria-describedby="emailHelp">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group my-2">
          <label class="text-white" for="exampleInputPassword1">Set Password</label>
          <input type="password"
          v-model="password"
          name="password"
          class="form-control" id="exampleInputPassword1">
              <small id="emailHelp" class="form-text text-muted">Make sure it's atleast 8 characters</small>
        </div>

        <h6 class="my-3 text-white">Gender</h6>
<div class="d-flex">
        <div class="form-check me-4">
        <input class="form-check-input" type="radio" name="gender" value="male" id="exampleRadios1" v-model="gender">
        <label class="form-check-label text-secondary" for="exampleRadios1">
          Male
        </label>
      </div>
      <div class="form-check me-4">
        <input class="form-check-input" type="radio" name="gender" value="female" id="exampleRadios2" v-model="gender" >
        <label class="form-check-label text-secondary" for="exampleRadios2">
          Female
        </label>
      </div>
      <div class="form-check me-4">
        <input class="form-check-input" type="radio" name="gender" value="others" id="exampleRadios3" v-model="gender" >
        <label class="form-check-label text-secondary" for="exampleRadios3">
          Others
        </label>
      </div>
</div>
        <button class="btn btn-danger my-3 w-100" @click.prevent="SignUp">Create Account</button>
        <div class="text-center">
                  <router-link to="/sign-in" id="below-text" class="text-center text-danger">Already have a Weeb Account? Click Here to Sign In</router-link>
        </div>

          </form>
          </div>


  </div>
</div>


</template>

<script>
import axios from 'axios';
export default {
  name: 'SignUp',
  data() {
    return {
    username: '',
    email: '',
    password: '',
    gender: 'male',
    }
  },
  methods: {
    async SignUp() {
      let result = await axios.post("http://localhost:3000/users", {
        username: this.username,
        password: this.password,
        email: this.email,
        gender: this.gender,
      });
      console.warn(result);
      if(result.status == 201) {
        this.$router.push({name: "Home"});
        localStorage.setItem('user-info', JSON.stringify(result.data))
      }
      
    }
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
</style>



