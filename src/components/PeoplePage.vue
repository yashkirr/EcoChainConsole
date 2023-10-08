<template>
    <v-container>
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
</v-container>
  </template>
  
  <script>

    export default {
        name: 'PeoplePage',
        data() {
        return {
          allApplicable: 'false', // Set default to 'false' string
          metrics: [
            {
              name: 'Dignity and equality',
              Metric: 'Diversity and Inclusion',
              isApplicable: true,
              scoringAchieved: '',
            },
            {
              name: '',
              Metric: 'Wage Level (%)',
              isApplicable: true,
              scoringAchieved: '',
            },
            {
              name: '',
              Metric: 'Pay equality',
              isApplicable: true,
              scoringAchieved: '',
            },
            {
              name: 'Health and wellbeing ',
              Metric: 'Rate of fatalities',
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

    </style>