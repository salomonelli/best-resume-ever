<template>
  <div id="resume2" class="resume">
      <div class="top-row">
          <span class="person-name">  {{person.name.first}}  {{person.name.last}}    </span>
          <span class="person-position">  {{person.position}}    </span>
      </div>
      <div class="left-col">
          <div class="person-image">
              <div class="image-centerer">
                  <div class="img"></div>
              </div>
          </div>
          <div class="contact">
              <h3>Contact</h3>
              <div class="contact-row">
                  <a :href="'mailto:'+person.contact.email">{{person.contact.email}}</a>
              </div>
              <div class="contact-row dots">
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
              </div>
              <div class="contact-row">
                  <a href="'tel:'+person.contact.phone">{{person.contact.phone}}</a>
              </div>
              <div class="contact-row dots">
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
              </div>
              <div class="contact-row">
                  {{person.contact.street}} <br> {{person.contact.city}}
              </div>
              <div class="contact-row dots">
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
              </div>
              <div class="contact-row">
                  <a :href="'https://github.com/'+person.contact.github">https://github.com/{{person.contact.github}}</a>
              </div>
          </div>
      </div>
      <div class="right-col">
          <div class="experience">
              <h3>Experience</h3>
                  <div class="experience-block" v-for="experience in person.experience">
                      <div class="row">
                          <span class="company"> {{experience.company}} -</span>
                          <span class="job-title"> {{experience.position}} </span>
                      </div>
                      <div class="row">
                          <span class="time-period"> {{experience.timeperiod}}</span>
                      </div>
                      <div class="row">
                          <span class="job-description"> {{experience.description}} </span>
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
          <div class="skills-block">
              <h3>Skills</h3>
              <div class="skills">
                      <div class="skill" v-for="skill in person.skills">
                          <span class="skill-name">{{skill.name}}</span>
                      </div>
              </div>
              <span class="skills-other"> {{person.skillDescription}} </span>
          </div>
      </div>
  </div>

  </div>
</template>

<script>
import {
  PERSON
} from '../person';

import Vue from 'vue';
export default Vue.component('resume-side-bar', {
  name: 'resume-side-bar',
  data () {
    return {
      person: PERSON
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#resume2 {
  font-family: 'Raleway', sans-serif;
  padding-bottom: 50px;
}
#resume2 h3 {
  text-transform: uppercase;
  padding-top: 0;
  margin-top: 0;
  letter-spacing: 5px;
  font-weight: 400;
}
#resume2 a,
#resume2 a:focus,
#resume2 a:hover,
#resume2 a:visited {
  text-decoration: none;
}
#resume2 .top-row {
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
}
#resume2 .top-row span {
  width: 100%;
  display: block;
  text-align: center;
  font-weight: normal;
}
#resume2 .top-row span.person-name {
  text-transform: uppercase;
  font-size: 50px;
  letter-spacing: 10px;
}
#resume2 .top-row span.person-position {
  letter-spacing: 5px;
}
#resume2 .left-col {
  width: 26%;
  float: left;
  padding-left: 8%;
  padding-right: 4%;
}
#resume2 .left-col .person-image .image-centerer {
  display: flex;
  justify-content: center;
  height: auto;
  overflow: hidden;
}
#resume2 .left-col .person-image .image-centerer .img {
  flex: none;
  background: url('../assets/person.jpg');
  background-position: center;
  background-size: cover;
  height: 250px;
  width: 100%;
}
#resume2 .left-col .contact h3 {
  text-align: center;
  margin-top: 20px;
}
#resume2 .left-col .contact .contact-row {
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 3px;
}
#resume2 .left-col .contact .contact-row:first-of-type {
  margin-top: 50px;
}
#resume2 .left-col .contact .contact-row.dots {
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 10px;
  color: rgba(153, 153, 153, 0.6);
}
#resume2 .left-col .contact .contact-row a {
  color: black;
}
#resume2 .right-col {
  width: 50%;
  float: right;
  padding-left: 4%;
  padding-right: 8%;
}
#resume2 .right-col .experience-block {
  margin-bottom: 10px;
}
#resume2 .right-col .experience-block .row:first-child {
  margin-bottom: 3px;
}
#resume2 .right-col .experience-block .row .company {
  text-transform: uppercase;
  font-size: 19px;
}
#resume2 .right-col .experience-block .row .job-title {
  font-size: 19px;
}
#resume2 .right-col .education {
  margin-top: 50px;
}
#resume2 .right-col .education .education-block {
  margin-bottom: 10px;
}
#resume2 .right-col .education .education-block .degree {
  font-size: 19px;
  text-transform: uppercase;
  margin-bottom: 3px;
}
#resume2 .right-col .skills-block {
  margin-top: 50px;
  position: relative;
}
#resume2 .right-col .skills-block .skills {
  margin-bottom: 10px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  margin-bottom: 20px;
}
#resume2 .right-col .skills-block .skills .skill {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;
  border: #333 1px solid;
  margin: 3px;
  float: left;
  font-size: 13px;
}
#resume2 .right-col .skills-block .skills .skill .skill-name {
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}
#resume2 .right-col .skills-block .skills .skills-other {
  display: inline-block;
  width: 100%;
  margin-top: 20px;
}

</style>
