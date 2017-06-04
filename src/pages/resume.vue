<template>
<div class="page-wrapper">
  <div class="page">
    <div class="page-inner">
      <resume-material-dark v-if="$route.params.resumeid==='material-dark'"></resume-material-dark>
      <resume-material-blue v-if="$route.params.resumeid==='material-blue'"></resume-material-blue>
      <resume-left-right v-if="$route.params.resumeid==='left-right'"></resume-left-right>
      <resume-oblique v-if="$route.params.resumeid==='oblique'"></resume-oblique>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import * as chromeShadowFixer from 'chrome-shadow-fixer';
import * as textFitter from 'text-fitter';
import '../components/resume-material-dark.vue';
import '../components/resume-material-blue.vue';
import '../components/resume-left-right.vue';
import '../components/resume-oblique.vue';
export default Vue.component('resume', {
  name: 'app',
  mounted: () => {
    const pageElements = document.querySelectorAll('.page-inner');
    textFitter.fix(pageElements, false);
    chromeShadowFixer.fix();
  }
});
</script>

<style scoped>
.page-inner{
  height: 100%;
  width: 100%;
}
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
