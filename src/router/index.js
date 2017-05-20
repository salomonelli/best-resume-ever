import Vue from 'vue';
import Router from 'vue-router';
import ResumeMaterialDark from '@/components/resume-material-dark';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/resume-material-dark',
      name: 'ResumeMaterialDark',
      component: ResumeMaterialDark
    }
  ]
});
