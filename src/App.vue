<template>
<div id="app">
  <router-view></router-view>
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

body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
</style>
