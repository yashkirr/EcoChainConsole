<template>
 <div class="table">
          <v-table>
            <thead>
               <tr>
                 <td colspan="3" class="text-left text-no-wrap">
                  Complete the sub sections below by inputting the scoring achieved for each metric
                </td>
                 <td colspan = "2" class="text-left">
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
                     <i class="ti-eye"></i>
                    View details and rationale
                  </a>
                </td>
                <td>
                  <v-switch v-model="item.isApplicable"
                    color="#219653"></v-switch>
                </td>
                <td  colspan = "2">
                 <v-text-field
                v-model="item.scoringAchieved"
                :disabled="!item.isApplicable"
                variant = "outlined"
                  style=" margin-top: 16px; width = 100%"
              ></v-text-field>
                </td>
              </tr>
            </tbody>
          </v-table>
  </div>
</template>
  
  <script>

    export default {
        name: 'PlanetPage',
      
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
  @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");



  </style>
  