webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getVueOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_yaml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_data_yml__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms__ = __webpack_require__(102);





function getVueOptions(name) {
  var opt = {
    name: name,
    data: function data() {
      return {
        person: __WEBPACK_IMPORTED_MODULE_1_js_yaml___default.a.load(__WEBPACK_IMPORTED_MODULE_2__resume_data_yml__["a" /* PERSON */]),
        terms: __WEBPACK_IMPORTED_MODULE_3__terms__["a" /* terms */]
      };
    },

    computed: {
      lang: function lang() {
        var defaultLang = this.terms.en;
        var useLang = this.terms[this.person.lang];

        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(defaultLang).filter(function (k) {
          return !useLang[k];
        }).forEach(function (k) {
          console.log(k);
          useLang[k] = defaultLang[k];
        });

        return useLang;
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
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app'
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumes_resumes__ = __webpack_require__(45);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('resume', {
  name: 'app'
}));

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);




var name = 'material-dark';

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);





var name = 'left-right';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);





var name = 'oblique';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);





var name = 'side-bar';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);





/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('purple', Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);





var name = 'side-bar-rtl';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);




var name = 'left-right-rtl';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);





var name = 'creative';

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('resume', {
  name: 'app'
}));

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(41);





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
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6fce9f56_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(40);
function injectStyle (context) {
  __webpack_require__(38)
}

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
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6fce9f56_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_resume__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home__ = __webpack_require__(149);





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
/* 42 */,
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_resume_vue__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09e61b2b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_resume_vue__ = __webpack_require__(148);
function injectStyle (context) {
  __webpack_require__(44)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-09e61b2b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_resume_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_09e61b2b_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_resume_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_dark_vue__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_right_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oblique_vue__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__side_bar_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__purple_vue__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__side_bar_rtl_vue__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__left_right_rtl_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__creative_vue__ = __webpack_require__(145);










/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_material_dark_vue__ = __webpack_require__(18);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7951fa00_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_material_dark_vue__ = __webpack_require__(126);
function injectStyle (context) {
  __webpack_require__(47)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7951fa00"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_material_dark_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7951fa00_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_material_dark_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */
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
  website: https://example.com

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
  website: https://example.com

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

projects:
- name: best-resume-ever
  platform: Vue
  description: 👔 💼 Build fast 🚀 and easy multiple beautiful resumes and create your best CV ever! Made with Vue and LESS.
  url: https://github.com/salomonelli/best-resume-ever

hobbies:
- name: Video Games
  iconClass: fa fa-gamepad
  url: https://example.com

- name: Drawing
  iconClass: fa fa-pencil
  url: https://example.com

contributions:
- name: best-resume-ever
  description: 👔 💼 Build fast 🚀 and easy multiple beautiful resumes.
  url: https://github.com/salomonelli/best-resume-ever

contact:
  email: john.doe@email.com
  phone: 0123 456789
  street: 1234 Broadway
  city: New York
  website: johndoe.com
  github: johnyD
# en, de, fr, pt, ca, cn, it, es, th, pt-br, ru, sv, id, hu, pl, ja, ka, nl, he, zh-tw, lt, ko, el
lang: en
`
/* harmony export (immutable) */ __webpack_exports__["a"] = PERSON;



/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return terms; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang_en__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang_de__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang_fr__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lang_pt__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lang_ca__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lang_cn__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lang_it__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lang_es__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lang_th__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lang_id__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lang_sv__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lang_ru__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lang_pt_br__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lang_hu__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lang_pl__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lang_he__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lang_ja__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lang_zh_tw__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lang_nl__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__lang_lt__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__lang_tr__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__lang_ko__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lang_el__ = __webpack_require__(125);
























var terms = {
  en: __WEBPACK_IMPORTED_MODULE_0__lang_en__["a" /* default */], de: __WEBPACK_IMPORTED_MODULE_1__lang_de__["a" /* default */], fr: __WEBPACK_IMPORTED_MODULE_2__lang_fr__["a" /* default */], pt: __WEBPACK_IMPORTED_MODULE_3__lang_pt__["a" /* default */], ca: __WEBPACK_IMPORTED_MODULE_4__lang_ca__["a" /* default */], cn: __WEBPACK_IMPORTED_MODULE_5__lang_cn__["a" /* default */], it: __WEBPACK_IMPORTED_MODULE_6__lang_it__["a" /* default */], es: __WEBPACK_IMPORTED_MODULE_7__lang_es__["a" /* default */], th: __WEBPACK_IMPORTED_MODULE_8__lang_th__["a" /* default */], 'pt-br': __WEBPACK_IMPORTED_MODULE_12__lang_pt_br__["a" /* default */], ru: __WEBPACK_IMPORTED_MODULE_11__lang_ru__["a" /* default */], sv: __WEBPACK_IMPORTED_MODULE_10__lang_sv__["a" /* default */], id: __WEBPACK_IMPORTED_MODULE_9__lang_id__["a" /* default */], hu: __WEBPACK_IMPORTED_MODULE_13__lang_hu__["a" /* default */], pl: __WEBPACK_IMPORTED_MODULE_14__lang_pl__["a" /* default */], ja: __WEBPACK_IMPORTED_MODULE_16__lang_ja__["a" /* default */], nl: __WEBPACK_IMPORTED_MODULE_18__lang_nl__["a" /* default */], he: __WEBPACK_IMPORTED_MODULE_15__lang_he__["a" /* default */], 'zh-tw': __WEBPACK_IMPORTED_MODULE_17__lang_zh_tw__["a" /* default */], lt: __WEBPACK_IMPORTED_MODULE_19__lang_lt__["a" /* default */], tr: __WEBPACK_IMPORTED_MODULE_20__lang_tr__["a" /* default */], ko: __WEBPACK_IMPORTED_MODULE_21__lang_ko__["a" /* default */], el: __WEBPACK_IMPORTED_MODULE_22__lang_el__["a" /* default */]
};

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lang = {
  contact: 'Contact',
  born: 'Born',
  bornIn: 'in',
  experience: 'Experience',
  education: 'Education',
  skills: 'Skills',
  projects: 'Projects',
  contributions: 'Contributions',
  about: 'About me'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lang = {
  contact: 'Kontakt',
  born: 'Geboren',
  bornIn: 'in',
  experience: 'Berufserfahrung',
  education: 'Schulbildung',
  skills: 'Qualifikationen',
  projects: 'Projecten',
  contributions: 'Bijdragen',
  about: 'Über mich'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lang = {
  contact: 'Contact',
  born: 'Né en',
  bornIn: 'à',
  experience: 'Expérience professionelle',
  education: 'Formation',
  skills: 'Compétences',
  projects: 'Projets',
  contributions: 'Contributions',
  about: 'À propos de moi'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lang = {
  contact: 'Contactos',
  experience: 'Experiência Profissional',
  education: 'Educação',
  skills: 'Competências',
  projects: 'Projetos',
  contributions: 'Contribuições',
  about: 'Sobre mim'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lang = {
  contact: 'Contacte',
  experience: 'Experiència',
  education: 'Educació',
  skills: 'Habilitats',
  projects: 'Projectes',
  contributions: 'Contribucions',
  about: 'Sobre mi'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lang = {
  contact: '联系方式',
  experience: '工作经历',
  education: '教育经历',
  skills: '技能专长',
  projects: '项目',
  contributions: '捐款',
  about: '自我介绍'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lang = {
  contact: 'Contatti',
  experience: 'Esperienza professionale',
  education: 'Formazione',
  skills: 'Competenze',
  contributions: 'Contributi',
  projects: 'Progetti',
  about: 'Su di me'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lang = {
  contact: 'Contacto',
  experience: 'Experiencia',
  education: 'Educación',
  skills: 'Habilidades',
  projects: 'Proyectos',
  contributions: 'Contribuciones',
  about: 'Sobre mi'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'ข้อมูลติดต่อ',
  experience: 'ประสบการณ์ทำงาน',
  education: 'ประวัติการศึกษา',
  skills: 'ทักษะและความสามารถ',
  about: 'ข้อมูลส่วนตัว'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lang = {
  contact: 'Kontak',
  experience: 'Pengalaman',
  education: 'Pendidikan',
  skills: 'Keterampilan',
  projects: 'Proyek',
  contributions: 'Kontribusi',
  about: 'Tentang Saya'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'Kontakt',
  experience: 'Arbetslivserfarenhet',
  education: 'Utbildning',
  skills: 'Kunskaper',
  about: 'Om mig'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lang = {
  contact: 'Контакты',
  experience: 'Опыт',
  education: 'Образование',
  skills: 'Навыки',
  projects: 'проектов',
  contributions: 'взносы',
  about: 'Обо мне'
};

/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lang = {
  contact: 'Contato',
  experience: 'Experiência Profissional',

  education: 'Formação Acadêmica',
  skills: 'Competências',
  projects: 'Projetos',
  contributions: 'Contribuições',
  about: 'Sobre'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lang = {
  contact: 'Kapcsolat',
  experience: 'Munkatapasztalat',
  education: 'Tanulmány',
  skills: 'Készségek',
  projects: 'Projektek',
  contributions: 'Hozzájárulások',
  about: 'Rólam'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lang = {
  contact: 'Kontakt',
  experience: 'Doświadczenie',
  education: 'Wykształcenie',
  skills: 'Umiejętności',
  projects: 'Projektowanie',
  contributions: 'Składki',
  about: 'O mnie'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lang = {
  contact: 'יצירת קשר',
  experience: 'ניסיון',
  education: 'השכלה',
  skills: 'כישורים',
  projects: 'פרויקטים',
  contributions: 'תרומות',
  about: 'תמצית'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lang = {
  contact: '連絡先',
  experience: '職務経歴',
  education: '学歴',
  skills: 'スキル',
  projects: 'プロジェクト',
  contributions: '貢献',
  about: '自己紹介'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: '聯絡方式',
  experience: '經歷',
  education: '學歷',
  skills: '技能專長',
  about: '自我介紹'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lang = {
  contact: 'Contact',
  experience: 'Ervaringen',
  education: 'Opleidingen',
  skills: 'Skills',
  projects: 'Projecten',
  contributions: 'Bijdragen',
  about: 'Over mij'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'Kontaktai',
  experience: 'Patirtis',
  education: 'Išsilavinimas',
  skills: 'Įgūdžiai',
  about: 'Apie mane'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'İletişim',
  experience: 'Deneyim',
  education: 'Eğitim',
  skills: 'Yetenekler',
  about: 'Hakkımda'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var lang = {
  contact: '연락처',
  experience: '경력',
  education: '학력',
  skills: '보유스킬',
  projects: '프로젝트',
  contributions: '기고',
  about: '자기소개'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'Επικοινωνία',
  experience: 'Επαγγελματική εμπειρία',
  education: 'Εκπαίδευση',
  skills: 'Δεξιότητες',
  about: 'Σχετικά με εμένα'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume"},[_c('div',{staticClass:"leftCol m_box"},[_c('div',{staticClass:"shadow"}),_vm._v(" "),_c('div',{staticClass:"heading",attrs:{"id":"myselfpic"}}),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v("\n      "+_vm._s(_vm.lang.contact)+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"text"},[_c('ul',[_c('li',[_vm._v(" "+_vm._s(_vm.lang.born)+" "+_vm._s(_vm.person.birth.year)+" "+_vm._s(_vm.lang.bornIn)+" "+_vm._s(_vm.person.birth.location))])])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"text"},[_c('ul',[_c('li',[_vm._v(_vm._s(_vm.person.contact.street))]),_vm._v(" "),_c('li',[_vm._v(_vm._s(_vm.person.contact.city))])])])]),_vm._v(" "),_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_c('div',{staticClass:"item"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("\n          "+_vm._s(_vm.person.contact.phone)+"\n        ")])])]),_vm._v(" "),_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_c('div',{staticClass:"item"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("\n          "+_vm._s(_vm.person.contact.email)+"\n        ")])])]),_vm._v(" "),(_vm.person.contact.github)?_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github,"target":"_blank"}},[_c('div',{staticClass:"item"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"text"},[_c('span',[_vm._v("@"+_vm._s(_vm.person.contact.github))]),_vm._v(" "),_c('span',[_vm._v("github.com/"+_vm._s(_vm.person.contact.github))])])])]):_vm._e(),_vm._v(" "),(_vm.person.contact.website)?_c('a',{attrs:{"href":_vm.person.contact.website,"target":"_blank"}},[_c('div',{staticClass:"item"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"text"},[_c('span',[_vm._v(_vm._s(_vm.person.contact.website))])])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"item last"},[_c('div',{staticClass:"section-headline"},[_vm._v("\n        "+_vm._s(_vm.lang.skills)+"\n      ")]),_vm._v(" "),_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill"},[_c('div',{staticClass:"right"},[_c('span',[_vm._v(_vm._s(skill.name)+" ")]),_vm._v(" "),_c('div',{staticClass:"progress"},[_c('div',{staticClass:"determinate",style:('width: '+skill.level+'%;')},[_c('i',{staticClass:"fa fa-circle"})])])])])})],2)]),_vm._v(" "),_c('div',{staticClass:"rightCol"},[_c('div',{staticClass:"title"},[_c('h2',[_vm._v(_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"block"},[_c('div',{staticClass:"block-helper"}),_vm._v(" "),_c('h3',{staticClass:"headline"},[_vm._v(_vm._s(experience.position)+" - "+_vm._s(experience.company))]),_vm._v(" "),_c('div',{staticClass:"subheadline"},[_vm._v(_vm._s(experience.timeperiod))]),_vm._v(" "),_c('p',{staticClass:"info"},[_vm._v("\n          "+_vm._s(experience.description)+"\n        ")])])}),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"block"},[_c('div',{staticClass:"block-helper"}),_vm._v(" "),_c('div',{staticClass:"headline"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('p',{staticClass:"info"},[_vm._v("\n        "+_vm._s(education.timeperiod)+", "+_vm._s(education.description)+"\n      ")])])})],2),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("account_circle")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("location_city")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("phone")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("email")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-github"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("language")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_left_right_vue__ = __webpack_require__(25);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_892f1822_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_left_right_vue__ = __webpack_require__(129);
function injectStyle (context) {
  __webpack_require__(128)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-892f1822"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_left_right_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_892f1822_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_left_right_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 128 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume1"}},[_c('div',{staticClass:"row text-center"},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last))])]),_vm._v(" "),_c('div',{staticClass:"row text-center"},[_c('p',{staticClass:"position center"},[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"left half"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])})],2),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('table',[_c('tr',[_c('td',[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1)]),_vm._v(" "),_c('tr',[_c('td',[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))])]),_vm._v(" "),_vm._m(2)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v(_vm._s(_vm.person.contact.street)+" "),_c('br'),_vm._v(" "+_vm._s(_vm.person.contact.city))]),_vm._v(" "),_vm._m(3)]),_vm._v(" "),(_vm.person.contact.website)?_c('tr',[_c('td',[_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v(_vm._s(_vm.person.contact.website))])]),_vm._v(" "),_vm._m(4)]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('tr',[_c('td',[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])]),_vm._v(" "),_vm._m(5)]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"right half"},[_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])})],2),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill-block"},[_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))]),_vm._v(" "),_c('div',{staticClass:"skill-bar"},[_c('div',{staticClass:"level",style:('width: '+skill.level+'%')})])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.knowledge)+" ")])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"image center"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_oblique_vue__ = __webpack_require__(26);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_233d6d70_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_oblique_vue__ = __webpack_require__(132);
function injectStyle (context) {
  __webpack_require__(131)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-233d6d70"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_oblique_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_233d6d70_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_oblique_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume3"}},[_c('div',{staticClass:"resume-header"},[_c('div',{staticClass:"triangle"}),_vm._v(" "),_c('div',{staticClass:"person-header"},[_c('div',{staticClass:"person-wrapper"},[_c('div',{staticClass:"person"},[_c('div',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last))]),_vm._v(" "),_c('div',{staticClass:"position"},[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_c('div',{staticClass:"img"})])])]),_vm._v(" "),_c('div',{staticClass:"resume-content"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('i',{staticClass:"material-icons"},[_vm._v("details")]),_vm._v(" "),_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(", "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skill-section"},[_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skills"},[_c('div',{staticClass:"skill-block"},[_c('i',{staticClass:"material-icons"},[_vm._v("details")]),_vm._v(" "),_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-other"},[_c('span',[_vm._v(_vm._s(_vm.person.knowledge)+" ")])]),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(" "+_vm._s(_vm.person.contact.email))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.person.contact.street)+", "+_vm._s(_vm.person.contact.city))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),(_vm.person.contact.website)?_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v("\n              "+_vm._s(_vm.person.contact.website))]):_vm._e(),_vm._v(" "),(_vm.person.contact.website)?_c('span',[_vm._v("; ")]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("\n                https://github.com/"+_vm._s(_vm.person.contact.github))]):_vm._e()])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_side_bar_vue__ = __webpack_require__(27);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7a8de726_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_side_bar_vue__ = __webpack_require__(135);
function injectStyle (context) {
  __webpack_require__(134)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7a8de726"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_side_bar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7a8de726_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_side_bar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 134 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume2"}},[_c('div',{staticClass:"top-row"},[_c('span',{staticClass:"person-name"},[_vm._v("\n          "+_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last)+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"person-position"},[_vm._v("\n          "+_vm._s(_vm.person.position)+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"left-col"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_vm._v("\n                "+_vm._s(_vm.person.contact.street)+" "),_c('br'),_vm._v(" "+_vm._s(_vm.person.contact.city)+"\n            ")]),_vm._v(" "),(_vm.person.contact.github)?_c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"right-col"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" -")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-block"},[_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill"},[_c('span',{staticClass:"skill-name"},[_vm._v(_vm._s(skill.name))])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.knowledge)+" ")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"person-image"},[_c('div',{staticClass:"image-centerer"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_purple_vue__ = __webpack_require__(28);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0dad0972_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_purple_vue__ = __webpack_require__(138);
function injectStyle (context) {
  __webpack_require__(137)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0dad0972"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_purple_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0dad0972_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_purple_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 137 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"template"}},[_c('div',{attrs:{"id":"resume-header"}},[_c('div',{attrs:{"id":"header-left"}},[_c('h2',{attrs:{"id":"position"}},[_vm._v(_vm._s(_vm.person.position))]),_vm._v(" "),_c('h1',{attrs:{"id":"name"}},[_vm._v(_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.last))]),_vm._v(" "),_c('div',{attrs:{"id":"info-flex"}},[_c('span',{attrs:{"id":"email"}},[_c('a',{attrs:{"href":"mailto:" + _vm.person.contact.email}},[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_c('span',{attrs:{"id":"phone"}},[_c('i',{staticClass:"fa fa-phone-square",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.phone))]),_vm._v(" "),(_vm.person.contact.website)?_c('span',{attrs:{"id":"website"}},[_c('a',{attrs:{"href":_vm.person.contact.website}},[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.website))])]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('span',{attrs:{"id":"github"}},[_c('a',{attrs:{"href":"https://github.com/" + _vm.person.contact.github}},[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.github))])]):_vm._e()])]),_vm._v(" "),_vm._m(0)]),_vm._v(" "),_c('div',{attrs:{"id":"resume-body"}},[_c('div',{attrs:{"id":"experience-container"}},[_c('h2',{attrs:{"id":"experience-title"}},[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience"},[_c('h2',{staticClass:"company"},[_vm._v(_vm._s(experience.company))]),_vm._v(" "),_c('p',{staticClass:"job-info"},[_c('span',{staticClass:"job-title"},[_vm._v(_vm._s(experience.position)+" | ")]),_c('span',{staticClass:"experience-timeperiod"},[_vm._v(_vm._s(experience.timeperiod))])]),_vm._v(" "),(experience.description)?_c('p',{staticClass:"job-description"},[_vm._v(_vm._s(experience.description))]):_vm._e(),_vm._v(" "),(experience.list)?_c('ul',_vm._l((experience.list),function(item,index){return _c('li',{key:index},[_c('span',{staticClass:"list-item-black"},[_vm._v("\n                        "+_vm._s(item)+"\n                      ")])])})):_vm._e()])})],2),_vm._v(" "),_c('div',{attrs:{"id":"education-container"}},[_c('h2',{attrs:{"id":"education-title"}},[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education"},[_c('h2',{staticClass:"education-description"},[_vm._v(_vm._s(education.description))]),_vm._v(" "),_c('p',[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree)+" | ")]),_c('span',{staticClass:"education-timeperiod"},[_vm._v(_vm._s(education.timeperiod))])])])})],2),_vm._v(" "),(_vm.person.skills != [])?_c('div',{attrs:{"id":"skills-container"}},[_c('h2',{attrs:{"id":"skills-title"}},[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_c('p',{attrs:{"id":"skill-description"}},[_vm._v(_vm._s(_vm.person.knowledge))]),_vm._v(" "),_c('ul',{attrs:{"id":"skill-list"}},_vm._l((_vm.person.skills),function(skill){return _c('li',{key:skill.name,staticClass:"skill"},[_c('span',{staticClass:"list-item-black"},[_vm._v("\n                    "+_vm._s(skill.name)+"\n                  ")])])}))]):_vm._e()]),_vm._v(" "),_c('div',{attrs:{"id":"resume-footer"}},[(_vm.person.about)?_c('div',[_c('h2',[_vm._v(_vm._s(_vm.lang.about))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.person.about))])]):_vm._e()])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"header-right"}},[_c('div',{attrs:{"id":"headshot"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_side_bar_rtl_vue__ = __webpack_require__(29);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a320576_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_side_bar_rtl_vue__ = __webpack_require__(141);
function injectStyle (context) {
  __webpack_require__(140)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5a320576"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_side_bar_rtl_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a320576_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_side_bar_rtl_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 140 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume2"}},[_c('div',{staticClass:"top-row"},[_c('span',{staticClass:"person-name"},[_vm._v("\n          "+_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last)+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"person-position"},[_vm._v("\n          "+_vm._s(_vm.person.position)+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"right-col"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":"'tel:'+person.contact.phone"}},[_vm._v(_vm._s(_vm.person.contact.phone))])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_vm._v("\n                "+_vm._s(_vm.person.contact.street)+" "),_c('br'),_vm._v(" "+_vm._s(_vm.person.contact.city)+"\n            ")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])])])]),_vm._v(" "),_c('div',{staticClass:"left-col"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" -")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-block"},[_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{staticClass:"skill"},[_c('span',{staticClass:"skill-name"},[_vm._v(_vm._s(skill.name))])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.knowledge)+" ")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"person-image"},[_c('div',{staticClass:"image-centerer"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_left_right_rtl_vue__ = __webpack_require__(30);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b36d5e6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_left_right_rtl_vue__ = __webpack_require__(144);
function injectStyle (context) {
  __webpack_require__(143)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0b36d5e6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_left_right_rtl_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b36d5e6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_left_right_rtl_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 143 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume1"}},[_c('div',{staticClass:"row text-center"},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last))])]),_vm._v(" "),_c('div',{staticClass:"row text-center"},[_c('p',{staticClass:"position center"},[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"left half"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])})],2),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('table',[_c('tr',[_vm._m(1),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])])]),_vm._v(" "),_c('tr',[_vm._m(2),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))])])]),_vm._v(" "),_c('tr',[_vm._m(3),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.person.contact.street)+" "),_c('br'),_vm._v(" "+_vm._s(_vm.person.contact.city))])]),_vm._v(" "),(_vm.person.contact.website)?_c('tr',[_vm._m(4),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v(_vm._s(_vm.person.contact.website))])])]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('tr',[_vm._m(5),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])])]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"right half"},[_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])})],2),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill-block"},[_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))]),_vm._v(" "),_c('div',{staticClass:"skill-bar"},[_c('div',{staticClass:"level",style:('width: '+skill.level+'%')})])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.skillDescription)+" ")])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"image center"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_creative_vue__ = __webpack_require__(31);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c5510dfe_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_creative_vue__ = __webpack_require__(147);
function injectStyle (context) {
  __webpack_require__(146)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c5510dfe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_creative_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c5510dfe_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_creative_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 146 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume2"}},[_c('div',{staticClass:"left-column"},[_c('div',[_c('div',{staticClass:"headline"},[_c('span',[_vm._v(" "+_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" ")]),_vm._v(" "),_c('span',{staticClass:"uppercase"},[_vm._v(" "+_vm._s(_vm.person.name.last)+" ")])]),_vm._v(" "),_c('p',[_c('span',{staticClass:"txt-full-white"},[_vm._v(" "+_vm._s(_vm.person.position)+" ")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',[_vm._v(" "+_vm._s(_vm.person.contact.city)+" ")])])]),_vm._v(" "),_c('div',{staticClass:"multi-line-txt"},[_vm._v("\n      "+_vm._s(_vm.person.about)+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"multi-line-txt"},[_vm._v("\n      "+_vm._s(_vm.person.knowledge)+"\n    ")]),_vm._v(" "),_c('a',{attrs:{"href":'mailto:' + _vm.person.contact.email}},[_c('div',{staticClass:"block-marged txt-full-white"},[_vm._v("\n        "+_vm._s(_vm.person.contact.email)+"\n      ")])]),_vm._v(" "),_c('div',{staticClass:"block-marged txt-full-white"},[_vm._v("\n      "+_vm._s(_vm.person.contact.phone)+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"social-container"},[(_vm.person.contact.website)?_c('a',{attrs:{"href":_vm.person.contact.website}},[_c('div',{staticClass:"block-marged txt-full-white"},[_c('i',{staticClass:"fa fa-globe contact-icon"}),_vm._v("\n          "+_vm._s(_vm.person.contact.website)+"\n        ")])]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('a',{staticClass:"external-link",attrs:{"href":'https://github.com/' + _vm.person.contact.github}},[_c('i',{staticClass:"fa fa-github contact-icon"}),_vm._v(" "),_c('span',{staticClass:"block-marged txt-full-white"},[_vm._v("\n          "+_vm._s(_vm.person.contact.github)+"\n        ")])]):_vm._e(),_vm._v(" "),(_vm.person.contact.codefights)?_c('a',{staticClass:"external-link",attrs:{"href":'https://codefights.com/profile/' + _vm.person.contact.codefights}},[_c('svg',{staticClass:"contact-icon-svg",attrs:{"width":"20","height":"20","viewBox":"0 0 24 24"}},[_c('path',{attrs:{"d":"M12 15.2L9.2 4.8 0 3.2l1.7 2.6 5.7.7.7 2.3-3.7-.4 1.3 2 3 .3L12 20.8l3.3-10.1 3-.3 1.3-2-3.7.4.7-2.3 5.7-.7L24 3.2l-9.2 1.6"}})]),_vm._v(" "),_c('span',{staticClass:"block-marged txt-full-white"},[_vm._v("\n          "+_vm._s(_vm.person.contact.codefights)+"\n        ")])]):_vm._e(),_vm._v(" "),(_vm.person.contact.medium)?_c('a',{staticClass:"external-link",attrs:{"href":'https://medium.com/@' + _vm.person.contact.medium}},[_c('i',{staticClass:"fab fa-medium contact-icon"}),_vm._v(" "),_c('span',{staticClass:"block-marged txt-full-white"},[_vm._v("\n          "+_vm._s(_vm.person.contact.medium)+"\n        ")])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"hobbies-container"},[_c('div',{staticClass:"hobbies-content"},_vm._l((_vm.person.hobbies),function(hobby,index){return _c('a',{key:index,staticClass:"hobby-item",attrs:{"href":hobby.url}},[(hobby.iconClass)?_c('i',{class:hobby.iconClass + ' hobby-item__icon'}):_vm._e(),_vm._v(" "),_c('span',{staticClass:"hobby-item__icon-label"},[_vm._v(" "+_vm._s(hobby.name)+" ")])])}))])]),_vm._v(" "),_c('div',{staticClass:"left-column-bg"}),_vm._v(" "),_c('div',{staticClass:"right-column"},[_c('div',{staticClass:"experience-section section"},[_c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons small-icon"},[_vm._v("work")]),_vm._v(" "),_c('span',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.experience))])]),_vm._v(" "),_c('div',{staticClass:"section-content"},_vm._l((_vm.person.experience),function(experience,index){return _c('a',{key:index,staticClass:"section-content__item",attrs:{"href":experience.website}},[_c('span',{staticClass:"section-content__header"},[_vm._v(" "+_vm._s(experience.position))]),_vm._v(" "),_c('span',{staticClass:"section-content__subheader"},[_vm._v(" "+_vm._s(experience.company))]),_vm._v(" "),_c('div',{staticClass:"section-content__text"},[_vm._v(" "+_vm._s(experience.timeperiod))]),_vm._v(" "),_c('span',{staticClass:"section-content__text--light"},[_vm._v(" "+_vm._s(experience.description))])])}))]),_vm._v(" "),_c('div',{staticClass:"education-section section"},[_c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("school")]),_vm._v(" "),_c('span',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.education))])]),_vm._v(" "),_c('div',{staticClass:"section-content"},_vm._l((_vm.person.education),function(education,index){return _c('a',{key:index,staticClass:"section-content__item",attrs:{"href":education.website}},[_c('span',{staticClass:"section-content__header"},[_vm._v(" "+_vm._s(education.school)+" ")]),_vm._v(" "),_c('span',{staticClass:"section-content__subheader"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('span',{staticClass:"section-content__text"},[_vm._v(" "+_vm._s(education.timeperiod)+" ")]),_vm._v(" "),_c('span',{staticClass:"section-content__text--light"},[_vm._v(" "+_vm._s(education.description)+" ")])])}))]),_vm._v(" "),(_vm.person.projects)?_c('div',{staticClass:"projects-section section"},[_c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("code")]),_vm._v(" "),_c('span',{staticClass:"section-headline"},[_vm._v(" "+_vm._s(_vm.lang.projects)+" ")])]),_vm._v(" "),_c('div',{staticClass:"section-content"},_vm._l((_vm.person.projects),function(project,index){return _c('a',{key:index,staticClass:"section-content__item",attrs:{"href":project.url}},[_c('span',{staticClass:"section-content__header"},[_vm._v(" "+_vm._s(project.name)+" ")]),_vm._v(" "),_c('span',{staticClass:"section-content__subheader"},[_vm._v(_vm._s(project.platform))]),_vm._v(" "),_c('span',{staticClass:"section-content__text"},[_vm._v(" "+_vm._s(project.description)+" ")]),_vm._v(" "),_c('span',{staticClass:"section-content__text--light"},[_vm._v(" "+_vm._s(project.url)+" ")])])}))]):_vm._e(),_vm._v(" "),(_vm.person.skills)?_c('div',{staticClass:"skills-section section"},[_c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("done_all")]),_vm._v(" "),_c('span',{staticClass:"section-headline"},[_vm._v(" "+_vm._s(_vm.lang.skills)+" ")])]),_vm._v(" "),_c('div',{staticClass:"section-content-grid"},_vm._l((_vm.person.skills),function(skill,index){return _c('a',{key:index,staticClass:"grid-item",attrs:{"href":skill.url}},[(skill.iconClass)?_c('i',{class:'lang-icon ' + skill.iconClass}):_c('span',{staticClass:"squarred-grid-item"},[_vm._v(" "+_vm._s(skill.name)+" ")])])}))]):_vm._e(),_vm._v(" "),(_vm.person.contributions)?_c('div',{staticClass:"contributions-section section"},[_c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-heart font-awesome-icons"}),_vm._v(" "),_c('span',{staticClass:"section-headline"},[_vm._v(" "+_vm._s(_vm.lang.contributions)+" ")])]),_vm._v(" "),_c('div',{staticClass:"section-content-grid"},_vm._l((_vm.person.contributions),function(contribution,index){return _c('a',{key:index,staticClass:"section-content__item-grid",attrs:{"href":contribution.url}},[_c('span',{staticClass:"section-content__header"},[_vm._v(" "+_vm._s(contribution.name)+" ")]),_vm._v(" "),_c('span',{staticClass:"section-content__text"},[_vm._v(" "+_vm._s(contribution.description)+" ")]),_vm._v(" "),_c('span',{staticClass:"section-content__text--light",staticStyle:{"word-break":"break-all"}},[_vm._v("\n            "+_vm._s(contribution.url)+"\n          ")])])}))]):_vm._e()])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-wrapper"},[_c('div',{staticClass:"page",attrs:{"id":_vm.$route.params.resumeid}},[_c('div',{staticClass:"page-inner"},[_c(_vm.$route.params.resumeid,{tag:"component"})],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__ = __webpack_require__(32);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_77812a90_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__ = __webpack_require__(151);
function injectStyle (context) {
  __webpack_require__(150)
}

/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-77812a90"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_77812a90_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 150 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('h3',{staticClass:"title"},[_vm._v("best-resume-ever")]),_vm._v(" "),_c('div',{staticClass:"previews"},[_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/material-dark'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(152)}}),_vm._v(" "),_c('span',[_vm._v("material-dark")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/left-right'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(153)}}),_vm._v(" "),_c('span',[_vm._v("left-right")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/oblique'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(154)}}),_vm._v(" "),_c('span',[_vm._v("oblique")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/side-bar'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(155)}}),_vm._v(" "),_c('span',[_vm._v("side-bar")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/purple'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(156)}}),_vm._v(" "),_c('span',[_vm._v("purple")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/side-bar-rtl'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(157)}}),_vm._v(" "),_c('span',[_vm._v("side-bar-rtl")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/left-right-rtl'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(158)}}),_vm._v(" "),_c('span',[_vm._v("left-right-rtl")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/creative'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(159)}}),_vm._v(" "),_c('span',[_vm._v("creative")])])])],1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"https://github.com/salomonelli/best-resume-ever","target":"_blank"}},[_c('img',{staticStyle:{"position":"absolute","top":"0","right":"0","border":"0"},attrs:{"src":"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67","alt":"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"logo"},[_c('img',{attrs:{"src":__webpack_require__(160)}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-material-dark.57f3ae8.png";

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-left-right.1244943.png";

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-oblique.5d80820.png";

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-side-bar.61dbca6.png";

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-purple.b458f56.png";

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-side-bar-rtl.72fb12a.png";

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-left-right-rtl.356fd8f.png";

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-creative.4b5318e.png";

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo.1522a48.png";

/***/ })
],[33]);
//# sourceMappingURL=app.7cb85790ecf110c80b21.js.map