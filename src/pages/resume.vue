<template>
  <div>
    <resume-material-dark v-if="$route.params.resumeid==='material-dark'"></resume-material-dark>
  </div>
</template>

<script>
import Vue from 'vue';
import '../components/resume-material-dark.vue';
export default Vue.component('resume', {
  name: 'app'
});
</script>
