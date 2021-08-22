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
                  <span>{{person.contact.email}}</span>
              </div>
              <div class="contact-row dots">
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
              </div>
              <div class="contact-row">
                  <span>{{person.contact.phone}}</span>
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
                {{person.nationalities}}
              </div>
              <div class="contact-row dots">
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
              </div>
          </div>

          <div class="skills-block">
              <h3> {{ lang.skills }}</h3>
              <div class="skills">
                      <div class="skill" v-for="skill in person.skills">
                          <span class="skill-name">{{skill.name}}</span>
                      </div>
              </div>
          </div>

          <div class="languages">
              <h3>{{lang.languages}}</h3>
              <div class="description"> {{person.languages}} </div>
          </div>

          <div class="volunteering">
              <h3>{{lang.volunteering}}</h3>
              <div class="experience" v-for="exp in person.volunteering">
                <div class="title"> {{exp.timeperiod}} - {{exp.company}}</div>
                <div class="description"> {{exp.description}}</div>
                <div class="dots">
                    <i class="fa fa-circle" aria-hidden="true"></i>
                    <i class="fa fa-circle" aria-hidden="true"></i>
                    <i class="fa fa-circle" aria-hidden="true"></i>
                </div>
              </div> 
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

const name = 'side-bar-projects-alt';
export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#resume2 {
  background: #131516;
  color: #d8d4cf;
  font-family:'Raleway', sans-serif;
  padding-bottom:50px;
  a, a:focus, a:hover, a:visited{
    text-decoration: none;
  }
  h3 {
    text-transform:uppercase;
    padding-top:0;
    padding-bot: 0;
    margin-top:15px;
    letter-spacing:5px;
    font-weight:400;
  }
  .top-row {
    width:100%;
    padding-top:20px;
    padding-bottom:40px;
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
    h3{
      text-align: center;
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
      margin-top:15px;
    }
    .contact .contact-row:last-of-type {
      margin-bottom:20px;
    }
    .dots {
      margin-top:5px;
      margin-bottom:5px;
      font-size:4px;
      color:rgba(153,153,153,0.6);
    }
    .skills-block {
      // text-align:center;
      margin-top:30px;
      position:relative;
      .skills {
        margin-bottom:10px;
        // text-align:center;
        position:relative;
        margin-left:auto;
        margin-right:auto;
        display:inline-block;
        .skill {
          // text-align:center;
          width:50px;
          height:50px;
          border-radius:50%;
          position:relative;
          border:#333333 1px solid;
          margin:5px;
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
      }
    }
    .volunteering{
      text-align: center;
    }
    .languages .description{
      text-align: center;
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
        font-size:15px;
      }
      .row .job-title {
        font-size:15px;
      }
    }
    .projects {
        margin-top:40px;
        .project-block {
            margin-bottom:10px;
            .degree {
            font-size:15px;
            text-transform:uppercase;
            margin-bottom:3px;
            }
        }
    }
    .education {
      margin-top:40px;
      .education-block {
        margin-bottom:10px;
        .degree {
          font-size:12px;
          text-transform:uppercase;
          margin-bottom:3px;
        }
      }
    }
  }
}
</style>
