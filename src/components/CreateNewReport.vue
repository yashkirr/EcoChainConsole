<template>
  <div class="content-wrapper">
    <SideNavBar />
    <div class="page-content">
      <v-container>
        <TopBar />
      </v-container>

      <v-container>
        <v-stepper v-model="step" :items="items" show-actions>
          <!-- Step 1: Submission Information -->
          <template v-slot:item>
            <div class="table" v-if="step === 1">
              <BackgroundInfo />
            </div>
          </template>

          <!-- Step 2: People -->
          <template v-slot>
            <div class="table" v-if="step === 2">
              <PeoplePage />
            </div>
          </template>

          <!-- Step 3: Planet -->
          <template v-slot:item[3]>
            <div class="table" v-if="step === 3">
              <PlanetPage />
            </div>
          </template>

          <!-- Step 4: Prosperity -->
          <template v-slot:item[4]>
            <div class="table" v-if="step === 4">
              <ProsperityPage />
            </div>
          </template>

          <!-- Step 5: Governance -->
          <template v-slot:item[5]>
            <div class="table" v-if="step === 5">
              <GovernancePage />
            </div>
          </template>

          <!-- Step 6: Review -->
          <template v-slot:item[6]>
            <div class="table" v-if="step === 6">
              <ReviewPage />
            </div>
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
          step: 1,
          items: ['Review Order', 'Select Shipping', 'Submit']
        })
        
    }
  </script>

<style scoped>
    .table {
    color: var(--Dark, #1c2434);
    font-family: 'Abyssinica SIL', sans-serif; /* Added fallback font */
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
  }
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
