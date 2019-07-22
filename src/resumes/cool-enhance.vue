<template>
<div class="resume" id="template">
    <div class="content">
      <div class="content__left">
        <!-- Reach Me At -->
        <div class="section">
          <div class="section-headline">
            {{ lang.reach }}
          </div>

          <div class="section-content section-content--plain">
            <div class="section-link">
              <i class="section-link__icon material-icons">phone</i>{{ person.contact.phone }}
            </div>

            <div class="section-link">
              <i class="section-link__icon material-icons">business</i>{{ person.contact.street }}
            </div>

            <a
              class="section-link"
              :href="contactLinks.email">
              <i class="section-link__icon material-icons">mail</i>{{ person.contact.email }}
            </a>

            

            <a
              v-if="person.contact.website"
              class="section-link"
              :href="person.contact.website">
              <i class="section-link__icon fa fa-globe"></i>{{ person.contact.website }}
            </a>

            <a
              v-if="person.contact.linkedin"
              class="section-link"
              :href="contactLinks.linkedin">
              <i class="section-link__icon fa fa-linkedin"></i>{{ person.contact.linkedin }}
            </a>

            <a
              v-if="person.contact.github"
              class="section-link"
              :href="contactLinks.github">
              <i class="section-link__icon fa fa-github"></i>{{ person.contact.github }}
            </a>

            <a
              v-if="person.contact.medium"
              class="section-link"
              :href="contactLinks.medium">
              <i class="section-link__icon fa fa-medium"></i>{{ person.contact.medium }}
            </a>
          </div>
        </div>
        <!-- Education -->
        <div class="section">
          <div class="section-headline">
            {{ lang.education }}
          </div>
          <div class="section-content--plain">
            <a
              v-for="(education, index) in person.education"
              class="section-content__item"
              :key="index"
              >
              <span class="section-content__header">{{ education.degree }}</span>
              <span class="section-content__text"> {{ education.timeperiod }} </span>
              <span class="section-content__text--light"> {{ education.description }} </span>
            </a>
          </div>
        </div>
        <!-- Technical Skills -->
        <div class="item last">
      <div class="section-headline">
        {{ lang.technicalSkills }}
      </div>
      <div class="skills">
      <div class="skill-block" v-for="skill in person.technicalSkills" :key="skill.name">
        <span class="skill">{{skill.name}}</span>
        <div class="skill-bar">
          <div :style="'width: '+skill.level+'%'" class="level"> </div>
        </div>
      </div>
    </div>
      
    </div>
        <!-- Additional Skills -->
        <div class="section-content section-content--plain">
          <span class="title-color">Knowledge: </span>{{ person.knowledge }}
          <br/>
          <span class="title-color">Miscellaneous: </span>{{ person.miscellaneous }}
        </div>
        <!-- Soft Skills -->
        <div
          class="section">
          <div class="section-headline">
            {{ lang.softSkills }}
          </div>

          <div class="section-content-grid">
            <a
              v-for="(softSkill, index) in person.softSkills"
              :key="index"
              class="grid-item">
              <span class="squarred-grid-item">
                {{ softSkill.name }}
              </span>
            </a>
          </div>
        </div>
      </div>

      <div class="content__right">
        <div class="name">
            <div class="name__fullname">{{ person.name.first }} {{ person.name.middle }} {{ person.name.last }}</div>
        </div>
        <div class="section">
          <div class="section-headline">
            <i class="section-headline__icon material-icons">account_circle</i>{{ lang.about }}
          </div>

          <div class="section-content-grid">
            {{ person.about }}
          </div>
        </div>
        <div class="section">
          <div class="section-headline">
            <i class="section-headline__icon material-icons">work</i>{{ lang.experience }}
          </div>

          <div class="section-content-grid">
            <a
              v-for="(experience, index) in person.experience"
              :key="index"
              class="section-content__item"
              :href="experience.website">

              <span class="section-content__header">{{ experience.position }}</span>
              <span class="section-content__subheader">
                {{ experience.company }}
                <span class="section-content__plain">{{ experience.location }}</span>
              </span>

              <div class="section-content__text">{{ experience.timeperiod }}</div>
              <ul>
                <li v-for="(responsibility, index) in experience.responsibility"
                :key="index"
                class="section-content__text--light">
                  {{ responsibility }}
                </li>
              </ul>
            </a>
          </div>
        </div>
    

        <div
          v-if="person.projects"
          class="section">
          <div class="section-headline">
            <i class="section-headline__icon material-icons">code</i>{{ lang.projects }}
          </div>

          <div class="section-content-grid">
            <a v-for="(project, index) in person.projects" :key="index"
              class="section-content__item"
              :href="project.url">
              <span class="section-content__header"> {{ project.name }} ( {{ project.platform }} ) </span>
              <span class="section-content__text">{{ project.url }}</span>
              <span class="section-content__text"> {{ project.description }} </span>
            </a>
          </div>
        </div>

        <div
          v-if="person.volunteer"
          class="section">
          <div class="section-headline">
            <i class="section-headline__icon material-icons">group</i>{{lang.volunteer}}
          </div>

          <div class="section-content-grid">
            <a
              v-for="(volunteer, index) in person.volunteer"
              class="section-content__item-grid"
              :key="index"
              :href="volunteer.url">
              <span class="section-content__header"> {{ volunteer.name }} </span>
              <span class="section-content__subheader">{{ volunteer.organization }}</span>
              <span class="section-content__text"> {{ volunteer.place }} </span>
              <span class="section-content__text"> {{ volunteer.timeperiod }} </span>
              <span class="section-content__text"> {{ volunteer.description }} </span>
              <span class="section-content__text--light" style="word-break: break-all;">
                {{ volunteer.url }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { getVueOptions } from './options';

const name = 'cool-enhance'; // TODO change name
export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@accent-color: #34495E;
@name-height: 18px;
@base-padding: 18px;
@left-column-width: 240px;


a {
  color: inherit;
  cursor: pointer;
  text-decoration-line: none;

  &:visited {
    color: inherit;
  }
}

.resume {
  position: relative;
  font-family:'Roboto' !important;
  font-size: 0.9em;
}

.name {
  width: calc(100% - @base-padding * 2);
  height: @name-height;
  padding: @base-padding - 8;
  
  &__fullname {
    font-size: 32px;
  }

  &__position {
    font-size: 16px;
  }

  &__location {
    font-size: 12px;
  }
}

.content {
  display: flex;
  width: 100%;
  height: 100%;

  &__left,
  &__right {
    height: 100%;
    padding: @base-padding;
  }

  &__left {
    width: @left-column-width;
    color: rgba(255, 255, 255, 0.59);
    background-color: @accent-color;

    .section-headline {
      color: white;
    }
  }

  &__right {
    flex: 1;
  }
}

.section {
  margin: 20px 0;
}

.section-link,
.section-headline {
  display: flex !important;
  align-items: center;
  color: @accent-color;
  display: inline-block;
  font-size: 1.2em;
  margin: 8px 0;

  &__icon {
    margin-right: 8px;
    font-size: 1.4em;
  }
}

.section-link {
  font-size: 1.1em;
  color: rgba(255, 255, 255, 0.59) !important;

  &__icon {
    color: white;
  }
}

.section-content {
  margin-top: 5px;
  padding-left: 32px;
  font-size: 14px;

  &__item {
    display: block;
    margin-bottom: 5px;
  }

  &__header {
    display: block;
    font-size: 1.1em;
    font-weight: 500;
  }

  &__subheader {
    display: block;
    font-weight: 400;
  }

  &__plain,
  &__text {
    display: block;
    font-size: 12px;

    &--light {
      font-size: 12px;
    }
  }

  &__plain {
    display: inline;
    font-weight: 300;
  }

  &__item-grid {
    flex: 1 1 0;
    margin-bottom: 5px;
    padding-right: 5px;
  }

  &--plain {
    padding: 0;
  }
}

.section-content-grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  margin-bottom: 5px;
}

.grid-item {
  padding-right: 5px;
}

.squarred-grid-item {
  display: block;
  border: 1px solid white;
  color: white;
  margin-top: 5px;
  padding: 5px;
}
.title-color{
  color: white;
}
.skills {
    margin-top:20px;
    margin-bottom:10px;
    direction: ltr !important;
    .skill-block {
      padding-bottom:10px;
      display:inline-block;
      .skill {
        width:100px;
        color:#e0e0e0;
        float:left;
        text-align: left;
      }
      .skill-bar {
        float:right;
        background:#616161;
        overflow:hidden;
        height:8px;
        border-radius:3px;
        margin-top:6.5px;
        position:relative;
        width:249px;
        .level {
          background:#e0e0e0;
          height:100%;
        }
      }
    }
}
</style>
