<template>
<div class="resume" id="resume1">
  <div class="row text-center">
    <span class="name">{{person.name.first}}  {{person.name.last}}</span>
  </div>
  <div class="row text-center">
    <p class="position center">{{person.position}}</p>
  </div>
  <div class="row">
    <div class="image center">
      <div class="img"></div>
    </div>
  </div>
  <div class="left half">
    <div class="experience">
      <h3>Experience</h3>
      <div class="experience-block" v-for="experience in person.experience">
        <span class="company"> {{experience.company}} </span>
        <span class="job-title"> {{experience.position}} </span>
        <span class="time-period"> {{experience.timeperiod}}</span>
        <span class="job-description"> {{experience.description}} </span>
      </div>
    </div>
    <div class="contact">
      <h3>Contact</h3>
      <table>
        <tr>
          <td><a :href="'mailto:'+person.contact.email">{{person.contact.email}}</a></td>
          <td><i class="fa fa-envelope" aria-hidden="true"></i></td>
        </tr>
        <tr>
          <td><a :href="'tel:'+person.contact.phone">{{person.contact.phone}}</a></td>
          <td><i class="fa fa-phone" aria-hidden="true"></i></td>
        </tr>
        <tr>
          <td>{{person.contact.street}} <br> {{person.contact.city}}</td>
          <td><i class="fa fa-home" aria-hidden="true"></i></td>
        </tr>
        <tr>
          <td><a :href="person.contact.website">{{person.contact.website}}</a></td>
          <td><i class="fa fa-globe" aria-hidden="true"></i></td>
        </tr>
        <tr>
          <td><a :href="'https://github.com/'+person.contact.github">https://github.com/{{person.contact.github}}</a></td>
          <td><i class="fa fa-github" aria-hidden="true"></i></td>
        </tr>
      </table>
    </div>
  </div>
  <div class="right half">
    <div class="education">
      <h3>Education</h3>
      <div class="education-block" v-for="education in person.education">
        <span class="degree">{{education.degree}}</span>
        <span class="timeperiod">{{education.timeperiod}}</span>
        <span class="degree-description">{{education.description}}</span>
      </div>
    </div>
    <h3>Skills</h3>
    <div class="skills">
      <div class="skill-block" v-for="skill in person.skills">
        <span class="skill">{{skill.name}}</span>
        <div class="skill-bar">
          <div :style="'width: '+skill.level+'%'" class="level"> </div>
        </div>
      </div>
    </div>
    <span class="skills-other"> {{person.skillDescription}} </span>
  </div>
  <div class="projects">
    <h3>Projects</h3>
    <div class="project-block" v-for="project in person.projects">
      <span class="project">{{project.name}}</span>
      <br>
      <span class="project-description">{{project.description}}</span>
    </div>

  </div>

</div>
</template>

<script>
import Vue from 'vue';
import { getVueOptions } from './options';

const name = 'left-right-projects';
export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#resume1 {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 15px;
    padding-bottom: 50px;
    a,
    a:focus,
    a:hover,
    a:visited {
        color: #616161;
    }
    h3 {
        margin-bottom: 0;
    }
    span {
        display: inline-block;
    }
    .row {
        width: 100%;
    }
    .half {
        width: 44%;
    }
    .half.left {
        float: left;
        text-align: right;
        padding-left: 4%;
        padding-right: 2%;
    }
    .half.right {
        float: right;
        text-align: left;
        padding-right: 4%;
        padding-left: 2%;
    }
    .center {
        margin-left: auto;
        margin-right: auto;
    }
    .text-center {
        text-align: center;
    }
    .name {
        border: 1px solid black;
        text-transform: uppercase;
        padding: 10px 20px;
        margin-top: 80px;
        margin-bottom: 5px;
        font-family: 'Open Sans', sans-serif;
        font-size: 35px;
        font-weight: 600;
        letter-spacing: 10px;
    }
    .position {
        text-transform: uppercase;
        font-family: 'Open Sans', sans-serif;
        font-size: smaller;
        color: #757575;
        margin-bottom: 40px;
    }
    .image {
        width: 100px;
        height: 100px;
        margin-top: 50px;
        margin-bottom: 50px;
        .img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-image: url("../../resume/id.jpg");
            background-repeat: none;
            background-position: center;
            background-size: cover;
        }
    }
    .contact {
        width: 100%;
        table {
            text-align: right;
            float: right;
            margin-top: 5px;
            color: #616161;
            font-size: 15px;
            i {
                padding: 2px;
                color: #616161;
            }
            tr td:nth-child(2) {
                vertical-align: top;
            }
        }
    }
    .experience .experience-block span {
        width: 100%;
        color: #616161;
    }
    .experience .experience-block span.company {
        font-weight: bold;
        padding-bottom: 5px;
        padding-top: 10px;
        color: #424242;
    }
    .experience .experience-block span.job-title {
        font-style: italic;
    }
    .education-block span {
        color: #616161;
    }
    .education-block span.degree {
        font-weight: bold;
        padding-bottom: 5px;
        padding-top: 10px;
        color: #424242;
    }
    .project-block {
        display: flex;
        flex-direction: column;
        width: 25%;
        float: left;
    }
    .project-block span {
        color: #616161;
        font-size: 15px;
    }
    .project-block span.project {
        font-weight: bold;
        margin-bottom: -10px;
        padding-top: 10px;
        color: #424242;
    }
    .skills-other {
        color: #616161;
        margin-bottom: 10px;
    }
    .skills {
        margin-top: 20px;
        margin-bottom: 10px;
        .skill-block {
            padding-bottom: 10px;
            display: inline-block;
            .skill {
                width: 100px;
                color: #616161;
                float: left;
            }
            .skill-bar {
                float: right;
                background: #e0e0e0;
                overflow: hidden;
                height: 8px;
                border-radius: 3px;
                margin-top: 6.5px;
                position: relative;
                width: 249px;
                .level {
                    background: #757575;
                    height: 100%;
                }
            }
        }
    }
    .projects {
        float: left;
        text-align: left;
        padding-left: 4%;
        padding-right: 2%;
    }
}
</style>
