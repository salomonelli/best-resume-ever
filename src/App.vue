<template>
  <div id="app">
      <div class="page">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import './fix-resume';
export default {
  name: 'app'
};
</script>

<style>

@import '../node_modules/roboto-fontface/css/roboto/roboto-fontface.css';
@import '../node_modules/font-awesome/css/font-awesome.css';
@import '../node_modules/material-design-icons/iconfont/material-icons.css';
#app {
    overflow-x: hidden;
    background: #CCCCCC;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    box-sizing: border-box;
}
.resume{
  height: 100%;
  width: 100%;
}
.page {
    background: white;
    position: relative;
    width: 21cm;
    height: 29.7cm;
    display: block;
    page-break-after: auto;
    overflow: hidden;
}
body{
    padding: 0;
    margin: 0;
    overflow-x: hidden;
}
</style>
