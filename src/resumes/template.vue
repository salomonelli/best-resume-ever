<template>
<div class="resume" id="template">
  <h1>This is a template</h1>
</div>
</template>

<script>
import { PERSON as person } from '../person';
import { terms } from '../terms';

import Vue from 'vue';
// TODO rename vue component
export default Vue.component('template', {
  name: 'template',
  data () {
    return {
      person, terms
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
