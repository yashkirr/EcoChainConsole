<template>
  <div class="form-wizard-outer">
    <h1 text: center> ESG Submission </h1>
    <br>
    <br>
    <FormWizard 
      @on-complete="onComplete"
      @on-change="(...args) => beforeChange(...args)"
      color="#219653"
      step-size="xs"
      back-button-text="Back to previous section"
      next-button-text="Next section"
      finish-button-text="Submit">

      <div class="form-wizard-container">
        <TabContent title="Submission Info" icon="ti-wallet" text-center>
          <BackgroundInfo/>
        </TabContent>
        <TabContent title="People" icon="ti-user">
          <PeoplePage ref="PeoplePage" />
        </TabContent>
        <TabContent title="Governance" icon="ti-shield">
          <GovernancePage ref="GovernancePage"/>
        </TabContent>
        <TabContent title="Planet" icon="ti-world">
          <PlanetPage ref="PlanetPage"/>
        </TabContent>
        <TabContent title="Prosperity" icon="ti-wallet">
          <ProsperityPage ref="ProsperityPage"/>
        </TabContent>
        <TabContent title="Review and Submit" icon="ti-check-box">    
      <table style="width: 100%; ">
        <thead>
          <tr>
            <td colspan="4">
              <h1>Submission Information</h1>
            </td>
          </tr>
        </thead><br>
                <tbody>
          <tr>
            <td style="border-bottom: 1px solid rgba(128, 128, 128, 0.7)">Company</td>
            <td style="border-bottom: 1px solid rgba(128, 128, 128, 0.7)">[Name of Company]</td>
            <td style="border-bottom: 1px solid rgba(128, 128, 128, 0.7)">Submitted by</td>
            <td style="border-bottom: 1px solid rgba(128, 128, 128, 0.7)">[Name of Submitter]</td>
          </tr>
          <tr>
            <td style="border-bottom: 1px solid rgba(128, 128, 128, 0.7)">Submission Period</td>
            <td colspan="3" style="border-bottom: 1px solid rgba(128, 128, 128, 0.7)">01 May 2022 - 30 April 2023</td>
          </tr>
          <tr>
            <td colspan="4"><br>
              <table style="width: 100%;">
                <tbody>
                  <tr>
                    <td style="border-bottom: 1px solid rgba(128, 128, 128, 0.7)">Sections included in Submission</td>
                    <td style="border-bottom: 1px solid rgba(128, 128, 128, 0.7)"></td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td style="border-bottom: 1px solid rgba(128, 128, 128, 0.7)">People</td>
                    <td style="border-bottom: 1px solid rgba(128, 128, 128, 0.7)">{{ getSectionStatus('PeoplePage') }}</td>
                  </tr>
                  <tr>
                    <td style="border-bottom: 1px solid rgba(128, 128, 128, 0.7)">Planet</td>
                    <td style="border-bottom: 1px solid rgba(128, 128, 128, 0.7)">{{ getSectionStatus('PlanetPage') }}</td>
                  </tr>
                  <tr>
                    <td style="border-bottom: 1px solid rgba(128, 128, 128, 0.7)">Prosperity</td>
                    <td style="border-bottom: 1px solid rgba(128, 128, 128, 0.7)">{{ getSectionStatus('ProsperityPage') }}</td>
                  </tr>
                  <tr>
                    <td style="border-bottom: 1px solid rgba(128, 128, 128, 0.7)">Governance</td>
                    <td style="border-bottom: 1px solid rgba(128, 128, 128, 0.7)">{{ getSectionStatus('GovernancePage') }}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table><br>
      Once Submitted, an email of the report will be sent, a record will be stored on the Blockchain, and an NFT will be minted as certification. Please note that this is irreversible.
        </TabContent>
      </div>
    </FormWizard>
  </div>
</template>

<script>
// Local registration
import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
import BackgroundInfo from './BackgroundInfo.vue';
import PeoplePage from './PeoplePage.vue';
import GovernancePage from './GovernancePage.vue';
import PlanetPage from './PlanetPage.vue';
import ProsperityPage from './ProsperityPage.vue';
import axios from 'axios';
import config from './config';

export default {
  components: {
    FormWizard,
    TabContent,
    BackgroundInfo,
    PeoplePage,
    GovernancePage,
    PlanetPage,
    ProsperityPage
  },
  
  data() {   
   
   return {
         diversityInclusion: '',
         payEquality: '',
         wageLevel: '',
         healthSafetyLevel: ''
      };
  },

  methods: {
    getSectionStatus(section) {
      // Determine the status of a section based on the page's data
      const pageData = this.$refs[section];
      if (pageData && pageData.sectionStatus) {
        return pageData.sectionStatus;
      }
      return 'N/A';
    },
    async fetchDashboardData() {
			try {
				const token = localStorage.getItem('access_token');
				const headers = {
					'Authorization': 'Bearer ' + token
				};

				const response = await axios.get(config.backendApiUrl.concat("/get_dashboard"), { headers: headers });

				if (response.data.success) {
					this.name = response.data.name;
					this.email = response.data.email;
					this.algo_add = response.data.algo_add;
					this.submissions = response.data.submissions;
					this.location = response.data.location;
					this.industry = response.data.industry;
					this.size = response.data.size;
					this.description = response.data.description;
				} else {
					console.error('Error fetching dashboard data');
				}
			} catch (error) {
				console.error('There was an error fetching the data', error);
			}
		},
		async createNewReport() {
			const token = localStorage.getItem('access_token');
				const headers = {
					'Authorization': 'Bearer ' + token
				};

				const response = await axios.get(config.backendApiUrl.concat("/start_submission"), { headers: headers });
				if (response.data.success) {
					this.SubmissionID = response.data.submission_id;
					this.$router.push('/CreateNewReport');
				}
		},
     handleMetricsUpdate(metrics) {
        this.diversityInclusion = metrics.find(m => m.Metric === 'Diversity and Inclusion').scoringAchieved;
        this.payEquality = metrics.find(m => m.Metric === 'Pay equality').scoringAchieved;
        this.wageLevel = metrics.find(m => m.Metric === 'Wage Level').scoringAchieved;
        this.healthSafetyLevel = metrics.find(m => m.Metric === 'Rate of fatalities').scoringAchieved;
    },
      async savePeopleMetrics() {  
      const token = localStorage.getItem('access_token');
					const headers = {
						'Authorization': 'Bearer ' + token
					};
          
      try {   
            
        const response = await axios.post(config.backendApiUrl.concat("/input_peoplemetrics/"+ this.$route.query.submissionID), {
          DiversityAndInclusion: this.diversityInclusion,
          PayEquality: this.payEquality,
          WageLevel: this.wageLevel,
          HealthAndSafetyLevel: this.healthSafetyLevel
        },{ headers: headers });

        if (response.data.success) {
          console.log('Metrics saved successfully:', response.data.message);
        } else {
          console.error('Error saving metrics:', response.data.message);
        }
      } catch (error) {
        console.error('Error saving metrics:', error.message);
      }
    },

    onComplete() {
      this.$router.push({ name: 'SuccessPage' }); // Using named route
      // or
      // this.$router.push('/SuccessPage'); // Using path directly
    },

    beforeChange(activeTabIndex, nextTabIndex) {
      console.log('beforeChange function triggered')
      console.log('Navigating from', activeTabIndex, 'to', nextTabIndex);
      switch (activeTabIndex) {
        case 0: // Submission Info tab
          // Handle any save or checks for this tab if necessary
          break;
        case 1: // People tab
          this.savePeopleMetrics();
          break;
        case 2: // Governance tab
          // Save data or checks related to the Governance tab
          break;
        case 3: // Planet tab
          // Save data or checks related to the Planet tab
          break;
        case 4: // Prosperity tab
          // Save data or checks related to the Prosperity tab
          break;
        case 5: // Review and Submit tab
          // Save data or checks related to the Review and Submit tab
          break;
      }
    }
  }
};

</script>

<style>
@import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");

.form-wizard-container {
  background-color: white;
  padding: 20px 30px 20px 40px; 
  margin: 10px 10px ;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: auto;
}

.form-wizard-outer {
  padding: 50px;
}


</style>
