<template>
        <div >
    <v-table class = "scrollable-table">
      <thead>
        <tr>
           <td colspan="3" class="text-left text-no-wrap">
            Complete the sub sections below by inputting the scoring achieved
            for each metric
          </td>

           <td colspan = "2" class="text-left">
            <input type="radio" v-model="allApplicable" value="true" />
            Mark entire category as not applicable
          </td>
          <td></td>
        </tr>

        <tr>
          <th>Sub section</th>
          <th >Metric</th>
          <th >Scoring</th>
          <th>Applicable</th>
          <th >Scoring achieved</th>
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

          <td>
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
        name: 'GovernancePage',
        data() {
      return {
        economicMenu: false,
        allApplicable: 'false', // Set default to 'false' string
        metrics: [
          {
            name: 'Ethical Behaviour ',
            Metric: 'Anti-corruption training',
            isApplicable: true,
            scoringAchieved: '',
          },
          {
            name: '',
            Metric: 'Confirmed corruption incidents for previous year',
            isApplicable: true,
            scoringAchieved: '',
          },

          {
            name: '',
            Metric: 'Confirmed corruption incidents in the current year',
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

.scrollable-table {
   max-height: 500px; /* Adjust this value to your needs */
    width: 1000px;
    
    overflow-y: auto;
  
}


  </style>