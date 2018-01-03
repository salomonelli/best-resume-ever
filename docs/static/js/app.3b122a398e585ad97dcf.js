webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getVueOptions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_yaml___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_yaml__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_data_yml__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms__ = __webpack_require__(100);





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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resumes_resumes__ = __webpack_require__(43);




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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);





var name = 'left-right';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);





var name = 'oblique';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);





var name = 'side-bar';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);





/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('purple', Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);





var name = 'side-bar-rtl';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(3);




var name = 'left-right-rtl';
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component(name, Object(__WEBPACK_IMPORTED_MODULE_1__options__["a" /* getVueOptions */])(name)));

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('resume', {
  name: 'app'
}));

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(39);





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
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ecc6cb5_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(38);
function injectStyle (ssrContext) {
  __webpack_require__(36)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ecc6cb5_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_resume__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home__ = __webpack_require__(145);





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
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_resume_vue__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5bd461cc_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_resume_vue__ = __webpack_require__(144);
function injectStyle (ssrContext) {
  __webpack_require__(42)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5bd461cc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_resume_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5bd461cc_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_resume_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_dark_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_right_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oblique_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__side_bar_vue__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__purple_vue__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__side_bar_rtl_vue__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__left_right_rtl_vue__ = __webpack_require__(141);









/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_material_dark_vue__ = __webpack_require__(18);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2515ca92_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_material_dark_vue__ = __webpack_require__(125);
function injectStyle (ssrContext) {
  __webpack_require__(45)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2515ca92"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_material_dark_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2515ca92_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_material_dark_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
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
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* #*/ const PERSON = `
name:
  first: 金
  middle: 守
  last: 旺
about: Hi, my name is John Doe. I"m just about the most boring type of person you could
       possibly imagine. I like collecting leaves from the tree in my back yard and documenting
       each time I eat a peanut that is non-uniform. I am not a robot. Please hire me.
position: 前端工程师

birth:
  year: 1996
  location: 苏州

experience:
- company: 苏州数图科技股份有限公司
  position: R&D
  timeperiod: 从 2014 年 9 月份至今
  description: 担任项目开发工程师和公司框架搭建工作。

education:
- degree: 四川农业大学
  timeperiod: 2016.06 至今
  description: 四川农业大学计算机专业（大专）。

# skill level goes 0 to 100
skills:
- name: HTML5
  level: 90
- name: CSS3
  level: 85
- name: JavaScript
  level: 90
- name: Node.js
  level: 40
- name: ES.Next
  level: 80
- name: Vue.js
  level: 80
knowledge: 喜欢 Linux。

contact:
  email: svend.jin@qq.com
  phone: 17625344142
  street: 东方大道1018号
  city: 苏州
  website: https://svend.cc
  github: gee1k
# en, de, fr, pt, ca, cn, it, es, th, pt-br, ru, sv, id, hu, pl, ja, ka, nl, he, zh-tw, lt, ko, el
lang: zh-cn
`
/* harmony export (immutable) */ __webpack_exports__["a"] = PERSON;



/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return terms; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang_en__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang_de__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang_fr__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lang_pt__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lang_ca__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lang_cn__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lang_it__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lang_es__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lang_th__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lang_id__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lang_sv__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lang_ru__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lang_pt_br__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lang_hu__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lang_pl__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lang_he__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lang_ja__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lang_zh_tw__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lang_nl__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__lang_lt__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__lang_tr__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__lang_ko__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lang_el__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__lang_zh_cn__ = __webpack_require__(124);

























var terms = {
  en: __WEBPACK_IMPORTED_MODULE_0__lang_en__["a" /* default */], de: __WEBPACK_IMPORTED_MODULE_1__lang_de__["a" /* default */], fr: __WEBPACK_IMPORTED_MODULE_2__lang_fr__["a" /* default */], pt: __WEBPACK_IMPORTED_MODULE_3__lang_pt__["a" /* default */], ca: __WEBPACK_IMPORTED_MODULE_4__lang_ca__["a" /* default */], cn: __WEBPACK_IMPORTED_MODULE_5__lang_cn__["a" /* default */], it: __WEBPACK_IMPORTED_MODULE_6__lang_it__["a" /* default */], es: __WEBPACK_IMPORTED_MODULE_7__lang_es__["a" /* default */], th: __WEBPACK_IMPORTED_MODULE_8__lang_th__["a" /* default */], 'pt-br': __WEBPACK_IMPORTED_MODULE_12__lang_pt_br__["a" /* default */], ru: __WEBPACK_IMPORTED_MODULE_11__lang_ru__["a" /* default */], sv: __WEBPACK_IMPORTED_MODULE_10__lang_sv__["a" /* default */], id: __WEBPACK_IMPORTED_MODULE_9__lang_id__["a" /* default */], hu: __WEBPACK_IMPORTED_MODULE_13__lang_hu__["a" /* default */], pl: __WEBPACK_IMPORTED_MODULE_14__lang_pl__["a" /* default */], ja: __WEBPACK_IMPORTED_MODULE_16__lang_ja__["a" /* default */], nl: __WEBPACK_IMPORTED_MODULE_18__lang_nl__["a" /* default */], he: __WEBPACK_IMPORTED_MODULE_15__lang_he__["a" /* default */], 'zh-tw': __WEBPACK_IMPORTED_MODULE_17__lang_zh_tw__["a" /* default */], lt: __WEBPACK_IMPORTED_MODULE_19__lang_lt__["a" /* default */], tr: __WEBPACK_IMPORTED_MODULE_20__lang_tr__["a" /* default */], ko: __WEBPACK_IMPORTED_MODULE_21__lang_ko__["a" /* default */], el: __WEBPACK_IMPORTED_MODULE_22__lang_el__["a" /* default */], 'zh-cn': __WEBPACK_IMPORTED_MODULE_23__lang_zh_cn__["a" /* default */]
};

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'Contact',
  born: 'Born',
  bornIn: 'in',
  experience: 'Experience',
  education: 'Education',
  skills: 'Skills',
  about: 'About me'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'Kontakt',
  born: 'Geboren',
  bornIn: 'in',
  experience: 'Berufserfahrung',
  education: 'Schulbildung',
  skills: 'Qualifikationen',
  about: 'Über mich'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'Contact',
  experience: 'Expérience professionelle',
  education: 'Formation',
  skills: 'Compétences',
  about: 'À propos de moi'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'Contactos',
  experience: 'Experiência Profissional',
  education: 'Educação',
  skills: 'Competências',
  about: 'Sobre mim'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'Contacte',
  experience: 'Experiència',
  education: 'Educació',
  skills: 'Habilitats',
  about: 'Sobre mi'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: '联系方式',
  experience: '工作经历',
  education: '教育经历',
  skills: '技能专长',
  about: '自我介绍'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'Contatti',
  experience: 'Esperienza professionale',
  education: 'Formazione',
  skills: 'Competenze',
  about: 'Su di me'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'Contacto',
  experience: 'Experiencia',
  education: 'Educación',
  skills: 'Habilidades',
  about: 'Sobre mi'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 109 */
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
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'Kontak',
  experience: 'Pengalaman',
  education: 'Pendidikan',
  skills: 'Keterampilan',
  about: 'Tentang Saya'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 111 */
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
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'Контакты',
  experience: 'Опыт',
  education: 'Образование',
  skills: 'Навыки',
  about: 'Обо мне'
};

/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'Contato',
  experience: 'Experiência Profissional',

  education: 'Formação Acadêmica',
  skills: 'Competências',
  about: 'Sobre'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'Kapcsolat',
  experience: 'Munkatapasztalat',
  education: 'Tanulmány',
  skills: 'Készségek',
  about: 'Rólam'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'Kontakt',
  experience: 'Doświadczenie',
  education: 'Wykształcenie',
  skills: 'Umiejętności',
  about: 'O mnie'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'יצירת קשר',
  experience: 'ניסיון',
  education: 'השכלה',
  skills: 'כישורים',
  about: 'תמצית'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: '連絡先',
  experience: '職務経歴',
  education: '学歴',
  skills: 'スキル',
  about: '自己紹介'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 118 */
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
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: 'Contact',
  experience: 'Ervaringen',
  education: 'Opleidingen',
  skills: 'Skills',
  about: 'Over mij'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 120 */
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
/* 121 */
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
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: '연락처',
  experience: '경력',
  education: '학력',
  skills: '보유스킬',
  about: '자기소개'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 123 */
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
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var lang = {
  contact: '联系方式',
  experience: '工作经验',
  education: '教育经历',
  skills: '技能',
  about: '自我介紹'
};
/* harmony default export */ __webpack_exports__["a"] = (lang);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume"},[_c('div',{staticClass:"leftCol m_box"},[_c('div',{staticClass:"shadow"}),_vm._v(" "),_c('div',{staticClass:"heading",attrs:{"id":"myselfpic"}}),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v("\r\n      "+_vm._s(_vm.lang.contact)+"\r\n    ")]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"text"},[_c('ul',[_c('li',[_vm._v(" "+_vm._s(_vm.lang.born)+" "+_vm._s(_vm.person.birth.year)+" "+_vm._s(_vm.lang.bornIn)+" "+_vm._s(_vm.person.birth.location))])])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"text"},[_c('ul',[_c('li',[_vm._v(_vm._s(_vm.person.contact.street))]),_vm._v(" "),_c('li',[_vm._v(_vm._s(_vm.person.contact.city))])])])]),_vm._v(" "),_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_c('div',{staticClass:"item"},[_vm._m(2),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("\r\n          "+_vm._s(_vm.person.contact.phone)+"\r\n        ")])])]),_vm._v(" "),_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_c('div',{staticClass:"item"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"text"},[_vm._v("\r\n          "+_vm._s(_vm.person.contact.email)+"\r\n        ")])])]),_vm._v(" "),(_vm.person.contact.github)?_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github,"target":"_blank"}},[_c('div',{staticClass:"item"},[_vm._m(4),_vm._v(" "),_c('div',{staticClass:"text"},[_c('span',[_vm._v("@"+_vm._s(_vm.person.contact.github))]),_vm._v(" "),_c('span',[_vm._v("github.com/"+_vm._s(_vm.person.contact.github))])])])]):_vm._e(),_vm._v(" "),(_vm.person.contact.website)?_c('a',{attrs:{"href":_vm.person.contact.website,"target":"_blank"}},[_c('div',{staticClass:"item"},[_vm._m(5),_vm._v(" "),_c('div',{staticClass:"text"},[_c('span',[_vm._v(_vm._s(_vm.person.contact.website))])])])]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"item last"},[_c('div',{staticClass:"section-headline"},[_vm._v("\r\n        "+_vm._s(_vm.lang.skills)+"\r\n      ")]),_vm._v(" "),_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill"},[_c('div',{staticClass:"right"},[_c('span',[_vm._v(_vm._s(skill.name)+" ")]),_vm._v(" "),_c('div',{staticClass:"progress"},[_c('div',{staticClass:"determinate",style:('width: '+skill.level+'%;')},[_c('i',{staticClass:"fa fa-circle"})])])])])})],2)]),_vm._v(" "),_c('div',{staticClass:"rightCol"},[_c('div',{staticClass:"title"},[_c('h2',[_vm._v(_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last))]),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"block"},[_c('div',{staticClass:"block-helper"}),_vm._v(" "),_c('h3',{staticClass:"headline"},[_vm._v(_vm._s(experience.position)+" - "+_vm._s(experience.company))]),_vm._v(" "),_c('div',{staticClass:"subheadline"},[_vm._v(_vm._s(experience.timeperiod))]),_vm._v(" "),_c('p',{staticClass:"info"},[_vm._v("\r\n          "+_vm._s(experience.description)+"\r\n        ")])])}),_vm._v(" "),_c('div',{staticClass:"section-headline"},[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"block"},[_c('div',{staticClass:"block-helper"}),_vm._v(" "),_c('div',{staticClass:"headline"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('p',{staticClass:"info"},[_vm._v("\r\n        "+_vm._s(education.timeperiod)+", "+_vm._s(education.description)+"\r\n      ")])])})],2),_vm._v(" "),_c('div',{staticStyle:{"clear":"both"}})])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("account_circle")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("location_city")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("phone")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("email")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"fa fa-github"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_c('i',{staticClass:"material-icons"},[_vm._v("language")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_left_right_vue__ = __webpack_require__(24);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_141da9fa_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_left_right_vue__ = __webpack_require__(128);
function injectStyle (ssrContext) {
  __webpack_require__(127)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-141da9fa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_left_right_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_141da9fa_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_left_right_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 127 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume1"}},[_c('div',{staticClass:"row text-center"},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last))])]),_vm._v(" "),_c('div',{staticClass:"row text-center"},[_c('p',{staticClass:"position center"},[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"left half"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])})],2),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('table',[_c('tr',[_c('td',[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1)]),_vm._v(" "),_c('tr',[_c('td',[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))])]),_vm._v(" "),_vm._m(2)]),_vm._v(" "),_c('tr',[_c('td',[_vm._v(_vm._s(_vm.person.contact.street)+" "),_c('br'),_vm._v(" "+_vm._s(_vm.person.contact.city))]),_vm._v(" "),_vm._m(3)]),_vm._v(" "),(_vm.person.contact.website)?_c('tr',[_c('td',[_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v(_vm._s(_vm.person.contact.website))])]),_vm._v(" "),_vm._m(4)]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('tr',[_c('td',[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])]),_vm._v(" "),_vm._m(5)]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"right half"},[_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])})],2),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill-block"},[_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))]),_vm._v(" "),_c('div',{staticClass:"skill-bar"},[_c('div',{staticClass:"level",style:('width: '+skill.level+'%')})])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.knowledge)+" ")])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"image center"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_oblique_vue__ = __webpack_require__(25);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ba1479f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_oblique_vue__ = __webpack_require__(131);
function injectStyle (ssrContext) {
  __webpack_require__(130)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6ba1479f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_oblique_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ba1479f_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_oblique_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 130 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume3"}},[_c('div',{staticClass:"resume-header"},[_c('div',{staticClass:"triangle"}),_vm._v(" "),_c('div',{staticClass:"person-header"},[_c('div',{staticClass:"person-wrapper"},[_c('div',{staticClass:"person"},[_c('div',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last))]),_vm._v(" "),_c('div',{staticClass:"position"},[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_c('div',{staticClass:"img"})])])]),_vm._v(" "),_c('div',{staticClass:"resume-content"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('i',{staticClass:"material-icons"},[_vm._v("details")]),_vm._v(" "),_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(", "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skill-section"},[_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skills"},[_c('div',{staticClass:"skill-block"},[_c('i',{staticClass:"material-icons"},[_vm._v("details")]),_vm._v(" "),_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-other"},[_c('span',[_vm._v(_vm._s(_vm.person.knowledge)+" ")])]),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(" "+_vm._s(_vm.person.contact.email))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.person.contact.street)+", "+_vm._s(_vm.person.contact.city))]),_vm._v(" "),_c('span',[_vm._v("; ")]),_vm._v(" "),(_vm.person.contact.website)?_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v("\r\n              "+_vm._s(_vm.person.contact.website))]):_vm._e(),_vm._v(" "),(_vm.person.contact.website)?_c('span',[_vm._v("; ")]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("\r\n                https://github.com/"+_vm._s(_vm.person.contact.github))]):_vm._e()])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_side_bar_vue__ = __webpack_require__(26);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_efd21640_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_side_bar_vue__ = __webpack_require__(134);
function injectStyle (ssrContext) {
  __webpack_require__(133)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-efd21640"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_side_bar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_efd21640_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_side_bar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 133 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume2"}},[_c('div',{staticClass:"top-row"},[_c('span',{staticClass:"person-name"},[_vm._v("\n          "+_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last)+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"person-position"},[_vm._v("\n          "+_vm._s(_vm.person.position)+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"left-col"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_vm._v("\n                "+_vm._s(_vm.person.contact.street)+" "),_c('br'),_vm._v(" "+_vm._s(_vm.person.contact.city)+"\n            ")]),_vm._v(" "),(_vm.person.contact.github)?_c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"right-col"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" -")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-block"},[_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill"},[_c('span',{staticClass:"skill-name"},[_vm._v(_vm._s(skill.name))])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.knowledge)+" ")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"person-image"},[_c('div',{staticClass:"image-centerer"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_purple_vue__ = __webpack_require__(27);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_01c6f492_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_purple_vue__ = __webpack_require__(137);
function injectStyle (ssrContext) {
  __webpack_require__(136)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-01c6f492"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_purple_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_01c6f492_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_purple_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 136 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"template"}},[_c('div',{attrs:{"id":"resume-header"}},[_c('div',{attrs:{"id":"header-left"}},[_c('h2',{attrs:{"id":"position"}},[_vm._v(_vm._s(_vm.person.position))]),_vm._v(" "),_c('h1',{attrs:{"id":"name"}},[_vm._v(_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.last))]),_vm._v(" "),_c('div',{attrs:{"id":"info-flex"}},[_c('span',{attrs:{"id":"email"}},[_c('a',{attrs:{"href":"mailto:" + _vm.person.contact.email}},[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_c('span',{attrs:{"id":"phone"}},[_c('i',{staticClass:"fa fa-phone-square",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.phone))]),_vm._v(" "),(_vm.person.contact.website)?_c('span',{attrs:{"id":"website"}},[_c('a',{attrs:{"href":_vm.person.contact.website}},[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.website))])]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('span',{attrs:{"id":"github"}},[_c('a',{attrs:{"href":"https://github.com/" + _vm.person.contact.github}},[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.person.contact.github))])]):_vm._e()])]),_vm._v(" "),_vm._m(0)]),_vm._v(" "),_c('div',{attrs:{"id":"resume-body"}},[_c('div',{attrs:{"id":"experience-container"}},[_c('h2',{attrs:{"id":"experience-title"}},[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience"},[_c('h2',{staticClass:"company"},[_vm._v(_vm._s(experience.company))]),_vm._v(" "),_c('p',{staticClass:"job-info"},[_c('span',{staticClass:"job-title"},[_vm._v(_vm._s(experience.position)+" | ")]),_c('span',{staticClass:"experience-timeperiod"},[_vm._v(_vm._s(experience.timeperiod))])]),_vm._v(" "),(experience.description)?_c('p',{staticClass:"job-description"},[_vm._v(_vm._s(experience.description))]):_vm._e(),_vm._v(" "),(experience.list)?_c('ul',_vm._l((experience.list),function(item,index){return _c('li',{key:index},[_c('span',{staticClass:"list-item-black"},[_vm._v("\r\n                        "+_vm._s(item)+"\r\n                      ")])])})):_vm._e()])})],2),_vm._v(" "),_c('div',{attrs:{"id":"education-container"}},[_c('h2',{attrs:{"id":"education-title"}},[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education"},[_c('h2',{staticClass:"education-description"},[_vm._v(_vm._s(education.description))]),_vm._v(" "),_c('p',[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree)+" | ")]),_c('span',{staticClass:"education-timeperiod"},[_vm._v(_vm._s(education.timeperiod))])])])})],2),_vm._v(" "),(_vm.person.skills != [])?_c('div',{attrs:{"id":"skills-container"}},[_c('h2',{attrs:{"id":"skills-title"}},[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"spacer"}),_vm._v(" "),_c('p',{attrs:{"id":"skill-description"}},[_vm._v(_vm._s(_vm.person.knowledge))]),_vm._v(" "),_c('ul',{attrs:{"id":"skill-list"}},_vm._l((_vm.person.skills),function(skill){return _c('li',{key:skill.name,staticClass:"skill"},[_c('span',{staticClass:"list-item-black"},[_vm._v("\r\n                    "+_vm._s(skill.name)+"\r\n                  ")])])}))]):_vm._e()]),_vm._v(" "),_c('div',{attrs:{"id":"resume-footer"}},[(_vm.person.about)?_c('div',[_c('h2',[_vm._v(_vm._s(_vm.lang.about))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.person.about))])]):_vm._e()])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"header-right"}},[_c('div',{attrs:{"id":"headshot"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_side_bar_rtl_vue__ = __webpack_require__(28);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cfdab98_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_side_bar_rtl_vue__ = __webpack_require__(140);
function injectStyle (ssrContext) {
  __webpack_require__(139)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1cfdab98"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_side_bar_rtl_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cfdab98_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_side_bar_rtl_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 139 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume2"}},[_c('div',{staticClass:"top-row"},[_c('span',{staticClass:"person-name"},[_vm._v("\n          "+_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last)+"\n        ")]),_vm._v(" "),_c('span',{staticClass:"person-position"},[_vm._v("\n          "+_vm._s(_vm.person.position)+"\n        ")])]),_vm._v(" "),_c('div',{staticClass:"right-col"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":"'tel:'+person.contact.phone"}},[_vm._v(_vm._s(_vm.person.contact.phone))])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_vm._v("\n                "+_vm._s(_vm.person.contact.street)+" "),_c('br'),_vm._v(" "+_vm._s(_vm.person.contact.city)+"\n            ")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('div',{staticClass:"contact-row"},[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])])])]),_vm._v(" "),_c('div',{staticClass:"left-col"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{staticClass:"experience-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" -")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])])})],2),_vm._v(" "),_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{staticClass:"education-block"},[_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])])})],2),_vm._v(" "),_c('div',{staticClass:"skills-block"},[_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{staticClass:"skill"},[_c('span',{staticClass:"skill-name"},[_vm._v(_vm._s(skill.name))])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.knowledge)+" ")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"person-image"},[_c('div',{staticClass:"image-centerer"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-row dots"},[_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_left_right_rtl_vue__ = __webpack_require__(29);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3feb8409_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_left_right_rtl_vue__ = __webpack_require__(143);
function injectStyle (ssrContext) {
  __webpack_require__(142)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3feb8409"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_left_right_rtl_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3feb8409_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_left_right_rtl_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 142 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume",attrs:{"id":"resume1"}},[_c('div',{staticClass:"row text-center"},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(_vm.person.name.first)+" "+_vm._s(_vm.person.name.middle)+" "+_vm._s(_vm.person.name.last))])]),_vm._v(" "),_c('div',{staticClass:"row text-center"},[_c('p',{staticClass:"position center"},[_vm._v(_vm._s(_vm.person.position))])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"left half"},[_c('div',{staticClass:"experience"},[_c('h3',[_vm._v(_vm._s(_vm.lang.experience))]),_vm._v(" "),_vm._l((_vm.person.experience),function(experience){return _c('div',{key:experience.company,staticClass:"experience-block"},[_c('span',{staticClass:"company"},[_vm._v(" "+_vm._s(experience.company)+" ")]),_vm._v(" "),_c('span',{staticClass:"job-title"},[_vm._v(" "+_vm._s(experience.position)+" ")]),_vm._v(" "),_c('span',{staticClass:"time-period"},[_vm._v(" "+_vm._s(experience.timeperiod))]),_vm._v(" "),_c('span',{staticClass:"job-description"},[_vm._v(" "+_vm._s(experience.description)+" ")])])})],2),_vm._v(" "),_c('div',{staticClass:"contact"},[_c('h3',[_vm._v(_vm._s(_vm.lang.contact))]),_vm._v(" "),_c('table',[_c('tr',[_vm._m(1),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'mailto:'+_vm.person.contact.email}},[_vm._v(_vm._s(_vm.person.contact.email))])])]),_vm._v(" "),_c('tr',[_vm._m(2),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'tel:'+_vm.person.contact.phone}},[_vm._v(_vm._s(_vm.person.contact.phone))])])]),_vm._v(" "),_c('tr',[_vm._m(3),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.person.contact.street)+" "),_c('br'),_vm._v(" "+_vm._s(_vm.person.contact.city))])]),_vm._v(" "),(_vm.person.contact.website)?_c('tr',[_vm._m(4),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":_vm.person.contact.website}},[_vm._v(_vm._s(_vm.person.contact.website))])])]):_vm._e(),_vm._v(" "),(_vm.person.contact.github)?_c('tr',[_vm._m(5),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'https://github.com/'+_vm.person.contact.github}},[_vm._v("https://github.com/"+_vm._s(_vm.person.contact.github))])])]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"right half"},[_c('div',{staticClass:"education"},[_c('h3',[_vm._v(_vm._s(_vm.lang.education))]),_vm._v(" "),_vm._l((_vm.person.education),function(education){return _c('div',{key:education.degree,staticClass:"education-block"},[_c('span',{staticClass:"degree"},[_vm._v(_vm._s(education.degree))]),_vm._v(" "),_c('span',{staticClass:"degree-description"},[_vm._v(_vm._s(education.description))])])})],2),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.lang.skills))]),_vm._v(" "),_c('div',{staticClass:"skills"},_vm._l((_vm.person.skills),function(skill){return _c('div',{key:skill.name,staticClass:"skill-block"},[_c('span',{staticClass:"skill"},[_vm._v(_vm._s(skill.name))]),_vm._v(" "),_c('div',{staticClass:"skill-bar"},[_c('div',{staticClass:"level",style:('width: '+skill.level+'%')})])])})),_vm._v(" "),_c('span',{staticClass:"skills-other"},[_vm._v(" "+_vm._s(_vm.person.skillDescription)+" ")])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"image center"},[_c('div',{staticClass:"img"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('i',{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-wrapper"},[_c('div',{staticClass:"page",attrs:{"id":_vm.$route.params.resumeid}},[_c('div',{staticClass:"page-inner"},[_c(_vm.$route.params.resumeid,{tag:"component"})],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__ = __webpack_require__(30);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5031e17d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__ = __webpack_require__(147);
function injectStyle (ssrContext) {
  __webpack_require__(146)
}
var normalizeComponent = __webpack_require__(2)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5031e17d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5031e17d_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 146 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('h3',{staticClass:"title"},[_vm._v("best-resume-ever")]),_vm._v(" "),_c('div',{staticClass:"previews"},[_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/material-dark'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(148)}}),_vm._v(" "),_c('span',[_vm._v("material-dark")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/left-right'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(149)}}),_vm._v(" "),_c('span',[_vm._v("left-right")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/oblique'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(150)}}),_vm._v(" "),_c('span',[_vm._v("oblique")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/side-bar'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(151)}}),_vm._v(" "),_c('span',[_vm._v("side-bar")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/purple'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(152)}}),_vm._v(" "),_c('span',[_vm._v("purple")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/side-bar-rtl'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(153)}}),_vm._v(" "),_c('span',[_vm._v("side-bar-rtl")])])])],1),_vm._v(" "),_c('div',{staticClass:"preview"},[_c('router-link',{attrs:{"to":'/resume/left-right-rtl'}},[_c('div',{staticClass:"preview-wrapper"},[_c('img',{attrs:{"src":__webpack_require__(154)}}),_vm._v(" "),_c('span',[_vm._v("left-right-rtl")])])])],1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{attrs:{"href":"https://github.com/salomonelli/best-resume-ever","target":"_blank"}},[_c('img',{staticStyle:{"position":"absolute","top":"0","right":"0","border":"0"},attrs:{"src":"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67","alt":"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"logo"},[_c('img',{attrs:{"src":__webpack_require__(155)}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-material-dark.722cd11.png";

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-left-right.4ba1e85.png";

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-oblique.a02cfe1.png";

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-side-bar.f99c742.png";

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-purple.6c93c28.png";

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-side-bar-rtl.abd6c1a.png";

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/resume-left-right-rtl.75f8068.png";

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo.1522a48.png";

/***/ })
],[31]);
//# sourceMappingURL=app.3b122a398e585ad97dcf.js.map