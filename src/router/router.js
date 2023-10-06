import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '../components/DashboardPage.vue';
import LandingPage from '../components/LandingPage.vue'; 
import BackgroundInfo from '../components/BackgroundInfo.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
