import Vue from 'vue'
import VueRouter from 'vue-router'
import SmoothScreen from '../components/SmoothScreen.vue'
import Logs from '../components/Logs.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      name: 'SmoothScreen',
      component: SmoothScreen
    },
    {
      path: '/logs',
      name: 'Logs',
      component: Logs
    }
  ]
});
export default router;
