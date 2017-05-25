<template>
<div class="home">
  <a href="https://github.com/salomonelli/best-resume-ever" target="_blank"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a>
  <h3 class="title">best-resume-ever</h3>
  <div class="previews">
    <div class="preview">
      <router-link v-bind:to="'/resume/material-dark'">
        <img src="../assets/preview/resume-material-dark.png" />
        <span>material-dark</span>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
export default Vue.component('resume', {
  name: 'app'
});
</script>

<style scoped>
.home {
  font-family: 'Roboto' !important;
}

.title {
  font-weight: normal;
  text-align: center;
  width: 100%;
}

.previews{
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}

.preview{
  width: 200px;
}

.preview img{
  width: 100%;
}

.preview span{
  width: 100%;
  display: inline-block;
  text-align: center;
}
</style>
