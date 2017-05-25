<template>
<div class="page-wrapper">
  <div class="page">
    <resume-material-dark v-if="$route.params.resumeid==='material-dark'"></resume-material-dark>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
// import '../fix-resume';
import '../components/resume-material-dark.vue';
// import {fixResume} from '../fix-resume';
import {fix} from 'chrome-shadow-fixer';
export default Vue.component('resume', {
  name: 'app',
  created: () => {
    console.log('created');
  },
  mounted: () => {
    // fixResume();
    console.dir(fix);
    fix();
  }
});
</script>

<style scoped>
.page-wrapper {
  overflow-x: hidden;
  background: #CCCCCC;
  margin: 0;
  padding: 0;
  -webkit-print-color-adjust: exact;
  box-sizing: border-box;
}

.resume {
  height: 100%;
  width: 100%;
}

.page {
  background: white;
  position: relative;
  width: 21cm;
  height: 29.68cm;
  display: block;
  page-break-after: auto;
  overflow: hidden;
}
</style>
