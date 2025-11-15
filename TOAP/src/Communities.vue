<template>
    <Header/>
    <h1>Create a new Community</h1>
    <div  id="form">
    <form>
      <label for="title">
        Title:
      </label>
      <input v-model="title" type="text" name="title"></br>

            <label for="topic">
        Topic:
      </label>
      <input v-model="topic" type="text" name="topic"></br>

            <label for="thread">
        Thread
      </label>
      <input v-model="thread" type="text" name="thread"></br>
      <button type="button" class="btn btn-primary" @click="AddCommunity">Create</button>
    </form>
    </div>
</template>


<script>
import Header from '../src/Header.vue';
export default {
    name: 'Comm',
    components: {
        Header,
    },
    mounted() {
    let user = localStorage.getItem("user-info");
    if(!user) {
      this.$router.push({name: "SignUp"})
    }
  },
  data() {
    return {
      title: '',
      topic: '',
      thread: '',
    }
  },
  methods: {
    AddCommunity() {
      console.log(this.title, this.topic, this.thread)    
    }
  }
}
</script>


<style scoped>
body {
  height: 100vh;
}
input {
  display: block;
}

#form {
  justify-content: center;
  margin: auto auto !important;
  
}
</style>