import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '../components/DashboardPage.vue';
import LandingPage from '../components/LandingPage.vue'; 
import BackgroundInfo from '../components/BackgroundInfo.vue';
import PlanetPage from '../components/PlanetPage.vue';
import PeoplePage from '../components/PeoplePage.vue';


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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
