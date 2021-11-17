<template>
<div class="resume" id="template">
    <div id="resume-header">
        <div id="header-left">
            <h2 id="position">{{person.position}}</h2>
            <h1 id="name">{{person.name.first}} {{person.name.last}}</h1>
            <div id="info-flex">
                <span id="email"><a :href='"mailto:" + person.contact.email'>
                  <i class="fa fa-envelope" aria-hidden="true"></i> {{person.contact.email}}</a></span>
                <span id="phone"><i class='fa fa-phone-square' aria-hidden="true"></i> {{person.contact.phone}}</span>
                <span v-if="person.contact.website" id="website"><a :href='person.contact.website'><i class="fa fa-home" aria-hidden="true"></i> {{person.contact.website}}</a></span>
                <span v-if="person.contact.github" id="github"><a :href='contactLinks.github'><i class="fa fa-github" aria-hidden="true"></i> {{person.contact.github}}</a></span>
            </div>
        </div>
        <div id="header-right">
            <div id="headshot"></div>
        </div>
    </div>
    <div id="resume-body">
        <div id="experience-container">
            <h2 id="experience-title">{{ lang.experience }}</h2>
            <div class="spacer"></div>
            <div class="experience" v-for="experience in person.experience" :key="experience.company">
                <h2 class="company">{{experience.company}}</h2>
                <p class="job-info"><span class="job-title">{{experience.position}} | </span><span class="experience-timeperiod">{{experience.timeperiod}}</span></p>
                <p class="job-description" v-if="experience.description">{{experience.description}}</p>
                <ul v-if="experience.list" >
                    <li v-for="(item, index) in experience.list" :key="index">
                      <span class="list-item-black">
                        {{item}}
                      </span>
                    </li>
                </ul>
            </div>
        </div>
        <div id="sidebar">
          <div id="about-me-container">
              <h2 id="education-title">{{ lang.about }}</h2>
              <div class="spacer"></div>
              <div class="about-me-description">
                  <p>{{person.about}}</p>
              </div>
          </div>
          <div id="education-container">
              <h2 id="education-title">{{ lang.education }}</h2>
              <div class="spacer"></div>
              <div class="education" v-for="education in person.education" :key="education.degree">
                  <h2 class="education-description">{{education.description}}</h2>
                  <p>
                  <span class="degree">{{education.degree}}</span>
                  <span class="divider">|</span>
                  <span class="education-timeperiod">{{education.timeperiod}}</span></p>
              </div>
          </div>
          <div id="skills-container" v-if="person.skills != []">
              <h2 id="skills-title">{{ lang.skills }}</h2>
              <div class="spacer"></div>
              <p id="skill-description">{{person.knowledge}}</p>
              <ul id="skill-list">
                  <li class="skill" v-for="skill in person.skills" :key="skill.name">
                    <span class="list-item-black">
                      {{skill.name}}
                    </span>
                  </li>
              </ul>
          </div>
          <div id="reference-container">
              <h2 id="references-title">{{ lang.references }}</h2>
              <div class="spacer"></div>
              <p id="references-description">
                {{person.references}}
                <span id="references-email">
                  <a :href='"mailto:" + person.contact.email'>
                    {{person.contact.email}}
                  </a>
                </span>
              </p>
          </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import { getVueOptions } from './options';

const name = 'green2';
export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@text-green: #008000;
#template {
    box-sizing:border-box;
    font-family:'Open Sans', sans-serif;
    h1, h2 {
        margin:0;
        color: @text-green;
    }

    p {
        margin:0;
        font-size:12px;
    }

    ul li {
        color:@text-green;
        font-size:12px;
    }

    a {
        color:#FFF;
        text-decoration:none;
    }

    .list-item-black {
        color:black;
    }

    #resume-header {
        color: white;
        height: 136px;
        background-color: green;
        box-shadow: inset 0px 0px 200px #301030;
        padding: 40px 100px 25px;

        #header-left {
            width:100%;
            float: left;
            h1 {
                font-size:56px;
                color:white;
                text-transform:uppercase;
                line-height:56px;
            }
            h2 {
                font-size:22px;
                color:white;
            }
            #info-flex {
                display:flex;
                margin-top:20px;
                font-size:14px;

                span {
                    margin-right:25px;
                }
                i {
                    margin-right:5px;
                }
            }
        }

    }

    #resume-body {
        display: flex;
        padding: 28px 35px;

        #experience-container {
            padding-right: 25px
        }

        #sidebar {
            width: 263px;
            flex-shrink: 0;
        }

        #experience-title, #education-title, #skills-title, #references-title {
            font-size: 23px;
            text-transform: uppercase;
        }

        #about-me-container {
            margin-bottom: 20px;
        }

        .about-me-description {
          white-space: pre-wrap;
        }

        .experience {
            margin: 10px 0;
            ul {
                margin: 5px 0 0 0;
                padding: 0 20px;
            }
        }

        .company {
            font-size: 20px;
        }

        .education-description {
            font-size: 16px;
            margin-bottom: 5px;
        }

        .job-info {
            margin-bottom:5px;
        }

        .job-title {
            font-weight:700;
            color: @text-green;
            font-size:16px;
        }

        .experience-timeperiod, .education-timeperiod {
            font-weight:100;
            font-size: 16px;
        }

        .education {
            .divider {
              color: @text-green;
            }
        }

        #skill-list {
            column-count: 2;
            list-style-position: inside;
            padding: 0;

            ul li {
                font-size: 14px;
            }
        }

        #skills-container {
            margin-top: 20px;
        }

        #references-email a{
           color: @text-green;
        }
    }
}

.spacer {
    width:100%;
    border-bottom:1px solid @text-green;
    margin:5px 0 10px;

}
</style>
