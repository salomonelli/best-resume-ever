<template>
  <div id="resume3" class="resume">
	<div class="mainDetails">
		<div id="headshot" class="quickFade">
			<div class="row">
        <div class="image">
				<div class="img"></div>
        </div>
      </div>
		</div>
		<div id="name">
			<h1 class="quickFade delayTwo">{{person.name.first}} {{person.name.middle}} {{person.name.last}}</h1>
			<h2 class="quickFade delayThree">{{person.position}}</h2>
			<div id="contactDetails" class="quickFade delayFour">
      		<h3>{{lang.contact}}</h3>
			<ul>
				<li>Email: <a :href="'mailto:'+person.contact.email" target="_blank">{{person.contact.email}}</a></li>
				<li>Website: <a :href="person.contact.website">{{person.contact.website}}</a></li>
        		<li>Address: {{person.contact.street}} {{person.contact.city}}</li>
				<li>Cellphone: <a :href="'tel:'+person.contact.phone">{{person.contact.phone}}</a></li>
			</ul>
			</div>
		</div>
		<div class="clear"></div>
	</div>
	<div id="mainArea" class="mainArea">
		<section>
			<article>
				<div class="sectionTitle">
				<h1> {{ lang.about }}</h1>
				</div>
				<div class="sectionContent">
					<p>{{person.about}}</p>
				</div>
			</article>
			<div class="clear"></div>
		</section>

		<section>
			<div class="sectionTitle">
				<h1>{{lang.experience}}</h1>
			</div>
			<div class="sectionContent">
				<div v-for="(experience, index) in person.experience" :key="index"
              class="section-content__item"
              :href="experience.website">
					<h2>{{ experience.company }}</h2>
          <span>{{experience.location}}</span>
					<p class="subDetails">{{ experience.timeperiod }}</p>
					<p>{{ experience.description }}</p>
				</div>
			</div>
			<div class="clear"></div>
		</section>


		<section>
			<div id="sectionTitle" v-if="person.skills != []">
            <h2 id="skills-title">{{ lang.skills }}</h2>
            <div class="spacer"></div>
            <p id="keySkills">{{person.knowledge}}</p>
            <ul id="skill-list">
                <li class="skill" v-for="skill in person.skills" :key="skill.name">
                  <span class="list-item-black">
                    {{skill.name}}
                  </span>
                </li>
            </ul>
        </div>
			<div class="clear"></div>
		</section>



		<section>
			<div class="sectionTitle">
				<h1>{{ lang.education }}</h1>
			</div>
			<div class="sectionContent">
				<article  v-for="(education, index) in person.education"
              class="section-content__item"
              :key="index"
              :href="education.website">
					<h2>{{ education.school }}</h2>
					<p class="subDetails">{{ education.degree }}</p>
          <p class="subDetails"> {{ education.timeperiod }}</p>
					<p>{{ education.description }}</p>
				</article>
			</div>
			<div class="clear"></div>
		</section>
		</div>
	</div>
</template>




<script>
import Vue from 'vue';
import { getVueOptions } from './options';

const name = 'clear'; // TODO change name
export default Vue.component(name, getVueOptions(name));
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@accent-color: #34495E;
@banner-color: #ffd381;
@banner-height: 120px;
@picture-size: 120px;
@picture-offset: 35px;
@base-padding: 30px;
@left-column-width: 240px;

.resume {
  position: relative;
  font-family:'Roboto' !important;
  font-size: 0.9em;
  width: 90%;
	max-width: 800px;
	background: #f3f3f3;
	margin: 0px auto;
	position:absolute;
    left:0px;
    top:0px;
}

.img{
	height:10%;
  width:120px;
  float:left;
  position:absolute;
  top:20px;
  right:50px;
  background:url('../../resume/id.jpg');
  background-position:relative;
  background-size:cover;
}
#name {
	border-width:600px 0 0 1500px;
  height: @banner-height;
  padding: @base-padding;
  top:20px;
  background-color: @banner-color;
}
#contactDetails{
	color: #000000;
	position: absolute;
  top: 20px;
  right: 200px;
  height: @picture-size;
  width: 300px;
}

.clear {
	clear: both;
}

#mainArea{
  padding: @base-padding;
  top:20px;
}

#skill-list {
    column-count: 3;
    list-style-position: inside;
    ul li {
        font-size:14px;
    }
}
.list-item-black {
    color:black;
}

.sectionTitle{
	font-size:13px;
    text-transform:uppercase;
}
.section-content__item{
	font-size:10px;
}
.subDetails{
	font-size:12px;
}

</style>

