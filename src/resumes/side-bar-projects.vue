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
              <h3>{{ lang.contact }}</h3>
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
          <div class="skills-block">
              <h3> {{ lang.skills }}</h3>
              <div class="skills">
                      <div class="skill" v-for="skill in person.skills">
                          <span class="skill-name">{{skill.name}}</span>
                      </div>
              </div>
              <span class="skills-other"> {{person.skillDescription}} </span>
          </div>
      </div>
      <div class="right-col">
          <div class="experience">
              <h3>{{ lang.experience }}</h3>
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
          <div class="projects">
              <h3>{{ lang.projects }}</h3>
                  <div class="project-block" v-for="project in person.projects">
                      <div class="row">
                          <span class="name"> {{project.name}} </span>
                      <div class="row">
                          <span class="time-period"> {{project.timeperiod}}</span>
                      </div>
                      <div class="row">
                          <span class="description"> {{project.description}} </span>
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

      </div>
  </div>

  </div>
</template>

<script>
import Vue from 'vue';
import { getVueOptions } from './options';

const name = 'side-bar-projects';
export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#resume2 {
  font-family:'Raleway', sans-serif;
  padding-bottom:50px;
  a, a:focus, a:hover, a:visited {
    text-decoration:none;
  }
  h3 {
    text-transform:uppercase;
    padding-top:0;
    margin-top:0;
    letter-spacing:5px;
    font-weight:400;
  }
  .top-row {
    width:100%;
    padding-top:60px;
    padding-bottom:60px;
    span {
      width:100%;
      display:block;
      text-align:center;
      font-weight:normal;
    }
    span.person-name {
      text-transform:uppercase;
      font-size:40px;
      letter-spacing:10px;
    }
    span.person-position {
      letter-spacing:5px;
    }
  }
  .left-col {
    width:26%;
    float:left;
    padding-left:8%;
    padding-right:4%;
    .person-image .image-centerer {
      display:flex;
      justify-content:center;
      height:auto;
      overflow:hidden;
      .img {
        flex:none;
        background:url('../../resume/id.jpg');
        background-position:center;
        background-size:cover;
        height:250px;
        width:100%;
      }
    }
    .contact h3 {
      text-align:center;
      margin-top:20px;
    }
    .contact .contact-row {
      text-align:center;
      letter-spacing:2px;
      margin-bottom:3px;
      a {
        color:black;
      }
    }
    .contact .contact-row:first-of-type {
      margin-top:50px;
    }
    .contact .contact-row:last-of-type {
      margin-bottom:50px;
    }
    .contact .contact-row.dots {
      margin-top:20px;
      margin-bottom:15px;
      font-size:10px;
      color:rgba(153,153,153,0.6);
    }
  }
  .right-col {
    width:50%;
    float:right;
    padding-left:4%;
    padding-right:8%;
    .experience-block {
      margin-bottom:10px;
      .row:first-child {
        margin-bottom:3px;
      }
      .row .company {
        text-transform:uppercase;
        font-size:12px;
      }
      .row .job-title {
        font-size:12px;
      }
    }
    .projects {
        margin-top:50px;
        .project-block {
            margin-bottom:10px;
            .degree {
            font-size:12px;
            text-transform:uppercase;
            margin-bottom:3px;
            }
        }
    }
    .education {
      margin-top:50px;
      .education-block {
        margin-bottom:10px;
        .degree {
          font-size:12px;
          text-transform:uppercase;
          margin-bottom:3px;
        }
      }
    }
    .skills-block {
      text-align:center;
      margin-top:50px;
      position:relative;
      .skills {
        text-align:center;
        margin-bottom:10px;
        margin-bottom:20px;
        position:relative;
        margin-left:auto;
        margin-right:auto;
        display:inline-block;
        .skill {
          text-align:center;
          width:80px;
          height:80px;
          border-radius:50%;
          position:relative;
          border:#333333 1px solid;
          margin:3px;
          float:left;
          font-size:13px;
          .skill-name {
            text-align:center;
            position:absolute;
            top:50%;
            transform:translateY(-50%);
            width:100%;
          }
        }
        .skills-other {
          display:inline-block;
          width:100%;
          margin-top:20px;
        }
      }
    }
  }
}
</style>
