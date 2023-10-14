<template>
	<div class="content-wrapper">

		<div class="page-content">

			<v-container>

				<v-table>
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

				<v-table>
					<thead>
						<tr>
							<td colspan="5">
								<h1>ESG Reports</h1>
							</td>
							<td>
								<v-btn color="success" @click="createNewReport">
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
import axios from 'axios';
import config from './config';



export default {
	name: 'DashboardPage',
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
				const response = await axios.get(config.backendApiUrl.concat("/get_dashboard"), { withCredentials: true });
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
  
<style scoped></style>

  