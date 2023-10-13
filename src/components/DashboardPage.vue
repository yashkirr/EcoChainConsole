<template>
    <div class = "content-wrapper">
     
      <div class="page-content">
      
      <v-container>
      
        <v-table>
      <thead>
        <tr>
          <td colspan="4">
            <h1>[Company Name]</h1>
          </td>
          
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Location</td>
          <td>[Address]</td>
          <td>Industry</td>
          <td>[Industry Type]</td>
        </tr>
        <tr>
          <td>Size</td>
          <td>[#]</td>
          
          <td>Description</td>
          <td>[Company Description]</td>
        </tr>
      </tbody>
    </v-table>
  
  </v-container>
  <v-container>

<v-table>
      <thead>
        <tr>
          <td colspan="5">
            <h1>ESG Reports</h1>
          </td>
          <td>
            <v-btn
            color="success"
            @click="createNewReport">
              Submit New Report
            </v-btn>
          </td>
        </tr>
        
        
      </thead>

      <tbody>
        <tr>
          <td>Submission ID</td>
          <td>Year</td>
          <td>Submission Date</td>
          <td>Submission Status</td>
          <td>Total Score</td>
          <td></td>
        </tr>
        <tr>
          <td>PLUI7999765GH2023</td>
          <td>2022</td>
          <td>03/02/2023</td>
          <td>In Progress</td>
          <td>NA</td>
          <td><v-btn color="success">Continue</v-btn></td>
        </tr>
        <tr>
          <td>PLUI7999765GH2023</td>
          <td>2022</td>
          <td>03/02/2023</td>
          <td>In Progress</td>
          <td>NA</td>
          <td><v-btn color="success">View Details</v-btn></td>
        </tr>
        <tr>
          <td>PLUI7999765GH2023</td>
          <td>2022</td>
          <td>03/02/2023</td>
          <td>In Progress</td>
          <td>NA</td>
          <td><v-btn color="success">View Details</v-btn></td>
        </tr>
        <tr>
          <td>PLUI7999765GH2023</td>
          <td>2022</td>
          <td>03/02/2023</td>
          <td>In Progress</td>
          <td>NA</td>
          <td><v-btn color="success">View Details</v-btn></td>
        </tr>
        <br>
        <tr>
          <td><v-btn color="success">View All</v-btn></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>  
      </tbody>
    </v-table>
  


  </v-container>
      </div>
    </div>
  </template>
  
  <script>



  export default {
    name: 'DashboardPage',

    methods: {
      createNewReport() {
        this.$router.push('/BackgroundInfo');
      }
    }
}

  </script>
  
  <style scoped>

</style>

  