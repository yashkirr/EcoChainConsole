<template>
    <div class = "content-wrapper">
      <SideNavBar />
      <div class="page-content">
        <v-container>
        <TopBar />
        </v-container>
        <v-container>
        <v-stepper 
        v-model="step" 
        :items="['Submission Information', 'People', 'Planet','Prosperity', 'Governance', 'Review']" 
        show-actions>
    <template  v-slot:item.1>
        <BackgroundInfo/>
    </template>
  
    <template v-slot:item.2>
        <PeoplePage/>
    </template>
  
    <template v-slot:item.3>
        <PlanetPage/>
    </template>

    <template v-slot:item.4>
        <GovernancePage/>
    </template>

    <template v-slot:item.5>
        <ProsperityPage/>
    </template>

    <template v-slot:item.6>
        <ProsperityPage/>
    </template>
  </v-stepper>
</v-container>
</div>
</div>
</template>

<script>
import SideNavBar from './SideNavBar.vue';
import TopBar from './TopBar.vue';
import BackgroundInfo from './BackgroundInfo.vue';
import PeoplePage from './PeoplePage.vue';
import PlanetPage from './PlanetPage.vue';
import GovernancePage from './GovernancePage.vue';
import ProsperityPage from './ProsperityPage.vue';

    export default {
        name: 'CreateNewReport',
        components: { SideNavBar, TopBar, BackgroundInfo, PeoplePage, PlanetPage, GovernancePage, ProsperityPage },
        data: () =>({
          step: 1
        })
        
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
  text-align: left;
}
</style>
