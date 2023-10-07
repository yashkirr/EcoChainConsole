<template>
    <div class = "content-wrapper">
      <SideNavBar />
      <div class="page-content">
        <v-container>
        <TopBar />
        </v-container>
        <v-container>
        <v-stepper :items="['Step 1', 'Step 2', 'Step 3','Step 4', 'Step 5']">
    <template v-slot:item.1>
      <v-card title="Step One" flat>
        <BackgroundInfo/>
      </v-card>
    </template>
  
    <template v-slot:item.2>
      <v-card title="Step Two" flat>
        <PeoplePage/>
    </v-card>
    </template>
  
    <template v-slot:item.3>
      <v-card title="Step Three" flat>
        <PlanetPage/>
    </v-card>
    </template>

    <template v-slot:item.4>
      <v-card title="Step Three" flat>
        <GovernancePage/>
    </v-card>
    </template>

    <template v-slot:item.5>
      <v-card title="Step Three" flat>
        <ProsperityPage/>
    </v-card>
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
        methods: {
      validate() {
        this.$router.push('/PeoplePage');
      }
      },
        data: () => ({
        valid: false,
        firstname: '',
        lastname: '',
        nameRules: [
          value => {
            if (value) return true
  
            return 'Name is required.'
          },
          value => {
            if (value?.length <= 10) return true
  
            return 'Name must be less than 10 characters.'
          },
        ],
        email: '',
        emailRules: [
          value => {
            if (value) return true
  
            return 'E-mail is requred.'
          },
          value => {
            if (/.+@.+\..+/.test(value)) return true
  
            return 'E-mail must be valid.'
          },
        ],
      }),
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
