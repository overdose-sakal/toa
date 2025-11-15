<template>
    <Header/>
    <h1>Art Page</h1>
    
</template>


<script>
import Header from '../src/Header.vue';
export default {
    name: 'Art',
    components: {
        Header,
    },
    mounted() {
    let user = localStorage.getItem("user-info");
    if(!user) {
      this.$router.push({name: "SignUp"})
    }
  }
}
</script>


<style scoped>
</style>