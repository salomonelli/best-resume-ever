<template>
<div class="resume leftCol m_box">
  <div class="shadow"></div>
  <div class="heading" id="myselfpic">
  </div>
  <div class="section-headline">
    Contact
  </div>
  <div class="item">
    <div class="icon">
      <i class="material-icons">account_circle</i>
    </div>
    <div class="text">
      <ul>
        <li> Born {{person.birth.year}} in {{person.birth.location}}</li>
      </ul>
    </div>
  </div>

  <div class="item">
    <div class="icon">
      <i class="material-icons">location_city</i>
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
        <i class="material-icons">phone</i>
      </div>
      <div class="text">
        {{person.contact.phone}}
      </div>
    </div>
  </a>

  <a :href="'mailto:'+person.contact.email">
    <div class="item">
      <div class="icon">
        <i class="material-icons">email</i>
      </div>
      <div class="text">
        {{person.contact.email}}
      </div>
    </div>
  </a>

  <a :href="'https://github.com/'+person.contact.github" target="_blank">
    <div class="item">
      <div class="icon">
        <i class="fa fa-github"></i>
      </div>
      <div class="text">
        <span>@{{person.contact.github}}</span>
        <span>github.com/{{person.contact.github}}</span>
      </div>
    </div>
  </a>

  <a :href="person.contact.website" target="_blank">
    <div class="item">
      <div class="icon">
        <i class="material-icons">language</i>
      </div>
      <div class="text">
        <span>{{person.contact.website}}m</span>
      </div>
    </div>
  </a>
</div>
<div class="rightCol">
  <div class="title">
    <h2>{{person.name.first}}  {{person.name.last}}</h2>
    <div>{{person.position}}</div>
  </div>

  <div class="section-headline">Working experience</div>


  {{#person.experience}}
  <div class="block">
    <div class="block-helper"></div>
    <div class="headline">{{position}} - {{company}}</h3>
      <div class="subheadline">{{timeperiod}}</div>
      <p class="info">
        {{description}}
      </p>
    </div>
  </div>
  {{/person.experience}}

  <div class="section-headline">Education</div>

  {{#person.education}}
  <div class="block">
    <div class="block-helper"></div>
    <div class="headline">{{degree}}</div>
    <p class="info">
      {{timeperiod}}, {{description}}
    </p>
  </div>
  {{/person.education}}
</div>
<div style="clear:both;"></div>
</template>

<script>
import {
  PERSON
} from '../person';
export default {
  name: 'hello',
  data() {
    return {
      person: PERSON
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resume {
  font-family: 'Roboto' !important;
}

a {
  cursor: pointer;
}

.description-personal {
  margin-let: 20px;
  margin-top: 20px;
  padding-right: 40px;
  text-align: justify;
  font-family: Roboto;
}

.title {
  right: 25px;
  padding-left: 20px;
  padding-top: 20px;
  bottom: 25px;
}

.title h2 {
  text-transform: uppercase;
  display: block;
  font-size: 1.17em;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
  color: white;
  padding-top: 0;
  margin-top: 0;
  letter-spacing: 10px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.7);
}

.title div {
  margin-top: -5px;
  margin: 0;
  padding: 0;
  line-height: 15pt;
  font-weight: 300;
  letter-spacing: 2px;
  color: white;
  display: block;
  font-size: 0.67em;
  -webkit-margin-before: 2.33em;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
  padding-top: 0;
  margin-top: 0;
  color: #16151c;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 10pt;
  opacity: 0.8;
  color: rgba(63, 61, 60, 0.71);
}

.section-headline {
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 10pt;
  opacity: 0.8;
  margin-left: 20px;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #3f3d3c;
}

{
  font-family: Roboto, sans-serif !important;
  background-color: #ccc;
  font-size: 15px;
  line-height: 1.5;
  color: #767270;
  letter-spacing: 0.072em;
  font-weight: normal;
}

.c {
  clear: both;
}

li,
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

li {
  padding-top: 9px;
}

p {
  margin-top: 0;
  margin-bottom: 25px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 10pt;
  line-height: 17pt;
}

.m_box {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.fa,
.material-icons {
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 26px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
  margin: 0;
}

h2 {
  font-size: 22pt;
  line-height: 37pt;
  margin: 0;
  font-weight: 500;
}

h4 {
  font-size: 12pt;
  line-height: 20pt;
  opacity: 1;
}

.rightCol {
  width: 63.5%;
  height: 100%;
  float: right;
  display: flex;
  flex-direction: column;
}

.rightCol .block {
  width: 90%;
  position: relative;
  background-color: #fff;
  padding: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.rightCol .block .headline {
  font-weight: 300;
  display: block;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.870588);
}

.rightCol .block .subheadline {
  color: rgba(0, 0, 0, 0.541176);
  display: block;
  font-size: 14px;
  font-weight: 300;
}

.rightCol .block .info {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.870588);
  margin-bottom: 0;
  padding-top: 20px;
}

.rightCol .block .icon {
  width: 16%;
  float: left;
  margin-left: 0;
}

.rightCol .block .icon .fa,
.rightCol .block .icon .material-icons {
  text-align: center;
  display: block;
  font-size: 30pt;
}

.rightCol .block .content {
  width: 80%;
  position: absolute;
  height: 96%;
  left: 17%;
  padding-right: 3%;
  text-align: left;
  display: flex;
  flex-direction: column;
}

.rightCol .block .content .item {
  border-bottom: 1px solid #bdbdbd;
  flex: 1;
  width: 97%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  padding-top: 0;
}

.rightCol .block .content .item span {
  color: #d8ab94;
  margin-top: 0;
  font-size: 10pt;
  line-height: 16pt;
}

.rightCol .block .content .item p {
  margin-top: 5px;
}

.rightCol .block .content .item:last-of-type {
  border-bottom-style: none;
}

.rightCol .block .content .item:last-of-type {
  border-bottom-style: none;
}

.leftCol {
  width: 35%;
  height: 100%;
  float: left;
  padding: 0;
  text-align: left;
  color: #ffffff;
  background-color: #16151c;
  overflow: hidden;
  display: block;
  color: rgba(255, 255, 255, 0.59);
}

.leftCol .section-headline {
  color: rgba(255, 255, 255, 0.54);
}

.leftCol a {
  color: rgba(255, 255, 255, 0.59);
  text-decoration: none;
}

.leftCol .heading {
  background-color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  height: 277px;
}

.leftCol .item {
  width: 100%;
  margin-top: 13px;
  float: left;
}

.leftCol .item .icon {
  width: 20%;
  float: left;
}

.leftCol .item .fa,
.leftCol .item .material-icons {
  display: inherit;
  text-align: center;
}

.leftCol .item .text {
  float: right;
  width: 69%;
  padding-right: 10%;
  padding-top: 0;
  display: block;
  font-size: 15px;
  font-weight: 300;
}

.leftCol .item .text li {
  padding-top: 0;
  display: block;
  font-size: 15px;
  font-weight: 300;
}

.leftCol .item span {
  font-weight: 300;
}

.leftCol .item .skill {
  clear: both;
  width: 97%;
  padding-top: 4px;
}

.leftCol .item .skill .left {
  float: left;
  width: 10%;
  padding-top: 3px;
}

.leftCol .item .skill .left i:nth-child(2) {
  float: left;
  padding-top: 4px;
}

.leftCol .item .skill .right {
  float: right;
  width: 93%;
}

.leftCol .item .skill .right .progress {
  float: left;
  position: relative;
  height: 2px;
  display: block;
  width: 95%;
  background-color: rgba(255, 255, 255, 0.19);
  border-radius: 2px;
  margin: 0.5rem 0 1rem;
  overflow: visible;
  margin-bottom: 10px;
}

.leftCol .item .skill .right .progress .determinate {
  background-color: #78909C;
  position: absolute;
  top: 0;
  bottom: 0;
}

.leftCol .item .skill .right .progress .determinate .fa,
.leftCol .item .skill .right .progress .determinate .material-icons {
  font-size: 13px;
  position: absolute;
  top: -4px;
  right: -2px;
  margin-left: 50%;
  color: white;
}

.leftCol .item.last .text {
  border-bottom-style: none;
  padding-bottom: 0;
}

#myselfpic {
  background-image: url('../assets/person.jpg');
  color: black;
}

#githubIcon {
  width: 25px;
  padding-left: 17px;
}
</style>
