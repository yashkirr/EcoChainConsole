<template>
	<!-- <div class="content-wrapper"> -->
		<div class="form-wizard-outer">
	
			<TopBar />
			<v-container class="page-content" >
			<v-container style="text-align: center;">

				<v-table style="border-spacing: 50px;">
					<thead>
						<tr>
							<td colspan="4">
								<h1>{{ name }}</h1>
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

				<v-table class="table">
					<thead>
						<tr>
							<td colspan="5">
								<h1>ESG Reports</h1>
							</td>
							<td>
								<v-btn block color="success" size="small" @click="createNewReport">
									New Report
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
							<td><v-btn block color="success" variant="outlined" size="small">Continue</v-btn></td>
						</tr>
						<tr>
							<td>PLUI7999765GH2023</td>
							<td>2022</td>
							<td>03/02/2023</td>
							<td>In Progress</td>
							<td>NA</td>
							<td><v-btn block color="success" variant="outlined" size="small">View Details</v-btn></td>
						</tr>
						<tr>
							<td>PLUI7999765GH2023</td>
							<td>2022</td>
							<td>03/02/2023</td>
							<td>In Progress</td>
							<td>NA</td>
							<td><v-btn block color="success" variant="outlined" size="small">View Details</v-btn></td>
						</tr>
						<tr>
							<td>PLUI7999765GH2023</td>
							<td>2022</td>
							<td>03/02/2023</td>
							<td>In Progress</td>
							<td>NA</td>
							<td><v-btn block color="success" variant="outlined" size="small">View Details</v-btn></td>
						</tr>
						<br>
						<tr>
							<td><v-btn block color="success" variant="outlined" size="small">View All</v-btn></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</v-table>

			</v-container>
		</v-container>
		</div>
	<!-- </div> -->
</template>
  
<script>
import axios from 'axios';
import config from './config';
import TopBar from './TopBar.vue';
import "vue3-form-wizard/dist/style.css";

export default {
	name: 'DashboardPage',
	components: { TopBar },
		data() {
		return {
			name: '',
			email: '',
			algo_add: '',
			submissions: []
		}
	},
	mounted() {
		this.fetchDashboardData();
	},
	methods: {
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
				} else {
					console.error('Error fetching dashboard data');
				}
			} catch (error) {
				console.error('There was an error fetching the data', error);
			}
		},
		createNewReport() {
			this.$router.push('/CreateNewReport');
		}
	}
}

</script>
  
<style scoped>
@import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");

.page-content {
  width: 1500px;
  overflow: auto; /* Add scroll if content overflows */
  font-family:sans-serif;
  font-size:small;
  align-items: center;
  height: 100vh;
  padding: 20px 10px 20px 40px; 
  margin: 10px 10px ;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  size: inherit;
}

.table {
  margin-bottom: 50px; /* Adjust the value to set the desired spacing */
  border-spacing: 70px;
}
.form-wizard-outer {
  padding: 50px;
}



</style>

  