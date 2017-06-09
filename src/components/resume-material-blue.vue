<template>
<div class="resume" id="material-blue">
  <meta name="name" content="material blue" />
  <meta name="author" content="pubkey" link="https://github.com/pubkey" />
  <div class="leftCol m_box">
      <div class="heading" id="myselfpic">
          <div class="title">
              <h2>{{person.name.first}}  {{person.name.last}}</h2>
              <div>{{person.position}}</div>
          </div>
      </div>

      <div class="item">
          <div class="icon">
              <i class="fa fa-user"></i>
          </div>
          <div class="text">
              <ul>
                  <li>Born {{person.birth.year}} in {{person.birth.location}}</li>
              </ul>
          </div>
      </div>

      <div class="item">
          <div class="icon">
              <i class="fa fa-location-arrow"></i>
          </div>
          <div class="text">
              <ul>
                  <li>{{person.contact.street}}</li>
                  <li>{{person.contact.city}}</li>
              </ul>
          </div>
      </div>


            <a :href="'tel:'+person.contact.phone">
                <div class="item">
                    <div class="icon">
                        <i class="fa fa-phone"></i>
                    </div>
                    <div class="text">
                        <h4>{{person.contact.phone}}</h4>
                        <span>mobil</span>
                    </div>
                </div>
            </a>

      <a :href="'mailto:'+person.contact.email">
          <div class="item">
              <div class="icon">
                  <i class="fa fa-envelope"></i>
              </div>
              <div class="text">
                  <h4>{{person.contact.email}}</h4>
                  <span>private</span>
              </div>
          </div>
      </a>

      <a :href="'https://github.com/'+person.contact.github" target="_blank">
          <div class="item">
              <div class="icon">
                  <i class="fa fa-github"></i>
              </div>
              <div class="text">
                  <h4>@{{person.contact.github}}</h4>
                  <span>https://github.com/{{person.contact.github}}</span>
              </div>
          </div>
      </a>

      <div class="item last">
          <div class="icon">
              <i class="fa fa-cogs"></i>
          </div>
          <div class="text">
              <h3>Skills</h3>
              <div style="width: 100%; height: 15px;"></div>
          </div>
              <div class="skill"  v-for="skill in person.skills">
                  <div class="right">
                      <span>{{skill.name}}</span>
                      <div class="progress">
                          <div class="determinate" :style="'width: '+skill.level+'%;'">
                              <i class="fa fa-circle"></i>
                          </div>
                      </div>
                  </div>
              </div>
      </div>
  </div>

  <div class="rightCol">

      <div class="block">
          <div class="icon">
              <i class="fa fa-suitcase"></i>
          </div>
          <div class="content">
              <h2>Experience</h2>
                  <div class="item" v-for="experience in person.experience">
                      <h3>{{experience.position}} - {{experience.company}}</h3>
                      <span>{{experience.timeperiod}}</span>
                      <p>
                          {{experience.description}}
                      </p>
                  </div>
          </div>
      </div>

      <div class="block">
          <div class="icon">
              <i class="fa fa-graduation-cap"></i>
          </div>
          <div class="content">
              <h2>Education</h2>

                  <div class="item" v-for="education in person.education">
                      <h3>{{education.degree}}</h3>
                      <span>{{education.timeperiod}}</span>
                      <p> {{education.description}} </p>
                  </div>
          </div>
      </div>
  </div>
  <div style="clear:both;"></div>
</div>
</template>

<script>
import {
  PERSON
} from '../person';

import Vue from 'vue';
export default Vue.component('resume-material-blue', {
  name: 'resume-material-blue',
  data () {
    return {
      person: PERSON
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#material-blue {
  font-family:'roboto', sans-serif;
  background-color:#cccccc;
  font-size:15px;
  line-height:1.5;
  color:#767270;
  letter-spacing:0.072em;
  font-weight:normal;
  h1, h3, h5, h6 {
    font-weight:400;
    margin:0;
  }
  .c {
    clear:both;
  }
  li {
    margin:0;
    padding:0;
    list-style-type:none;
    padding-top:9px;
  }
  ul {
    margin:0;
    padding:0;
    list-style-type:none;
  }
  p {
    margin-top:0;
    margin-bottom:25px;
    font-family:'Roboto', sans-serif;
    font-weight:300;
    font-size:10pt;
    line-height:17pt;
  }
  .m_box {
    box-shadow:0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  }
  .fa {
    display:inline-block;
    font-family:FontAwesome;
    font-style:normal;
    font-weight:normal;
    line-height:1;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    font-size:26px;
  }
  h2 {
    font-weight:400;
    font-weight:500;
    margin:0;
    margin:0;
    font-size:22pt;
    line-height:37pt;
  }
  h4 {
    font-weight:400;
    margin:0;
    font-size:12pt;
    line-height:20pt;
    opacity:1;
  }
  .rightCol {
    width:63.5%;
    height:100%;
    float:right;
    display:flex;
    flex-direction:column;
    .block {
      box-shadow:0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
      width:100%;
      min-height:50px;
      flex:1;
      position:relative;
      background-color:white;
      padding-top:24px;
      padding-bottom:10px;
      margin-top:6px;
      margin-bottom:6px;
      .icon {
        width:16%;
        float:left;
        margin-left:0;
        .fa {
          text-align:center;
          display:block;
          font-size:30pt;
        }
      }
      .content {
        width:80%;
        position:absolute;
        height:96%;
        left:17%;
        padding-right:3%;
        text-align:left;
        display:flex;
        flex-direction:column;
        .item {
          border-bottom:1px solid #bdbdbd;
          flex:1;
          width:97%;
          display:flex;
          justify-content:center;
          flex-direction:column;
          text-align:left;
          span {
            color:#5da4d9;
            margin-top:0;
            font-size:10pt;
            line-height:16pt;
          }
          p {
            margin-top:5px;
          }
        }
        .item:last-of-type {
          border-bottom-style:none;
          border-bottom-style:none;
        }
      }
    }
  }
  .leftCol {
    width:35%;
    height:100%;
    float:left;
    padding:0;
    text-align:left;
    color:#ffffff;
    background-color:#5da4d9;
    overflow:hidden;
    display:block;
    a {
      color:white;
      text-decoration:none;
    }
    .heading {
      background-color:white;
      background-repeat:no-repeat;
      background-size:cover;
      background-position:center;
      position:relative;
      width:100%;
      height:340px;
    }
    .title {
      position:absolute;
      right:25px;
      bottom:25px;
      span {
        margin-top:-5px;
        font-size:10pt;
        margin:0;
        padding:0;
        line-height:15pt;
      }
    }
    .item {
      width:100%;
      margin-top:13px;
      float:left;
      .icon {
        width:20%;
        margin-top:8px;
        float:left;
      }
      .fa {
        display:inherit;
        text-align:center;
      }
      .text {
        float:right;
        width:69%;
        padding-right:10%;
        padding-bottom:13px;
        border-bottom:1px solid #4783c2;
        li {
          padding-top:0;
        }
      }
      span {
        font-weight:300;
      }
      .skill {
        clear:both;
        width:77%;
        margin-left:14%;
        padding-top:4px;
        .left {
          float:left;
          width:10%;
          padding-top:3px;
          i:nth-child(2) {
            float:left;
            padding-top:4px;
          }
        }
        .right {
          float:right;
          width:90%;
          .progress {
            float:left;
            position:relative;
            height:2px;
            display:block;
            width:95%;
            background-color:#4783c2;
            border-radius:2px;
            margin:0.5rem 0 1rem;
            overflow:visible;
            .determinate {
              background-color:white;
              position:absolute;
              top:0;
              bottom:0;
              .fa {
                font-size:12px;
                position:absolute;
                top:-4px;
                right:-2px;
                margin-left:50%;
              }
            }
          }
        }
      }
    }
    .item.last .text {
      border-bottom-style:none;
      padding-bottom:0;
    }
  }
  #myselfpic {
    background-image:url('../assets/person.jpg');
    color:black;
  }
  #githubIcon {
    width:25px;
    padding-left:17px;
  }
}
</style>
