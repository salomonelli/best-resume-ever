<template>
<div id="resume3" class="resume">
  <div class="resume-header">
    <div class="triangle"></div>
    <div class="person-header">
      <div class="person-wrapper">
        <div class="person">
          <div class="name">{{person.name.first}} {{person.name.last}}</div>
          <div class="position">{{person.position}}</div>
        </div>
        <div class="img">
        </div>
      </div>

    </div>
  </div>
  <div class="resume-content">
    <div class="experience">
      <h3>Experience</h3>

      <div class="experience-block" v-for="experience in person.experience">
        <div class="row">
          <span class="job-title"> {{experience.position}} </span>
          <i class="material-icons">details</i>
          <span class="company"> {{experience.company}} </span>
        </div>

        <div class="row">
          <span class="time-period"> {{experience.timeperiod}}</span>
          <span class="job-description">, {{experience.description}} </span>
        </div>
      </div>
    </div>
    <div class="education">
      <h3>Education</h3>
      <div class="education-block" v-for="education in person.education">
        <div class="row">
          <span class="degree">{{education.degree}}</span>
        </div>
        <div class="row">
          <span class="degree-description">{{education.description}}</span>
        </div>
      </div>
    </div>
    <div class="skill-section">
      <h3>Skills</h3>
      <div class="skills" v-for="skill in person.skills">
        <div class="skill-block">
          <i class="material-icons">details</i>
          <span class="skill">{{skill.name}}</span>
        </div>
      </div>
    </div>
    <div class="skills-other">
      <span>{{person.skillDescription}} </span>
    </div>
    <div class="contact">
      <h3>Contact</h3>
      <a :href="'mailto:'+person.contact.email"> {{person.contact.email}}</a>
      <span>;&nbsp;</span>
      <a :href="'tel:'+person.contact.phone">{{person.contact.phone}}</a>
      <span>;&nbsp;</span>
      <span>{{person.contact.street}}, {{person.contact.city}}</span>
      <span>;&nbsp;</span>
      <a :href="person.contact.website">
              {{person.contact.website}}</a>
      <span>;&nbsp;</span>
      <a :href="'https://github.com/'+person.contact.github">
                https://github.com/{{person.contact.github}}</a>
    </div>
  </div>
</div>
</template>

<script>
import {
  PERSON
} from '../person';

import Vue from 'vue';
export default Vue.component('resume-oblique', {
  name: 'resume-oblique',
  data () {
    return {
      person: PERSON
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#resume3 {
  font-family: 'Open Sans Condensed', sans-serif;
  padding-bottom: 50px;
}

#resume3 h3 {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
}

#resume3 a,
#resume3 a:focus,
#resume3 a:hover {
  color: black;
  text-decoration: none;
}

#resume3 .resume-header .triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 600px 0 0 1500px;
  border-color: #006064 transparent transparent transparent;
  position: absolute;
  left: -600px;
  top: 0;
}

#resume3 .resume-header .person-header {
  position: absolute;
  z-index: 20;
  right: 15%;
  top: 200px;
}

#resume3 .resume-header .person-header .person-wrapper {
  overflow: hidden;
  position: relative;
}

#resume3 .resume-header .person-header .img {
  height: 100%;
  width: 100px;
  float: left;
  position: absolute;
  top: 0;
  right: 0;
  background: url('../assets/person.jpg');
  background-position: center;
  background-size: cover;
}

#resume3 .resume-header .person-header .person {
  float: right;
  color: white;
  margin-right: 120px;
}

#resume3 .resume-header .person-header .name {
  text-transform: uppercase;
  font-size: 50px;
  display: table-caption;
  text-align: right;
  line-height: 1.0;
  font-weight: bold;
}

#resume3 .resume-header .person-header .position {
  font-size: 20px;
  display: table-caption;
  text-align: right;
  line-height: 1.0;
  margin-top: 10px;
}

#resume3 .resume-content {
  margin-top: 435px;
  margin-left: 15%;
  width: 70%;
}

#resume3 .resume-content .experience .experience-block {
  line-height: 1;
  margin-bottom: 10px;
}

#resume3 .resume-content .experience .experience-block:first-of-type {
  width: 80%;
}

#resume3 .resume-content .experience .experience-block .row:first-child {
  font-size: 20px;
  text-transform: uppercase;
}

#resume3 .resume-content .experience .experience-block .row:first-child i {
  font-size: 17px;
}

#resume3 .education-block {
  line-height: 1;
  margin-bottom: 10px;
}

#resume3 .education-block .row:first-child {
  font-size: 20px;
  text-transform: uppercase;
}

#resume3 .skill-section .skills {
  width: 100%;
}

#resume3 .skill-section .skills .skill-block {
  width: 50%;
  float: left;
}

#resume3 .skill-section .skills .skill-block i {
  font-size: 17px;
  margin-right: 15px;
}

#resume3 .skill-section .skills .skill-block .skill {
  font-size: 20px;
}

#resume3 .skills-other {
  display: inline-block;
  font-size: 20px;
  margin-top: 10px;
  line-height: 1;
}

#resume3 .contact {
  margin-top: 50px;
}

#resume3 .contact a,
#resume3 .contact span {
  display: inline-block;
  font-size: 20px;
  list-style: none;
  margin-top: 0;
  line-height: 1;
  float: left;
  padding-left: 0;
  margin-left: 0;
}
</style>
