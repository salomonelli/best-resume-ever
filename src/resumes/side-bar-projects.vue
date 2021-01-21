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
          <div class="contact left-module">
              <h3 class="right-title">Info</h3>
              <div class="contact-row">
                  <span>age: {{person.info.age}}</span>
              </div>
              <div class="contact-row dots">
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
              </div>
              <div class="contact-row">
                  <span>cities: {{person.info.city}}</span>
              </div>
          </div>
          <div class="contact">
              <h3 class="right-title">Contact</h3>
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
                <a :href="person.contact.website">{{person.contact.website}}</a>
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

      <div class="hobbies-container">
        <!-- <span class="subheadline">Hobbies</span> -->
        <div class="hobbies-content">
          <a v-for="(hobby, index) in person.hobbies" :key="index"
            class="hobby-item"
            :href="hobby.url">

            <i v-if="hobby.iconClass" :class="hobby.iconClass + ' hobby-item__icon'"></i>
            <span class="hobby-item__icon-label"> {{ hobby.name }} </span>
          </a>
        </div>
      </div>
      </div>
      <div class="right-col">
          <div class="education">
              <h3 class="right-title">Education</h3>
              <div class="education-block" v-for="education in person.education">
                  <div class="row">
                      <span class="university">{{education.university}}&nbsp-</span>
                      <span class="degree">{{education.degree}}</span>
                      <span class="timeperiod">{{education.timeperiod}}</span>
                  </div>
                   <div class="row">
                      <span>Major: {{education.major}}</span>
                  </div>
                  <div class="courses">
                    <div class="courses-title">Main courses
                      <span class="gpa">GPA: {{education.gpa}}</span>

                    </div>
                    <div class="courses-content">
                      <span class="course" v-for="course in education.courses">{{course.name}}</span>
                    </div>
                  </div>
              </div>
          </div>
          <div class="experience">
              <h3 class="right-title">Practices</h3>
                  <div class="experience-block" v-for="experience in person.experience">
                      <div class="row">
                          <span class="company"> {{experience.company}}</span>
                          <span class="timeperiod"> {{experience.timeperiod}} </span>
                      </div>
                      <div class="row">
                          <span class="job-description">Department:&nbsp;&nbsp; {{experience.department}} </span>
                      </div>
                      <div class="row">
                          <span class="job-description">Position:&nbsp;&nbsp; {{experience.position}} </span>
                      </div>
                      <div class="row">
                          <div class="job-description">Main work:&nbsp;&nbsp;</div>
                          <div class="job-description" v-for="desc in experience.description"> {{desc.point}} </div>
                      </div>

                  </div>
          </div>
          <div class="projects">
              <h3 class="right-title">Projects</h3>
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
          <div class="projects">
              <h3 class="right-title">Campus Experience</h3>
                  <div class="project-block" v-for="organization in person.campus">
                      <div class="row">
                          <span class="company"> {{organization.organization}}</span>
                          <span class="timeperiod"> {{organization.timeperiod}} </span>
                      </div>
                      <div class="row">
                          <span class="description"> {{organization.description}} </span>
                      </div>
                  </div>

          </div>

          <div class="skills-block">
              <h3 class="right-title">Skills</h3>
              <div class="skills">
                      <div class="skill" v-for="skill in person.skills" :style="{'--percentage': (100-skill.level)+'%'}" >
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
import Vue from 'vue';
import { getVueOptions } from './options';

const name = 'side-bar-projects';
export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

#resume2 {
  font-family:'Raleway', sans-serif;
  font-size: 14px;
  line-height: 26px;
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
    padding-top:40px;
    padding-bottom:40px;
    span {
      width:100%;
      display:block;
      text-align:center;
      font-weight:normal;
    }
    span.person-name {
      text-transform:uppercase;
      font-size:30px;
      letter-spacing:10px;
    }
    span.person-position {
      margin-top: 10px;
      letter-spacing:5px;
    }
  }
  .left-col {
    width:24%;
    float:left;
    padding-left:4%;
    padding-right:2%;
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
      font-size: 12px;
      text-align:center;
      letter-spacing:2px;
      margin-bottom:3px;
      word-break: break-word;
      a {
        color:black;
      }
    }
    .contact .contact-row:first-of-type {
      margin-top:30px;
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
    width:64%;
    float:right;
    padding-left:2%;
    padding-right:4%;
    .right-title {
      font-weight: 600
    }
    .experience {
      margin-top:30px;
    }
    .experience-block {
      margin-bottom: 5px;
      .row:first-child {
        margin-bottom:3px;
      }
      .row .company {
        font-size:14px;
      }
      .company::before{
          display: inline-block;
          height: 30px;
          width: 30px;
          content: '';
          background-image: url('../../resume/bytedance.jpg');
          background-size:30px 30px;
          vertical-align: middle;
        }
      .row .job-title {
        font-size:14px;
      }
      .timeperiod {
        float: right;
      }
    }
    .projects {
        margin-top:30px;
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
      .education-block {
        margin-bottom: 5px;
        .degree {
          font-size:12px;
          text-transform:uppercase;
          margin-bottom:3px;
        }
        .university {
          font-size:14px;
          font-weight: 500;
          margin-bottom:3px;
        }
        .university::before{
          display: inline-block;
          height: 20px;
          width: 20px;
          content: '';
          background-image: url('../../resume/zju.png');
          background-size:20px 20px;
          vertical-align: middle;
          margin-right: 8px;
        }
        .timeperiod {
          font-size:14px;
          margin-bottom:3px;
          float: right;
        }
        .courses{
          display: flex;
          flex-direction: column;
          align-content: center;
          align-items: stretch;
          width: 100%;
          .courses-title{
              .major{
                float: right;
              }
              .gpa{
                float: right;
              }
          }
          .courses-content {
            margin-top: 5px;
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            justify-content: center;
            .course{
              border-radius: 5px;
              color: #555;
              padding: 2px;
              margin: 2px;
              word-break: keep-all;
              width: 30%;
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              border: #555 solid 1px;
              font-size: 13px;
            }
          }
        }

      }
    }
    .skills-block {
      margin-top:30px;
      position:relative;
      font-size: 12px;
      .skills {
        margin-bottom: 5px;
        margin-bottom:20px;
        position:relative;
        margin-left:auto;
        margin-right:auto;
        display:inline-block;
        .skill {
          width:65px;
          height:65px;
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
        .skill::before{
          content:'';
          background-color: #0984e3;
          clip-path: polygon(0 var(--percentage), 100%  var(--percentage), 100% 100%, 0 100%);
          display: block;
          width: 66px;
          height: 67px;
          border-radius: 50%;
          z-index:-5;
        }

        .skills-other {
          display:inline-block;
          width:100%;
          margin-top:20px;
        }
      }
    }
  }

.hobbies-container {
  margin-top: 30px;
}

.hobbies-content {
  display: flex;
  flex-direction: column;
}

.hobby-item {
  display: grid;
  grid-template-columns: 30px auto;

  color: rgba(255, 255, 255, .6);

  margin-right: 25px;
  margin-bottom: 10px;

  transition: .5s;

  &:hover {
    color: rgba(255, 255, 255, .8);
    transition: .5s;
  }
}

.hobby-item__icon {
  font-size: 1.3em;
}

.hobby-item__icon-label {
  top: 2.5px;
  position: relative;
}
}
</style>
