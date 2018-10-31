<template>
  <div id="cv" class="instaFade">
	<div class="mainDetails">
		<div id="headshot" class="quickFade">
			<div class="row">
        <div class="image center">
          <div class="img"></div>
        </div>
      </div>
		</div>
		
		<div id="name">
			<h1 class="quickFade delayTwo">{{person.name.first}} {{person.name.middle}} {{person.name.last}}</h1>
			<h2 class="quickFade delayThree">{{person.position}}</h2>
		</div>
		
		<div id="contactDetails" class="quickFade delayFour">
      <h3>{{lang.contact}} </h3>
			<ul>
				<li>Email: <a :href="'mailto:'+person.contact.email" target="_blank">{{person.contact.email}}</a></li>
				<li>Website: <a :href="person.contact.website">{{person.contact.website}}</a></li>
        <li>Address: {{person.contact.street}} {{person.contact.city}}</li>
				<li>Cellphone: <a :href="'tel:'+person.contact.phone">{{person.contact.phone}}</a></li>
			</ul>
		</div>
		<div class="clear"></div>
	</div>
	
	<div id="mainArea" class="quickFade delayFive">
		<section>
			<article>
				<div class="sectionTitle">
					<h1>Personal Profile</h1>
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
			<div class="sectionTitle">
				<h1>{{ lang.skills }}</h1>
			</div>
			
			<div class="sectionContent" v-for="(skill, index) in person.skills"
              :key="index"
              :href="skill.url">
				<ul class="keySkills">
					<li>{{ skill.name }}</li>
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

h3{
  margin-bottom:0;
}

span {
  display:inline-block;
}

.image {
    width:150px;
    height:150px;
    margin-top:50px;
    margin-bottom:50px;
    .img {
      width:100%;
      height:100%;
      background-image:url('../../resume/id.jpg');
      background-repeat:none;
      background-position:center;
      background-size:cover;
    }
  }
// .contact {
//     width:100%;
//     table {
//       text-align:;
//       float:center;
//       margin-top:5px;
//       color:green;
//       font-size:20px;
//       i {
//         padding:2px;
//         color:#616161;
//       }
//       tr td:nth-child(2) {
//         vertical-align:top;
//     }
//   }
// }


#grad1 {
    height: 10px;
    background-color: red; /* For browsers that do not support gradients */
    background-image: linear-gradient(green, green); /* Standard syntax (must be last) */
}

html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video {
border:100;
font:inherit;
font-size:94%;
margin:0;
padding:0;
vertical-align:baseline;
}

article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
display:block;
}

.image {
    width:100px;
    height:100px;
    margin-top:50px;
    margin-bottom:50px;
    .img {
      width:100%;
      height:100%;
      border-radius:50%;
      background-image:url('../../resume/id.jpg');
      background-repeat:none;
      background-position:center;
      background-size:cover;
    }
  }

html, body {background: #181818; font-family: 'Lato', helvetica, arial, sans-serif; font-size: 16px; color: #222;}

.clear {clear: both;}

p {
	font-size: 1em;
	line-height: 1.4em;
	margin-bottom: 20px;
	color: #444;
}

#cv {
	position: relative;
  font-family:'Roboto' !important;
  font-size: 0.9em;
}

.mainDetails {
	padding: 25px 35px;
	border-bottom: 2px solid #cf8a05;
	background: #ededed;
}

#name h1 {
	font-size: 2.5em;
	font-weight: 700;
	font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
	margin-bottom: -6px;
}

#name h2 {
	font-size: 2em;
	margin-left: 2px;
	font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
}

#mainArea {
	padding: 0 40px;
}

#headshot {
	width: 12.5%;
	float: left;
	margin-right: 30px;
}

#headshot img {
	width: 100%;
	height: auto;
	-webkit-border-radius: 50px;
	border-radius: 50px;
}

#name {
	float: left;
}

#contactDetails {
	float: right;
}

#contactDetails ul {
	list-style-type: none;
	font-size: 0.9em;
	margin-top: 2px;
}

#contactDetails ul li {
	margin-bottom: 3px;
	color: #444;
}

#contactDetails ul li a, a[href^=tel] {
	color: #444; 
	text-decoration: none;
	-webkit-transition: all .3s ease-in;
	-moz-transition: all .3s ease-in;
	-o-transition: all .3s ease-in;
	-ms-transition: all .3s ease-in;
	transition: all .3s ease-in;
}

#contactDetails ul li a:hover { 
	color: #cf8a05;
}


section {
	border-top: 1px solid #dedede;
	padding: 20px 0 0;
}

section:first-child {
	border-top: 0;
}

section:last-child {
	padding: 20px 0 10px;
}

.sectionTitle {
	float: left;
	width: 25%;
}





.sectionContent {
	float: right;
	width: 72.5%;
}

.sectionTitle h1 {
	font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
	font-style: italic;
	font-size: 1.5em;
	color: #cf8a05;
}

.sectionContent h2 {
	font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
	font-size: 1.5em;
	margin-bottom: -2px;
}

.subDetails {
	font-size: 0.8em;
	font-style: italic;
	margin-bottom: 3px;
}

.keySkills {
	list-style-type: none;
	-moz-column-count:3;
	-webkit-column-count:3;
	column-count:3;
	margin-bottom: 20px;
	font-size: 1em;
	color: #444;
}

.keySkills ul li {
	margin-bottom: 3px;
}

@media all and (min-width: 602px) and (max-width: 800px) {
	#headshot {
		display: none;
	}
	
	.keySkills {
	-moz-column-count:2;
	-webkit-column-count:2;
	column-count:2;
	}
}

@media all and (max-width: 601px) {
	#cv {
		width: 95%;
		margin: 10px auto;
		min-width: 280px;
	}
	
	#headshot {
		display: none;
	}
	
	#name, #contactDetails {
		float: none;
		width: 100%;
		text-align: center;
	}
	
	.sectionTitle, .sectionContent {
		float: none;
		width: 100%;
	}
	
	.sectionTitle {
		margin-left: -2px;
		font-size: 1.25em;
	}
	
	.keySkills {
		-moz-column-count:2;
		-webkit-column-count:2;
		column-count:2;
	}
}

@media all and (max-width: 480px) {
	.mainDetails {
		padding: 15px 15px;
	}
	
	section {
		padding: 15px 0 0;
	}
	
	#mainArea {
		padding: 0 25px;
	}

	
	.keySkills {
	-moz-column-count:1;
	-webkit-column-count:1;
	column-count:1;
	}
	
	#name h1 {
		line-height: .8em;
		margin-bottom: 4px;
	}
}

@media print {
    #cv {
        width: 100%;
    }
}

@-webkit-keyframes reset {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 0;
	}
}

@-webkit-keyframes fade-in {
	0% {
		opacity: 0;
	}
	40% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@-moz-keyframes reset {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 0;
	}
}

@-moz-keyframes fade-in {
	0% {
		opacity: 0;
	}
	40% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes reset {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 0;
	}
}

@keyframes fade-in {
	0% {
		opacity: 0;
	}
	40% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.instaFade {
    -webkit-animation-name: reset, fade-in;
    -webkit-animation-duration: 0.5s;
    -webkit-animation-timing-function: ease-in;
    position: relative;
    font-family:'Roboto' !important;
    font-size: 0.9em;
	
	-moz-animation-name: reset, fade-in;
    -moz-animation-duration: 1.5s;
    -moz-animation-timing-function: ease-in;
	
	animation-name: reset, fade-in;
    animation-duration: 1.5s;
    animation-timing-function: ease-in;
}

.quickFade {
    -webkit-animation-name: reset, fade-in;
    -webkit-animation-duration: 2.5s;
    -webkit-animation-timing-function: ease-in;
	
	-moz-animation-name: reset, fade-in;
    -moz-animation-duration: 2.5s;
    -moz-animation-timing-function: ease-in;
	
	animation-name: reset, fade-in;
    animation-duration: 2.5s;
    animation-timing-function: ease-in;
}
 
.delayOne {
	-webkit-animation-delay: 0, .5s;
	-moz-animation-delay: 0, .5s;
	animation-delay: 0, .5s;
}

.delayTwo {
	-webkit-animation-delay: 0, 1s;
	-moz-animation-delay: 0, 1s;
	animation-delay: 0, 1s;
}

.delayThree {
	-webkit-animation-delay: 0, 1.5s;
	-moz-animation-delay: 0, 1.5s;
	animation-delay: 0, 1.5s;
}

.delayFour {
	-webkit-animation-delay: 0, 2s;
	-moz-animation-delay: 0, 2s;
	animation-delay: 0, 2s;
}

.delayFive {
	-webkit-animation-delay: 0, 2.5s;
	-moz-animation-delay: 0, 2.5s;
	animation-delay: 0, 2.5s;
}


</style>

