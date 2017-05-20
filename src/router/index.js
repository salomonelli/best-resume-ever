import Vue from 'vue';
import Router from 'vue-router';
import ResumeMaterialDark from '@/components/resume-material-dark';
import Resume from '@/pages/resume';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/resume-material-dark',
      name: 'resume-material-dark',
      component: ResumeMaterialDark
    },
    {
      path: '/resume/:resumeid',
      name: 'resume',
      component: Resume
    }
  ]
});
