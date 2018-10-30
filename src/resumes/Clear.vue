<template>
<div class="resume2" id="resume">
  <div class="row text-center">
    <span class="name">{{person.name.first}} {{person.name.middle}} {{person.name.last}}</span>
  </div>
  <div class="row text-center">
    <p class="position center">{{person.position}}</p>
  </div>
  <div class="row">
    <div class="image center" >
      <div class="img"></div>
    </div>
  </div>
  <div class="left half">
    <div class="experience">
      <h3>{{ lang.experience }}</h3>
      <div class="experience-block" v-for="experience in person.experience" :key="experience.company">
        <span class="company"> {{experience.company}} </span>
        <span class="job-title"> {{experience.position}} </span>
        <span class="time-period"> {{experience.timeperiod}}</span>
        <span class="job-description"> {{experience.description}} </span>
      </div>
    </div>
    <div class="contact">
      <table>
        <tr>
          <td><a :href="'tel:'+person.contact.phone">{{person.contact.phone}}</a></td>
          <!--<td><i class="fa fa-phone" aria-hidden="true"></i></td>-->
        </tr>
        <tr>
          <td>{{person.contact.street}} <br> {{person.contact.city}}</td>
          <!--<td><i class="fa fa-home" aria-hidden="true"></i></td>-->
        </tr>
        <tr>
          <td><a :href="'mailto:'+person.contact.email">{{person.contact.email}}</a></td>
          <!--<td><i class="fa fa-envelope" aria-hidden="true"></i></td> -->
        </tr>
        <tr v-if="person.contact.website">
          <td><a :href="person.contact.website">{{person.contact.website}}</a></td>
          <!--<td><i class="fa fa-globe" aria-hidden="true"></i></td>-->
        </tr>
        <tr v-if="person.contact.github">
          <td><a :href="'https://github.com/'+person.contact.github">https://github.com/{{person.contact.github}}</a></td>
        <!--<td><i class="fa fa-github" aria-hidden="true"></i></td>-->
        </tr>
      </table>
    </div>
    <div class="education">
      <h3>{{ lang.education }}</h3>
      <div class="education-block" v-for="education in person.education" :key="education.degree">
        <span class="degree">{{education.degree}}</span>
        <span class="degree-description">{{education.description}}</span>
      </div>
    </div>
    
  </div>
  <div class="right half">
    <h3>{{ lang.skills }}</h3>
    <div class="skills">
      <div class="skill-block" v-for="skill in person.skills" :key="skill.name">
        <span class="skill">{{skill.name}}</span>
        <div class="skill-bar">
          <div :style="'width: '+skill.level+'%'" class="level"> </div>
        </div>
      </div>
    </div>
    <span class="skills-other"> {{person.knowledge}} </span>
  </div>
</div>

</template>

<script>
import Vue from 'vue';
import { getVueOptions } from './options';

const name = 'clear'; // TODO change name
export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#resume2 {
  font-family: 'Raleway', sans-serif;
  padding-bottom:50px;
  a, a:focus, a:hover, a:visited {
    text-decoration:none;
  }
}


