<template>
    <Header/>
    <h1>Explore Page</h1>
    
</template>


<script>
import Header from '../src/Header.vue';
export default {
    name: 'Explore',
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