<template>

    <div class="table">
      <v-table>
        <thead>
          <tr>
           
            <td colspan="3" class="text-left text-no-wrap">
           Complete the sub sections by inputting the scoring achieved for each metric
            </td>
  
            <td colspan = "2" class="text-left">
              <input type="radio" v-model="allApplicable" value="true"  />
              Mark entire category as not applicable
            </td>
            <td></td>
          </tr>
  
          <tr>
            <th class="text-center">Sub section</th>
            <th class="text-center">Metric</th>
            <th class="text-center">Scoring</th>
            <th class="text-center">Applicable</th>
            <th class="text-center">Scoring achieved</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in metrics" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.Metric }}</td>
            <td>
              <a href="your_external_link_here" target="_blank">
                <i class="ti-eye"></i>
                View details and rationale
              </a>
            </td>
            <td>
              <v-switch v-model="item.isApplicable" 
         
              color="#219653"
              ></v-switch>
            </td>
            <td >
              <v-text-field
                v-model="item.scoringAchieved"
                :disabled="!item.isApplicable"
                variant = "outlined"
              ></v-text-field>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>

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
              Metric: 'Wage Level',
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


</style>

