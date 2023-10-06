<template>
    <div class = "content-wrapper">
      <SideNavBar />
      <div class="page-content">
        <TopBar />
        <!-- Dashboard content goes here -->
    <div class="table">
      <v-table>
        <thead>
          <tr>
            <td colspan="4">
              Complete the sub sections below by inputting the scoring achieved
              for each metric
            </td>
            <td>
              <input type="radio" v-model="allApplicable" value="true" />
              Mark entire category as not applicable
            </td>
            <td></td>
          </tr>
          <tr>
            <th class="text-left">Sub section</th>
            <th class="text-left">Metric</th>
            <th class="text-left">Scoring</th>
            <th class="text-left">Applicable</th>
            <th class="text-left">Scoring achieved</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in metrics" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.Metric }}</td>
            <td>
              <a href="your_external_link_here" target="_blank">
                <v-icon small>mdi-eye</v-icon>
                View details and rationale
              </a>
            </td>
            <td>
              <v-switch v-model="item.isApplicable"></v-switch>
            </td>
            <td>
              <v-text-field
                v-model="item.scoringAchieved"
                :disabled="!item.isApplicable"
                prepend-icon="mdi-percent"
              ></v-text-field>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
    
</div>
</div>
  </template>
  
  <script>
import SideNavBar from './SideNavBar.vue';
import TopBar from './TopBar.vue';

    export default {
        name: 'PlanetPage',
        components: { SideNavBar, TopBar },
        data() {
        return {
          allApplicable: 'false', // Set default to 'false' string
          metrics: [
            {
              name: 'Climate Change',
              Metric: 'Greenhouse Gas (GHG) emissions',
              isApplicable: true,
              scoringAchieved: '',
            },
            {
              name: '',
              Metric: 'TCFD implementation',
              isApplicable: true,
              scoringAchieved: '',
            },
            {
              name: 'Fresh water availability',
              Metric: 'Water consumption and withdrawal in  water-stressed areas',
              isApplicable: true,
              scoringAchieved: '',
            },
  
            {
              name: 'Nature loss',
              Metric: 'Land use and ecological sensitivity',
              isApplicable: true,
              scoringAchieved: '',
            },
          ],
        }
      },
      watch: {
        // Use watch to detect when allApplicable changes
        allApplicable(newValue) {
          const applicable = newValue === 'false'
          this.metrics.forEach(item => (item.isApplicable = applicable))
        },
      },
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
    }
  </style>
  