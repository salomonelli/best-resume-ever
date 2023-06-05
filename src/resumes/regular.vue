<template>
<div class="resume" id="template">
    <div id="resume-header">
        <div id="header-center">
            <h1 id="name">{{person.name.first}} {{person.name.last}}</h1>
            <div id="info-flex">
                <span id="email"><a :href='"mailto:" + person.contact.email'>
                  <i class="fa fa-envelope" aria-hidden="true"></i> {{person.contact.email}}</a></span>
                <span id="phone"><i class='fa fa-phone-square' aria-hidden="true"></i> {{person.contact.phone}}</span>
                <span v-if="person.contact.website" id="website"><a :href='person.contact.website'><i class="fa fa-home" aria-hidden="true"></i> {{person.contact.website}}</a></span>
                <span v-if="person.contact.github" id="github"><a :href='contactLinks.github'><i class="fa fa-github" aria-hidden="true"></i> {{person.contact.github}}</a></span>
            </div>
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
        <div id="education-container">
            <h2 id="education-title">{{ lang.education }}</h2>
            <div class="spacer"></div>
            <div class="education" v-for="education in person.education" :key="education.degree">
                <h2 class="education-description">{{education.description}}</h2>
                <p><span class="degree">{{education.degree}} | </span><span class="education-timeperiod">{{education.timeperiod}}</span></p>
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
    </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { getVueOptions } from './options';

const name = 'regular'; // TODO change name
export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>

