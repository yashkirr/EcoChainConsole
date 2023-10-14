<template>
	<div class="wrapper">
		<div class="side-nav-bar">
			<v-img src="@/assets/logo.png" alt="Company Logo" class="company-logo"
				style="width: 0.1px  margin-bottom: 100px;"></v-img>
			<h2 class="title"> Menu</h2>
			<ul>
				<li v-for="item in menuItems" :key="item.label">
					<a :href="item.link" @click.prevent="handleMenuClick(item)">
						{{ item.label }}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
  
<script>
import axios from 'axios';
import config from './config';

export default {
	name: 'SideNavBar',
	data() {
		return {
			menuItems: [
				{ label: 'Profile', link: '/profile' },
				{ label: 'Dashboard', link: '/dashboard' },
				{ label: 'Create New Report', link: '/CreateNewReport' },
				{ label: 'Log Out', link: '/', action: this.logout }

			]
		};
	},
	methods: {
		logout() {
			// Assuming you have an endpoint like '/logout' to handle logouts on your backend
			axios.post(config.backendApiUrl.concat("/logout"))
				.then(response => {
					if (response.status === 200) {
						this.$router.push('/'); // redirect to home page or login page
					}
				})
				.catch(error => {
					console.error('Error logging out:', error);
				});
		},
		handleMenuClick(menuItem) {
			if (menuItem.action) {
				menuItem.action();
			} else {
				this.$router.push(menuItem.link);
			}
		}
	}
};
</script>
  
<style scoped>
/* Wrapper styles */
.wrapper {
	display: flex;
	flex: 0 0 200px;
	/* flex-grow, flex-shrink, flex-basis */
	height: 100vh;
	/* 100% of the viewport height */
}

/* SideNavBar styles */
.side-nav-bar {
	width: 100%;
	background-color: #1C2434;
	color: #ffffff;
	padding: 10px;
	border-right: 1px solid #ccc;
	height: 100%;
	/* Full height of the wrapper */
}

.side-nav-bar ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
	/* Reset margin */
	height: 100%;
	display: flex;
	flex-direction: column;
}

.side-nav-bar li {
	/* left justify text */
	text-align: left;
	margin: 10px 0;
	/* apply padding to center text in the bar */
	padding-left: 25px;
}

.side-nav-bar a {
	color: #ffffff;
	text-decoration: none;
}

.side-nav-bar a:hover {
	text-decoration: underline;
}

/* Main content styles */
.main-content {
	flex: 1;
	/* Take up the remaining space */
	padding: 10px;
	overflow-y: auto;
	/* Add scroll if content overflows */
}

.title {
	color: #ffffff;
	text-align: left;
	margin: 10px 0;
	/* apply padding to center text in the bar */
	padding-left: 25px;
}
</style>
  