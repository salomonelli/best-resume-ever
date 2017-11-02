webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getVueOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_yaml__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_yaml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resume_data_yml__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms__ = __webpack_require__(58);




function getVueOptions(name) {
  var opt = {
    name: name,
    data: function data() {
      return {
        person: __WEBPACK_IMPORTED_MODULE_0_js_yaml___default.a.load(__WEBPACK_IMPORTED_MODULE_1__resume_data_yml__["a" /* PERSON */]),
        terms: __WEBPACK_IMPORTED_MODULE_2__terms__["a" /* terms */]
      };
    },

    computed: {
      lang: function lang() {
        return this.terms[this.person.lang];
      }
    }
  };
  return opt;
}



/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(22);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: {
    App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]
  }
});

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a80551ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(21);
function injectStyle (ssrContext) {
  __webpack_require__(18)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a80551ac_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app'
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_resume__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home__ = __webpack_require__(107);





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'home',
    component: __WEBPACK_IMPORTED_MODULE_3__pages_home__["a" /* default */]
  }, {
    path: '/resume/:resumeid',
    name: 'resume',
    component: __WEBPACK_IMPORTED_MODULE_2__pages_resume__["a" /* default */]
  }]
}));

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_resume_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a4e9d902_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_resume_vue__ = __webpack_require__(106);
function injectStyle (ssrContext) {
  __webpack_require__(25)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a4e9d902"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_resume_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a4e9d902_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_resume_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumes_resumes__ = __webpack_require__(27);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('resume', {
  name: 'app'
}));

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_dark_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_right_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oblique_vue__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__side_bar_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__purple_vue__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__side_bar_rtl_vue__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__left_right_rtl_vue__ = __webpack_require__(102);









/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_material_dark_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_31798ddc_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_material_dark_vue__ = __webpack_require__(81);
function injectStyle (ssrContext) {
  __webpack_require__(29)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-31798ddc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_material_dark_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_31798ddc_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_material_dark_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);




var name = 'material-dark';

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* #*/ const PERSON = `
name:
  first: John
  middle:
  last: Doe
about: Hi, my name is John Doe. I"m just about the most boring type of person you could
       possibly imagine. I like collecting leaves from the tree in my back yard and documenting
       each time I eat a peanut that is non-uniform. I am not a robot. Please hire me.
position: Software Developer

birth:
  year: 1990
  location: New York

experience:
- company: Company A
  position: Developer
  timeperiod: since January 2016
  description: Programming and watching cute cat videos.

- company: Company B
  position: Frontend Developer
  timeperiod: January 2015 - December 2015
  description: Fulfillment of extremely important tasks.

- company: Company C
  position: Trainee
  timeperiod: March 2014 - December 2014
  description: Making coffee and baking cookies.

education:
- degree: Master of Arts
  timeperiod: March 2012 - December 2013
  description: Major in Hacking and Computer Penetration, University A, New York, USA.

- degree: Bachelor of Science
  timeperiod: March 2009 - December 2011
  description: Major in Engineering, University B, Los Angeles, USA.

# skill level goes 0 to 100
skills:
- name: HTML5
  level: 99
- name: CSS3
  level: 95
- name: JavaScript
  level: 97
- name: Node.js
  level: 93
- name: Angular 2
  level: 60
- name: TypeScript
  level: 80
- name: ES.Next
  level: 70
- name: Docker
  level: 99
knowledge: Also proficient in Adobe Photoshop and Illustrator, grew up bilingual
  (English and Klingon).

contact:
  email: john.doe@email.com
  phone: 0123 456789
  street: 1234 Broadway
  city: New York
  website: johndoe.com
  github: johnyD
# en, de, fr, pt, ca, cn, it, es, th, pt-br, ru, sv, id, hu, pl, ja, nl, he, zh-tw, lt, ko
lang: en
`
/* harmony export (immutable) */ __webpack_exports__["a"] = PERSON;



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return terms; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang_en__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang_de__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang_fr__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lang_pt__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lang_ca__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lang_cn__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lang_it__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lang_es__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lang_th__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lang_id__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lang_sv__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lang_ru__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lang_pt_br__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lang_hu__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lang_pl__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lang_he__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lang_ja__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lang_zh_tw__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lang_nl__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__lang_lt__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__lang_tr__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__lang_ko__ = __webpack_require__(80);























var terms = {
  en: __WEBPACK_IMPORTED_MODULE_0__lang_en__["a" /* default */], de: __WEBPACK_IMPORTED_MODULE_1__lang_de__["a" /* default */], fr: __WEBPACK_IMPORTED_MODULE_2__lang_fr__["a" /* default */], pt: __WEBPACK_IMPORTED_MODULE_3__lang_pt__["a" /* default */], ca: __WEBPACK_IMPORTED_MODULE_4__lang_ca__["a" /* default */], cn: __WEBPACK_IMPORTED_MODULE_5__lang_cn__["a" /* default */], it: __WEBPACK_IMPORTED_MODULE_6__lang_it__["a" /* default */], es: __WEBPACK_IMPORTED_MODULE_7__lang_es__["a" /* default */], th: __WEBPACK_IMPORTED_MODULE_8__lang_th__["a" /* default */], 'pt-br': __WEBPACK_IMPORTED_MODULE_12__lang_pt_br__["a" /* default */], ru: __WEBPACK_IMPORTED_MODULE_11__lang_ru__["a" /* default */], sv: __WEBPACK_IMPORTED_MODULE_10__lang_sv__["a" /* default */], id: __WEBPACK_IMPORTED_MODULE_9__lang_id__["a" /* default */], hu: __WEBPACK_IMPORTED_MODULE_13__lang_hu__["a" /* default */], pl: __WEBPACK_IMPORTED_MODULE_14__lang_pl__["a" /* default */], ja: __WEBPACK_IMPORTED_MODULE_16__lang_ja__["a" /* default */], nl: __WEBPACK_IMPORTED_MODULE_18__lang_nl__["a" /* default */], he: __WEBPACK_IMPORTED_MODULE_15__lang_he__["a" /* default */], 'zh-tw': __WEBPACK_IMPORTED_MODULE_17__lang_zh_tw__["a" /* default */], lt: __WEBPACK_IMPORTED_MODULE_19__lang_lt__["a" /* default */], tr: __WEBPACK_IMPORTED_MODULE_20__lang_tr__["a" /* default */], ko: __WEBPACK_IMPORTED_MODULE_21__lang_ko__["a" /* default */]
};

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var en = {
  headings: {
    contact: 'Contact',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    about: 'About me'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (en);

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var de = {
  headings: {
    contact: 'Kontakt',
    experience: 'Berufserfahrung',
    education: 'Schulbildung',
    skills: 'Qualifikationen',
    about: 'Über mich'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (de);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var fr = {
  headings: {
    contact: 'Contact',
    experience: 'Expérience professionelle',
    education: 'Formation',
    skills: 'Compétences',
    about: 'À propos de moi'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (fr);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var pt = {
  headings: {
    contact: 'Contactos',
    experience: 'Experiência Profissional',
    education: 'Educação',
    skills: 'Competências',
    about: 'Sobre mim'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (pt);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var ca = {
  headings: {
    contact: 'Contacte',
    experience: 'Experiència',
    education: 'Educació',
    skills: 'Habilitats',
    about: 'Sobre mi'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (ca);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var cn = {
  headings: {
    contact: '联系方式',
    experience: '工作经历',
    education: '教育经历',
    skills: '技能专长',
    about: '自我介绍'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (cn);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var it = {
  headings: {
    contact: 'Contatti',
    experience: 'Esperienza professionale',
    education: 'Formazione',
    skills: 'Competenze',
    about: 'Su di me'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (it);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var es = {
  headings: {
    contact: 'Contacto',
    experience: 'Experiencia',
    education: 'Educación',
    skills: 'Habilidades',
    about: 'Sobre mi'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (es);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var th = {
  headings: {
    contact: 'ข้อมูลติดต่อ',
    experience: 'ประสบการณ์ทำงาน',
    education: 'ประวัติการศึกษา',
    skills: 'ทักษะและความสามารถ',
    about: 'ข้อมูลส่วนตัว'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (th);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var id = {
  headings: {
    contact: "Kontak",
    experience: "Pengalaman",
    education: "Pendidikan",
    skills: "Keterampilan",
    about: "Tentang Saya"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (id);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var sv = {
  headings: {
    contact: 'Kontakt',
    experience: 'Arbetslivserfarenhet',
    education: 'Utbildning',
    skills: 'Kunskaper',
    about: 'Om mig'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (sv);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var ru = {
    headings: {
        contact: "Контакты",
        experience: "Опыт",
        education: "Обучение",
        skills: "Навыки",
        about: "Обо мне"
    }
};

/* harmony default export */ __webpack_exports__["a"] = (ru);

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var ptbr = {
  headings: {
    contact: 'Contato',
    experience: 'Experiência Profissional',
    education: 'Educação',
    skills: 'Competências',
    about: 'Sobre'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (ptbr);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var hu = {
  headings: {
    contact: 'Kapcsolat',
    experience: 'Munkatapasztalat',
    education: 'Tanulmány',
    skills: 'Készségek',
    about: 'Rólam'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (hu);

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var pl = {
  headings: {
    contact: 'Kontakt',
    experience: 'Doświadczenie',
    education: 'Wykształcenie',
    skills: 'Umiejętności',
    about: 'O mnie'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (pl);

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var he = {
  headings: {
    contact: 'יצירת קשר',
    experience: 'ניסיון',
    education: 'השכלה',
    skills: 'כישורים',
    about: 'תמצית'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (he);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var jp = {
  headings: {
    contact: '連絡先',
    experience: '職務経歴',
    education: '学歴',
    skills: 'スキル',
    about: '自己紹介'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (jp);

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var zhtw = {
  headings: {
    contact: '聯絡方式',
    experience: '經歷',
    education: '學歷',
    skills: '技能專長',
    about: '自我介紹'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (zhtw);

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var nl = {
  headings: {
    contact: 'Contact',
    experience: 'Ervaringen',
    education: 'Opleidingen',
    skills: 'Skills',
    about: 'Over mij'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (nl);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lt = {
  headings: {
    contact: 'Kontaktai',
    experience: 'Patirtis',
    education: 'Išsilavinimas',
    skills: 'Įgūdžiai',
    about: 'Apie mane'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (lt);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var tr = {
  headings: {
    contact: 'İletişim',
    experience: 'Deneyim',
    education: 'Eğitim',
    skills: 'Yetenekler',
    about: 'Hakkımda'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (tr);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var ko = {
  headings: {
    contact: "연락처",
    experience: "경력",
    education: "학력",
    skills: "보유스킬",
    about: "자기소개"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (ko);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume"},[_c('div',{staticClass:"leftCol m_box"},[_c('div',{staticClass:"shadow"}),_vm._v(" "),_c('div',{staticClass:"heading",attrs:{"id":"myselfpic"}}),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v("\n      "+_vm._s(_vm.lang.headings.contact)+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"text"},[_c('ul',[_c('li',[_vm._v(" Born "+_vm._s(_vm.person.birth.year)+" in "+_vm._s(_vm.person.birth.location))])])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"text"},[_c('ul',[_c('li',[_vm._v(_vm._s(_vm.person.contact.street))]),_vm._v(" "),_c('li',[_vm._v(_vm._s(_vm.person.contact.city))])])])]),_vm._v(" "),_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_c('div',{staticClass:"item"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("\n          "+_vm._s(_vm.person.contact.phone)+"\n        ")])])]),_vm._v(" "),_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_c('div',{staticClass:"item"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("\n          "+_vm._s(_vm.person.contact.email)+"\n        ")])])]),_vm._v(" "),(_vm.person.contact.github)?_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github,"target":"_blank"}},[_c('div',{staticClass:"item"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"text"},[_c('span',[_vm._v("@"+_vm._s(_vm.person.contact.github))]),_vm._v(" "),_c('span',[_vm._v("github.com/"+_vm._s(_vm.person.contact.github))])])])]):_vm._e(),_vm._v(" "),(_vm.person.contact.website)?_c('a',{attrs:{"href":_vm.person.contact.website,"target":"_blank"}},[_c('div',{staticClass:"item"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"text"},[_c('span',[_vm._v(_vm._s(_vm.person.contact.website))])])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"item last"},[_c('div',{staticClass:"section-headline"},[_vm._v("\n        "+_vm._s(_vm.lang.headings.skills)+"\n      ")]),_vm._v(" "),_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill"},[_c('div',{staticClass:"right"},[_c('span',[_vm._v(_vm._s(skill.name)+" ")]),_vm._v(" "),_c('div',{staticClass:"progress"},[_c('div',{staticClass:"determinate",style:('width: '+skill.level+'%;')},[_c('i',{staticClass:"fa fa-circle"})])])])])})],2)]),_vm._v(" "),_c('div',{staticClass:"rightCol"},[_c('div',{staticClass:"title"},[_c('h2',[_vm._v(_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.headings.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"block"},[_c('div',{staticClass:"block-helper"}),_vm._v(" "),_c('div',{staticClass:"headline"},[_vm._v(_vm._s(experience.position)+" - "+_vm._s(experience.company)),_vm._v(" "),_c('div',{staticClass:"subheadline"},[_vm._v(_vm._s(experience.timeperiod))]),_vm._v(" "),_c('p',{staticClass:"info"},[_vm._v("\n          "+_vm._s(experience.description)+"\n        ")])])])}),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.headings.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"block"},[_c('div',{staticClass:"block-helper"}),_vm._v(" "),_c('div',{staticClass:"headline"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('p',{staticClass:"info"},[_vm._v("\n        "+_vm._s(education.timeperiod)+", "+_vm._s(education.description)+"\n      ")])])})],2),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("account_circle")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("location_city")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("phone")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("email")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-github"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("language")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_left_right_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25653886_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_left_right_vue__ = __webpack_require__(85);
function injectStyle (ssrContext) {
  __webpack_require__(83)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-25653886"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_left_right_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25653886_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_left_right_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 83 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);





var name = 'left-right';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume1"}},[_c('div',{staticClass:"row text-center"},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last))])]),_vm._v(" "),_c('div',{staticClass:"row text-center"},[_c('p',{staticClass:"position center"},[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"left half"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])})],2),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.contact))]),_vm._v(" "),_c('table',[_c('tr',[_c('td',[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1)]),_vm._v(" "),_c('tr',[_c('td',[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))])]),_vm._v(" "),_vm._m(2)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v(_vm._s(_vm.person.contact.street)+" "),_c('br'),_vm._v(" "+_vm._s(_vm.person.contact.city))]),_vm._v(" "),_vm._m(3)]),_vm._v(" "),(_vm.person.contact.website)?_c('tr',[_c('td',[_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v(_vm._s(_vm.person.contact.website))])]),_vm._v(" "),_vm._m(4)]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('tr',[_c('td',[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])]),_vm._v(" "),_vm._m(5)]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"right half"},[_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])})],2),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.lang.headings.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill-block"},[_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))]),_vm._v(" "),_c('div',{staticClass:"skill-bar"},[_c('div',{staticClass:"level",style:('width: '+skill.level+'%')})])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.knowledge)+" ")])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"image center"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_oblique_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e9e9731_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_oblique_vue__ = __webpack_require__(89);
function injectStyle (ssrContext) {
  __webpack_require__(87)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3e9e9731"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_oblique_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e9e9731_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_oblique_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);





var name = 'oblique';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume3"}},[_c('div',{staticClass:"resume-header"},[_c('div',{staticClass:"triangle"}),_vm._v(" "),_c('div',{staticClass:"person-header"},[_c('div',{staticClass:"person-wrapper"},[_c('div',{staticClass:"person"},[_c('div',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last))]),_vm._v(" "),_c('div',{staticClass:"position"},[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_c('div',{staticClass:"img"})])])]),_vm._v(" "),_c('div',{staticClass:"resume-content"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('i',{staticClass:"material-icons"},[_vm._v("details")]),_vm._v(" "),_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(", "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skill-section"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.skills))]),_vm._v(" "),_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skills"},[_c('div',{staticClass:"skill-block"},[_c('i',{staticClass:"material-icons"},[_vm._v("details")]),_vm._v(" "),_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-other"},[_c('span',[_vm._v(_vm._s(_vm.person.knowledge)+" ")])]),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.contact))]),_vm._v(" "),_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(" "+_vm._s(_vm.person.contact.email))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.person.contact.street)+", "+_vm._s(_vm.person.contact.city))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),(_vm.person.contact.website)?_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v("\n              "+_vm._s(_vm.person.contact.website))]):_vm._e(),_vm._v(" "),(_vm.person.contact.website)?_c('span',[_vm._v("; ")]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("\n                https://github.com/"+_vm._s(_vm.person.contact.github))]):_vm._e()])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_side_bar_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4ac258cd_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_side_bar_vue__ = __webpack_require__(93);
function injectStyle (ssrContext) {
  __webpack_require__(91)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4ac258cd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_side_bar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4ac258cd_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_side_bar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);





var name = 'side-bar';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume2"}},[_c('div',{staticClass:"top-row"},[_c('span',{staticClass:"person-name"},[_vm._v("\n          "+_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last)+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"person-position"},[_vm._v("\n          "+_vm._s(_vm.person.position)+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"left-col"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.contact))]),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_vm._v("\n                "+_vm._s(_vm.person.contact.street)+" "),_c('br'),_vm._v(" "+_vm._s(_vm.person.contact.city)+"\n            ")]),_vm._v(" "),(_vm.person.contact.github)?_c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"right-col"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" -")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-block"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill"},[_c('span',{staticClass:"skill-name"},[_vm._v(_vm._s(skill.name))])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.knowledge)+" ")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"person-image"},[_c('div',{staticClass:"image-centerer"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_purple_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f07d728_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_purple_vue__ = __webpack_require__(97);
function injectStyle (ssrContext) {
  __webpack_require__(95)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1f07d728"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_purple_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f07d728_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_purple_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 95 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);





/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('purple', Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"template"}},[_c('div',{attrs:{"id":"resume-header"}},[_c('div',{attrs:{"id":"header-left"}},[_c('h2',{attrs:{"id":"position"}},[_vm._v(_vm._s(_vm.person.position))]),_vm._v(" "),_c('h1',{attrs:{"id":"name"}},[_vm._v(_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.last))]),_vm._v(" "),_c('div',{attrs:{"id":"info-flex"}},[_c('span',{attrs:{"id":"email"}},[_c('a',{attrs:{"href":"mailto:" + _vm.person.contact.email}},[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_c('span',{attrs:{"id":"phone"}},[_c('i',{staticClass:"fa fa-phone-square",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.phone))]),_vm._v(" "),(_vm.person.contact.website)?_c('span',{attrs:{"id":"website"}},[_c('a',{attrs:{"href":_vm.person.contact.website}},[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.website))])]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('span',{attrs:{"id":"github"}},[_c('a',{attrs:{"href":"https://github.com/" + _vm.person.contact.github}},[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.github))])]):_vm._e()])]),_vm._v(" "),_vm._m(0)]),_vm._v(" "),_c('div',{attrs:{"id":"resume-body"}},[_c('div',{attrs:{"id":"experience-container"}},[_c('h2',{attrs:{"id":"experience-title"}},[_vm._v(_vm._s(_vm.lang.headings.experience))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience"},[_c('h2',{staticClass:"company"},[_vm._v(_vm._s(experience.company))]),_vm._v(" "),_c('p',{staticClass:"job-info"},[_c('span',{staticClass:"job-title"},[_vm._v(_vm._s(experience.position)+" | ")]),_c('span',{staticClass:"experience-timeperiod"},[_vm._v(_vm._s(experience.timeperiod))])]),_vm._v(" "),(experience.description)?_c('p',{staticClass:"job-description"},[_vm._v(_vm._s(experience.description))]):_vm._e(),_vm._v(" "),(experience.list)?_c('ul',_vm._l((experience.list),function(item,index){return _c('li',{key:index},[_c('span',{staticClass:"list-item-black"},[_vm._v("\n                        "+_vm._s(item)+"\n                      ")])])})):_vm._e()])})],2),_vm._v(" "),_c('div',{attrs:{"id":"education-container"}},[_c('h2',{attrs:{"id":"education-title"}},[_vm._v(_vm._s(_vm.lang.headings.education))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education"},[_c('h2',{staticClass:"education-description"},[_vm._v(_vm._s(education.description))]),_vm._v(" "),_c('p',[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree)+" | ")]),_c('span',{staticClass:"education-timeperiod"},[_vm._v(_vm._s(education.timeperiod))])])])})],2),_vm._v(" "),(_vm.person.skills != [])?_c('div',{attrs:{"id":"skills-container"}},[_c('h2',{attrs:{"id":"skills-title"}},[_vm._v(_vm._s(_vm.lang.headings.skills))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_c('p',{attrs:{"id":"skill-description"}},[_vm._v(_vm._s(_vm.person.knowledge))]),_vm._v(" "),_c('ul',{attrs:{"id":"skill-list"}},_vm._l((_vm.person.skills),function(skill){return _c('li',{key:skill.name,staticClass:"skill"},[_c('span',{staticClass:"list-item-black"},[_vm._v("\n                    "+_vm._s(skill.name)+"\n                  ")])])}))]):_vm._e()]),_vm._v(" "),_c('div',{attrs:{"id":"resume-footer"}},[(_vm.person.about)?_c('div',[_c('h2',[_vm._v(_vm._s(_vm.lang.headings.about))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.person.about))])]):_vm._e()])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"header-right"}},[_c('div',{attrs:{"id":"headshot"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_side_bar_rtl_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7f2ce22c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_side_bar_rtl_vue__ = __webpack_require__(101);
function injectStyle (ssrContext) {
  __webpack_require__(99)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7f2ce22c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_side_bar_rtl_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7f2ce22c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_side_bar_rtl_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);





var name = 'side-bar-rtl';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume2"}},[_c('div',{staticClass:"top-row"},[_c('span',{staticClass:"person-name"},[_vm._v("\n          "+_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last)+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"person-position"},[_vm._v("\n          "+_vm._s(_vm.person.position)+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"right-col"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.contact))]),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":"'tel:'+person.contact.phone"}},[_vm._v(_vm._s(_vm.person.contact.phone))])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_vm._v("\n                "+_vm._s(_vm.person.contact.street)+" "),_c('br'),_vm._v(" "+_vm._s(_vm.person.contact.city)+"\n            ")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])])])]),_vm._v(" "),_c('div',{staticClass:"left-col"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" -")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-block"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{staticClass:"skill"},[_c('span',{staticClass:"skill-name"},[_vm._v(_vm._s(skill.name))])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.knowledge)+" ")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"person-image"},[_c('div',{staticClass:"image-centerer"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_left_right_rtl_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a982bba_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_left_right_rtl_vue__ = __webpack_require__(105);
function injectStyle (ssrContext) {
  __webpack_require__(103)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6a982bba"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_left_right_rtl_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a982bba_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_left_right_rtl_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);




var name = 'left-right-rtl';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume1"}},[_c('div',{staticClass:"row text-center"},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last))])]),_vm._v(" "),_c('div',{staticClass:"row text-center"},[_c('p',{staticClass:"position center"},[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"left half"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])})],2),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.contact))]),_vm._v(" "),_c('table',[_c('tr',[_vm._m(1),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])])]),_vm._v(" "),_c('tr',[_vm._m(2),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))])])]),_vm._v(" "),_c('tr',[_vm._m(3),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.person.contact.street)+" "),_c('br'),_vm._v(" "+_vm._s(_vm.person.contact.city))])]),_vm._v(" "),(_vm.person.contact.website)?_c('tr',[_vm._m(4),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v(_vm._s(_vm.person.contact.website))])])]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('tr',[_vm._m(5),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])])]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"right half"},[_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.headings.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])})],2),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.lang.headings.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill-block"},[_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))]),_vm._v(" "),_c('div',{staticClass:"skill-bar"},[_c('div',{staticClass:"level",style:('width: '+skill.level+'%')})])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.skillDescription)+" ")])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"image center"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-wrapper"},[_c('div',{staticClass:"page",attrs:{"id":_vm.$route.params.resumeid}},[_c('div',{staticClass:"page-inner"},[_c(_vm.$route.params.resumeid,{tag:"component"})],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d7e5c49e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__ = __webpack_require__(110);
function injectStyle (ssrContext) {
  __webpack_require__(108)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d7e5c49e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d7e5c49e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('resume', {
  name: 'app'
}));

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('h3',{staticClass:"title"},[_vm._v("best-resume-ever")]),_vm._v(" "),_c('div',{staticClass:"previews"},[_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/material-dark'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(111)}}),_vm._v(" "),_c('span',[_vm._v("material-dark")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/left-right'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(112)}}),_vm._v(" "),_c('span',[_vm._v("left-right")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/oblique'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(113)}}),_vm._v(" "),_c('span',[_vm._v("oblique")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/side-bar'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(114)}}),_vm._v(" "),_c('span',[_vm._v("side-bar")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/purple'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(115)}}),_vm._v(" "),_c('span',[_vm._v("purple")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/side-bar-rtl'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(116)}}),_vm._v(" "),_c('span',[_vm._v("side-bar-rtl")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/left-right-rtl'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(117)}}),_vm._v(" "),_c('span',[_vm._v("left-right-rtl")])])])],1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"https://github.com/salomonelli/best-resume-ever","target":"_blank"}},[_c('img',{staticStyle:{"position":"absolute","top":"0","right":"0","border":"0"},attrs:{"src":"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67","alt":"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"logo"},[_c('img',{attrs:{"src":__webpack_require__(118)}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-material-dark.722cd11.png";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-left-right.4ba1e85.png";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-oblique.a02cfe1.png";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-side-bar.f99c742.png";

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-purple.6c93c28.png";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-side-bar-rtl.abd6c1a.png";

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-left-right-rtl.75f8068.png";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo.1522a48.png";

/***/ })
],[13]);
//# sourceMappingURL=app.e2c878cafbb20641fa24.js.map