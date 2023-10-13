<template>
  <div id="app">
     <SideNavBar v-if="showSideNavBar"/>
    <router-view></router-view>
  </div>
</template>


<script>
import SideNavBar from './components/SideNavBar.vue';

export default {
  name: 'App',
  components: { SideNavBar },
  computed: {
    showSideNavBar() {
      // Return true if the current route is neither login nor sign up
      return this.$route.path !== '/Landing' && this.$route.path !== '/signup';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background-color: #F1F5F9;
  display: flex;
  height: 100vh;
  
}


</style>