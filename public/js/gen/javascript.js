'use strict';

/**
 * gets all DOM-elements on page
 * @return {HTMLElement[]} DOM-elements
 */
var getAllDOMElements = function getAllDOMElements() {
  return document.getElementsByTagName('*');
};

/**
 * gets DOM-element of #resumeX
 * @param {HTMLElement} page
 * @return {HTMLElement}
 */
var getResumeDOMElement = function getResumeDOMElement(page) {
  return page.children[0];
};

/**
 * returns DOM-element of <page></page>
 * @return {HTMLElement}
 */
var getPageDOMElement = function getPageDOMElement() {
  return document.getElementsByTagName('page')[0];
};

/**
 * checks whether auto-font adjustment is enabled for resume
 * @param  {HTMLElement} resume
 * @return {boolean}
 */
var autoFontEnabled = function autoFontEnabled(resume) {
  return resume.hasAttribute('autofont');
};

/**
 * checks whether content is greater than page
 * @param  {HTMLElement} resume
 * @param  {HTMLElement} page
 * @return {boolean}        false if content fits to page
 */
var contentIsGreaterThanPage = function contentIsGreaterThanPage(resume, page) {
  var pageHeight = page.offsetHeight;
  var resumeHeight = resume.offsetHeight;
  if (pageHeight < resumeHeight) return true;else return false;
};

/**
 * gets font size of DOM-elemnt
 * @param  {HTMLElement} element
 * @return {number}         font size of element
 */
var getFontSizeOfElement = function getFontSizeOfElement(element) {
  var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
  return parseFloat(style);
};

/**
 * calculates new font size of all DOM-elements
 * @param {HTMLElement[]}
 */
var calcNewFontSizes = function calcNewFontSizes(elements) {
  return elements.map(function (el) {
    return getFontSizeOfElement(el) * 0.99;
  });
};

/**
 * checks if DOM-element has box-shadow
 * @param  {HTMLElement}  element
 * @return {string} '' if no shadow, otherwise shadow e.g. 'rgba(0, 0, 0, 0.137255) 0px 2px 2px 0px'
 */
var hasBoxShadow = function hasBoxShadow(element) {
  var style = window.getComputedStyle(element, null).getPropertyValue('box-shadow');
  if (style != 'none') return style;else return '';
};

/**
 * gets absolute position of element
 * @param  {HTMLElement} element
 * @return {{}}
 */
var getAbsolutePositionOfElement = function getAbsolutePositionOfElement(element) {
  return {
    top: element.getBoundingClientRect().top,
    left: element.getBoundingClientRect().left
  };
};

/**
 * gets border radius of element
 * @param  {HTMLElement} element
 * @return {string}         e.g. '50%'
 */
var getBorderRadiusOfElement = function getBorderRadiusOfElement(element) {
  return window.getComputedStyle(element, null).getPropertyValue('border-radius');
};

/**
 * adds new box shadow
 * @param {HTMLElement} element
 * @param {{}} position  e.g. { left: 10, top: 100}
 * @param {string} boxShadow e.g. 'rgba(0, 0, 0, 0.137255) 0px 2px 2px 0px'
 */
var addNewBoxShadow = function addNewBoxShadow(element, position, boxShadow) {
  var div = document.createElement('div');
  div.style.height = element.offsetHeight;
  div.style.width = element.offsetWidth;
  div.style.borderRadius = getBorderRadiusOfElement(element);
  div.style.position = 'absolute';
  div.style.boxShadow = boxShadow;
  div.style.webkitPrintColorAdjust = 'exact';
  div.style.webkitFilter = 'opacity(1)';
  div.style.top = position.top;
  div.style.left = position.left;
  document.getElementsByTagName('body')[0].appendChild(div);
};

/**
 * gets all elements with shadows
 * @param {HTMLElement[]} elements on page
 * @return {HTMLElement[]} elements with shadows
 */
var getElementsWithShadows = function getElementsWithShadows(elements) {
  var ar = [].slice.call(elements);
  return ar.filter(function (el) {
    return hasBoxShadow(el) != '';
  }).map(function (el) {
    return {
      element: el,
      shadow: hasBoxShadow(el)
    };
  });
};

/**
 * fixes shadows, since normal box-shadow cannot be printed in chrome,
 * see: http://stackoverflow.com/questions/13975198/text-shadow-and-box-shadow-while-printing-chrome
 */
var fixBoxShadows = function fixBoxShadows() {
  var elements = getAllDOMElements();
  var elementsWithShadow = getElementsWithShadows(elements);
  elementsWithShadow.forEach(function (element) {
    var position = getAbsolutePositionOfElement(element.element);
    element.element.style.boxShadow = 'none';
    addNewBoxShadow(element.element, position, element.shadow);
  });
};

/**
 * checks if the page contains a resume
 * @return {Boolean} true if page contains resume
 */
var isResume = function isResume() {
  if (document.getElementsByTagName('page')[0]) return true;else return false;
};

/**
 * checks whether font needs to be fixed, and if fixes it
 */
var checkFont = function checkFont() {
  var page = getPageDOMElement();
  var resume = getResumeDOMElement(page);
  var fixFont = function fixFont(resume, page) {
    var elements = getAllDOMElements();
    var elementsAr = [].slice.call(elements);
    var newFontSizes = calcNewFontSizes(elementsAr);
    elementsAr.forEach(function (el, i) {
      return el.style.fontSize = newFontSizes[i] + 'px';
    });
    if (contentIsGreaterThanPage(resume, page)) fixFont(resume, page);
  };
  if (autoFontEnabled(resume) && contentIsGreaterThanPage(resume, page)) fixFont(resume, page);
};

var isElectron = function isElectron() {
  return window && window.process && window.process.type;
};

/**
 * fixes resume
 */
var fixResume = function fixResume() {
  if (!isResume()) return;
  checkFont();
  //if (isElectron())
  fixBoxShadows();
};

fixResume();
//# sourceMappingURL=javascript.js.map
