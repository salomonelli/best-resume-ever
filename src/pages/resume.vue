<template>
<div class="page-wrapper">
  <div class="page" :id="$route.params.resumeid">
    <div class="page-inner">
      <component :is="$route.params.resumeid"></component>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import '../resumes/resumes';
export default Vue.component('resume', {
    name: 'app'
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
<style media="print">
  html,body{
    width: 210mm;
    height: 297mm;
    font-size: 11px;
    background: #FFF;
    overflow:visible;
  }
  body {
    display: table;
    table-layout: fixed;
  }
  html,body,.page-wrapper,.page{padding:0;margin:0;page-break-after:always}
  .page{width:210mm}
  .page,.page-wrapper,.page-inner{height:297mm}
  .section-content{padding-left:0!important}
  body,.page-wrapper{padding:0!important}
</style>
