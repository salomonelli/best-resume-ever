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
      <h3>{{ lang.experience }}</h3>

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
    <div class="projects">
      <h3>{{ lang.projects }}</h3>

      <div class="project-block" v-for="project in person.projects">
        <div class="row">
          <span class="name"> {{project.name}} </span>
        </div>

        <div class="row">
          <span class="time-period"> {{project.timeperiod}}</span>
          <span class="description">, {{project.description}} </span>
        </div>
      </div>
    </div>

    <div class="education">
      <h3>{{ lang.education }}</h3>
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
      <h3>{{ lang.skills }}</h3>
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
      <h3>{{ Contact }}</h3>
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
import Vue from 'vue';
import { getVueOptions } from './options';

const name = 'oblique-projects';
export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#resume3 {
    font-family: 'Open Sans Condensed', sans-serif;
    padding-bottom: 50px;
    a,
    a:focus,
    a:hover {
        color: black;
        text-decoration: none;
    }
    h3 {
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 10px;
    }
    .resume-header .triangle {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 415px 0 0 1500px;
        border-color: #006064 transparent transparent transparent;
        position: absolute;
        left: -600px;
        top: 0;
    }
    .resume-header .person-header {
        position: absolute;
        z-index: 20;
        right: 15%;
        top: 70px;
        .person-wrapper {
            overflow: hidden;
            position: relative;
        }
        .img {
            height: 100%;
            width: 100px;
            float: left;
            position: absolute;
            top: 0;
            right: 0;
            background: url('../../resume/id.jpg');
            background-position: center;
            background-size: cover;
        }
        .person {
            float: right;
            color: white;
            margin-right: 120px;
        }
        .name {
            text-transform: uppercase;
            font-size: 50px;
            display: table-caption;
            text-align: right;
            line-height: 1.0;
            font-weight: bold;
        }
        .position {
            font-size: 20px;
            display: table-caption;
            text-align: right;
            line-height: 1.0;
            margin-top: 10px;
        }
    }
    .resume-content {
        margin-top: 250px;
        margin-left: 15%;
        width: 70%;
        .experience .experience-block {
            line-height: 1;
            margin-bottom: 10px;
            .row:first-child {
                font-size: 20px;
                text-transform: uppercase;
                i {
                    font-size: 17px;
                }
            }
        }
        .projects .project-block {
            line-height: 1;
            margin-bottom: 10px;
            .row:first-child {
                font-size: 20px;
                text-transform: uppercase;
                i {
                    font-size: 17px;
                }
            }
        }
        .experience .experience-block:first-of-type {
            width: 80%;
        }
    }
    .education-block {
        line-height: 1;
        margin-bottom: 10px;
        .row:first-child {
            font-size: 20px;
            text-transform: uppercase;
        }
    }
    .skill-section .skills {
        width: 100%;
        .skill-block {
            width: 50%;
            float: left;
            i {
                font-size: 17px;
                margin-right: 15px;
            }
            .skill {
                font-size: 20px;
            }
        }
    }
    .skills-other {
        display: inline-block;
        font-size: 20px;
        margin-top: 10px;
        line-height: 1;
    }
    .contact {
        margin-top: 20px;
        a,
        span {
            display: inline-block;
            font-size: 20px;
            list-style: none;
            margin-top: 0;
            line-height: 1;
            float: left;
            padding-left: 0;
            margin-left: 0;
        }
    }
}
</style>
