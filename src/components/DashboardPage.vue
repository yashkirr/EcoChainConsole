<template>
    <div class = "content-wrapper">
      <SideNavBar />
      <div class="page-content">
        <!-- Dashboard content goes here -->
        <v-container>
        <TopBar />
      </v-container>
      <v-container>
      <div class="top-bar">
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
    </div>
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
            color="success">
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
import SideNavBar from './SideNavBar.vue';
import TopBar from './TopBar.vue';

  export default {
    name: 'DashboardPage',
    components: { SideNavBar, TopBar }
}
  </script>
  
  <style scoped>

.dashboard {
  color: var(--Dark, #1c2434);
  font-family: 'Abyssinica SIL', sans-serif; /* Added fallback font */
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  background-color: white;
  text-align: left;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

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

  