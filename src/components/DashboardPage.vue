<template>
    <div class = "content-wrapper">
      <SideNavBar />
      <div class="page-content">
        <!-- Dashboard content goes here -->yee
      </div>
    </div>
  </template>
  
  <script>
import SideNavBar from './SideNavBar.vue';

  export default {
    name: 'DashboardPage',
    components: { SideNavBar }
}
  </script>
  
  <style scoped>
.content-wrapper {
  display: flex;
  height: 100vh;
  background-color: #F1F5F9;
}

.page-content {
  flex: 1;
  overflow-y: auto; /* Add scroll if content overflows */
}
</style>

  