import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '../components/DashboardPage.vue';
import LandingPage from '../components/LandingPage.vue'; 
import BackgroundInfo from '../components/BackgroundInfo.vue';
import PlanetPage from '../components/PlanetPage.vue';
import PeoplePage from '../components/PeoplePage.vue';
import GovernancePage from '../components/GovernancePage.vue';
import ProsperityPage from '../components/ProsperityPage.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: DashboardPage
  },
  {
    path: '/CreateNewReport',
    name: 'CreateNewReport',
    component: CreateNewReport
  },
  {
    path: '/BackgroundInfo',
    name: 'BackgroundInfo',
    component: BackgroundInfo
  },
  {
    path: '/PlanetPage',
    name: 'PlanetPage',
    component: PlanetPage
  },
  {
    path: '/PeoplePage',
    name: 'PeoplePage',
    component: PeoplePage
  },
  {
    path: '/GovernancePage',
    name: 'GovernancePage',
    component: GovernancePage
  },
  {
    path: '/ProsperityPage',
    name: 'ProsperityPage',
    component: ProsperityPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
