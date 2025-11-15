<template>
    <Header/>
    <h1>Feed Page</h1>
    <table>
      <tr v-for="item in community" :key="item.id">
        <td>{{ item.name }}</td><br/>
        <td>{{ item.topic }}</td>
      </tr>
    </table>
    
</template>


<script>
import axios from 'axios';
import Header from '../src/Header.vue';
export default {
    name: 'Feed',
    components: {
        Header,
    },
    data() {
      return {
        community:[]
      }
    },
    async mounted() {
    let user = localStorage.getItem("user-info");
    if(!user) {
      this.$router.push({name: "SignUp"})
    };
    let result = await axios.get("http://localhost:3000/communities");
    console.warn(result);
    this.community = result.data
  }
}
</script>


<style scoped>
</style>