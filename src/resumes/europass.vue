<template>
  <div class="resume" id="resume1">
    <div class="row">
      <div class="left-column">
        <img src="../assets/europass-logo.png" class="europass-logo">
      </div>
      <div class="right-column" style="margin-top: 57px;">
        Curriculum vitae
      </div>
    </div>
    <!-- PERSONAL INFORMATION -->
    <div class="row section">
      <div class="left-column">
        <div class="section-title">
          <h2>{{lang.personalInformation}}</h2>
        </div>
      </div>
      <div class="right-column">
        <div class="section-content">
          <h1>{{person.name.first}} {{person.name.middle}} {{person.name.last}}</h1>        
        </div>
      </div>
    </div>
    <div class="row section">
      <div class="left-column">
        <img class="avatar" src="../../resume/id.jpg" alt="">
      </div>
      <div class="right-column">
        <div class="section-content">          
          <div>
            <div class="icon">
              <i class="fa fa-map-marker"></i>
              <span>{{person.contact.street}} {{person.contact.city}}</span>
            </div>            
          </div>
          <div>
            <div class="icon">
              <i class="fa fa-phone"></i>
              <span>{{person.contact.phone}}</span>
            </div>            
          </div>
          <div>
            <div class="icon">
              <i class="fa fa-envelope"></i>
              <span>{{person.contact.email}}</span>
            </div>            
          </div>
          <div>
            <div class="icon">
              <i class="fa fa-globe"></i>
              <span>{{person.contact.website}}</span>
            </div>            
          </div>
          <div>
            <div class="icon">
              <i class="fa fa-github"></i>
              <span>{{person.contact.github}}</span>
            </div>            
          </div>
        </div>
      </div>
    </div>
    <!-- END PERSONAL INFORMATION -->
    <!-- EXPERIENCE -->
    <div class="row section">
      <div class="left-column">
        <div class="section-title">
          <h2>{{ lang.experience }}</h2>
        </div>
      </div>
      <div class="right-column">
        <hr>
      </div>
    </div>
    <div class="row section" v-for="experience in person.experience" :key="experience.company">
      <div class="left-column">
        <div class="section-subtitle">
          <h3>{{experience.timeperiod}}</h3>
        </div>
      </div>
      <div class="right-column">
        <div class="section-content">
          <h2>{{experience.position}} </h2>
          <h3>{{experience.company}} </h3>
          <div>{{experience.description}} </div>
        </div>
      </div>
    </div>
    <!-- END EXPERIENCE -->
    <!-- EDUCATION -->
    <div class="row section">
      <div class="left-column">
        <div class="section-title">
          <h2>{{ lang.education }}</h2>
        </div>
      </div>
      <div class="right-column">
        <hr>
      </div>
    </div>
    <div class="row section" v-for="education in person.education" :key="education.degree">
      <div class="left-column">
        <div class="section-subtitle">
          <h3>{{education.timeperiod}}</h3>
        </div>
      </div>
      <div class="right-column">
        <div class="section-content">
          <h2>{{education.degree}}</h2>
          <h3>{{education.website}}</h3>
          <div>{{education.description}}</div>
        </div>
      </div>
    </div>
    <!-- END EDUCATION -->
    <!-- SKILLS -->
    <div class="row section">
      <div class="left-column">
        <div class="section-title">
          <h2>{{ lang.skills }}</h2>
        </div>
      </div>
      <div class="right-column">
        <hr>  
      </div>
    </div>
    <div class="row section" v-for="skill in person.skills" :key="skill.name">
      <div class="left-column">
        <div class="section-subtitle">
          <h3>{{skill.name}}</h3>
        </div>
      </div>
      <div class="right-column">
        <div class="section-content">
          <div class="skill-bar">
            <div :style="'width: '+skill.level+'%'" class="level"> </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row section">
      <div class="left-column">
      </div>
      <div class="right-column">
        <div class="section-content">
          <h2>{{person.knowledge}}</h2>
        </div>        
      </div>
    </div>
    <!-- END SKILLS -->
  </div>
</template>

<script>
import Vue from 'vue';
import { getVueOptions } from './options';

const name = 'europass';
export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
#resume1 {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
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
    clear: both;
    width: 100%;
  }

  .left-column {
    width: 32%;
    display: inline-block;
    text-align: right;
    padding-left: 4%;
    padding-right: 2%;
    vertical-align: top;

    img.avatar {
      width: 100px;
    }

    h2 {
      font-size: 22px;
      text-transform: uppercase;
    }

    h3 {
      font-size: 18px;
    }
  }

  .right-column {
    display: inline-block;
    width: 55%;
    text-align: left;
    padding-right: 4%;
    padding-left: 2%;
    vertical-align: top;
  }

  .section {
    margin-top: 15px;

    hr {
      margin-top: 20px;
    }

    .section-content {
      font-size: 16px;
      i {
        vertical-align: top;
        margin-top: 3px;
        width: 20px;
        margin-right: 5px;
        text-align: center;
        color: rgb(0, 140, 255);
      }
      h1 {
        font-size: 24px;
        color: rgb(0, 140, 255);
        margin-top: 0;
        margin-bottom: 0;
      }
      h2 {
        font-size: 18px;
        color: rgb(0, 140, 255);
        margin-top: 0;
        margin-bottom: 0;
      }      
      h3 {
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    .section-title {
      h2 {
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    .section-subtitle {
      h3 {
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }

  .europass-logo {
    width: 200px;
    margin: 30px 50px 10px;
  }

  .skill-bar {
    background: #e0e0e0;
    overflow: hidden;
    height: 8px;
    border-radius: 3px;
    margin-top: 12px;
    position: relative;

    .level {
      background: #757575;
      height: 100%;
    }
  }
}
</style>
