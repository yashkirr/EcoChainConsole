<template>
    <div class = "content-wrapper">
      <SideNavBar />
      <div class="page-content">
        <!-- Dashboard content goes here -->
        <TopBar />
      </div>
    </div>
  </template>
  
  <script>
import SideNavBar from './SideNavBar.vue';
import TopBar from './TopBar.vue';

  export default {
    name: 'DashboardPage',
    components: { SideNavBar, TopBar }
}
  </script>
  
  <style scoped>
.content-wrapper {
  display: flex;
  height: 100vh;
  background-color: #F1F5F9;
  overflow: hidden;
}

.page-content {
  flex: 1;
  overflow-y: auto; /* Add scroll if content overflows */
}
</style>

  