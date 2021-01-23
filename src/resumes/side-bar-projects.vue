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
          <div class="left-module">
              <h3 class="title">Info</h3>
              <div class="left-row">
                  <span>age: {{person.info.age}}</span>
              </div>
              <div class="left-row dots">
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
              </div>
              <div class="left-row">
                  <span>nation: {{person.info.nation}}</span>
              </div>
              <div class="left-row dots">
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
              </div>
              <div class="left-row">
                  <span>cities: {{person.info.city}}</span>
              </div>
          </div>
          <div class="left-module">
              <h3 class="title">Contact</h3>
              <div class="left-row">
                  <a :href="'mailto:'+person.contact.email">{{person.contact.email}}</a>
              </div>
              <div class="left-row dots">
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
              </div>
              <div class="left-row">
                  <a href="'tel:'+person.contact.phone">{{person.contact.phone}}</a>
              </div>
              <div class="left-row dots">
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
              </div>
              <div class="left-row">
                <a :href="person.contact.website">{{person.contact.website}}</a>
              </div>
              <div class="left-row dots">
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
                  <i class="fa fa-circle" aria-hidden="true"></i>
              </div>
              <div class="left-row">
                  <a :href="'https://github.com/'+person.contact.github">https://github.com/{{person.contact.github}}</a>
              </div>
          </div>
          <div class="skills-block left-module">
              <h3 class="title">Skills</h3>
              <div class="skills">
                  <span class="skill" v-for="skill in person.skills" :style="{'--percentage': (100-skill.level)+'%'}" >
                      <span class="skill-name">{{skill.name}}</span>
                  </span>
              </div>
          </div>
      </div>
      <div class="right-col">
          <div class="education right-module">
              <h3 class="title">Education</h3>
              <div class="right-block" v-for="education in person.education">
                  <div class="row">
                      <span class="university name">{{education.university}}</span>
                      <span class="timeperiod">{{education.timeperiod}}</span>
                  </div>
                  <div class="row">
                      <span class="degree">{{education.degree}}</span>
                  </div>
                  <div class="row">
                      <span class="row-title">Major:</span>
                      <span class="row-content">{{education.major}}</span>
                  </div>
                  <div class="courses row">
                    <div class="courses-title row-title">Main courses
                      <span class="gpa">GPA: {{education.gpa}}</span>

                    </div>
                    <div class="courses-content">
                      <span class="course" v-for="course in education.courses">{{course.name}}</span>
                    </div>
                  </div>
              </div>
          </div>
          <div class="experience right-module">
              <h3 class="title">Practices</h3>
              <div class="right-block" v-for="experience in person.experience">
                  <div class="row">
                      <span class="name company"> {{experience.company}}</span>
                      <span class="timeperiod"> {{experience.timeperiod}} </span>
                  </div>
                  <div class="row">
                      <span class="row-title">Department:</span>
                      <span class="row-content">{{experience.department}} </span>
                  </div>
                  <div class="row">
                      <span class="row-title">Position:</span>
                      <span>{{experience.position}} </span>
                  </div>
                  <div class="row">
                      <span class="row-title">Main work:</span>
                      <div class="row-content" v-for="desc in experience.description"> {{desc.point}} </div>
                  </div>
              </div>
          </div>
          <div class="projects right-module">
              <h3 class="title">Projects</h3>
              <div class="right-block" v-for="project in person.projects">
                  <div class="row">
                      <span class="name"> {{project.name}} </span>
                      <span class="timeperiod"> {{project.timeperiod}}</span>
                  </div>
                  <div class="row">
                      <span class="row-title">Overview:</span>
                      <span class="row-content">{{project.description.overview}} </span>
                  </div>
                  <div class="row">
                      <span class="row-title">Responsibilities:</span>
                      <span class="row-content"> {{project.description.responsibilities}} </span>
                  </div>
              </div>
          </div>
          <div class="projects right-module">
              <h3 class="title">Campus Experience</h3>
              <div class="right-block" v-for="organization in person.campus">
                  <div class="row">
                      <span class="name"> {{organization.organization}}</span>
                      <span class="timeperiod"> {{organization.timeperiod}} </span>
                  </div>
                  <div class="row">
                      <span class="row-content"> {{organization.description}} </span>
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
    .title {
      font-weight: 500
    }
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
    .left-module {
      h3 {
        text-align:center;
        margin-top:20px;
      }
      .left-row {
        font-size: 12px;
        text-align:center;
        letter-spacing:2px;
        margin-bottom:3px;
        word-break: break-word;
        a {
          color:black;
        }
        &:first-of-type {
          margin-top:30px;
        }
        &:last-of-type {
          margin-bottom:50px;
        }
        &.dots {
          margin-top:20px;
          margin-bottom:15px;
          font-size:10px;
          color:rgba(153,153,153,0.6);
        }
      }
    }
    .skills-block {
      margin-top:30px;
      position:relative;
      .title{
        margin-bottom: 30px;
      }
      .skills {
        position:relative;
        margin-left:auto;
        margin-right:auto;
        .skill {
          width:57px;
          height:57px;
          border-radius:50%;
          position:relative;
          border:#333333 1px solid;
          margin:1px;
          float:left;
          font-weight: 500;
          .skill-name {
            text-align:center;
            position:absolute;
            top:50%;
            transform:translateY(-50%);
            width:100%;
            font-size: 12px;
          }
        }
        .skill::before{
          content:'';
          background-color: #c1a1d3;
          clip-path: polygon(0 var(--percentage), 100%  var(--percentage), 100% 100%, 0 100%);
          display: block;
          width: 57px;
          height: 58px;
          border-radius: 50%;
        }
      }
    }
  }
  .right-col {
    width:64%;
    float:right;
    padding-left:2%;
    padding-right:4%;

    .right-module {
      .title {
        font-weight: 600
      }
      .right-block {
        margin-bottom: 30px;
        .row {
          .row-title {
            font-weight: 450;
          }
          .row-content {
            color: #252525;
          }
          .name {
            font-weight: 500;
            font-size: 14px;
          }
          .timeperiod {
            font-size:14px;
            margin-bottom:3px;
            float: right;
          }
        }
      }
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
    .company::before{
      display: inline-block;
      height: 30px;
      width: 30px;
      content: '';
      background-image: url('../../resume/bytedance.jpg');
      background-size:30px 30px;
      vertical-align: middle;
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
  }
}
</style>
