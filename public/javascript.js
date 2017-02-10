'use strict';

// minimum margin of content to bottom of page
var marginBottom = 50;
// DOM-element of <page></page>
var page = void 0;
// all dom elements
var elements = void 0;

/**
 * gets all DOM-elements on page
 * @return {HTMLElement[]} DOM-elements
 */
var getAllDOMElements = function getAllDOMElements() {
    elements = document.getElementsByTagName('*');
};

/**
 * gets DOM-element of #resumeX
 * @return {HTMLElement}
 */
var getResumeDOMElement = function getResumeDOMElement() {
    return page.children[0];
};

/**
 * sets letiable 'page' to DOM-element of <page></page>
 */
var setPageDOMElement = function setPageDOMElement() {
    page = document.getElementsByTagName('page')[0];
};

/**
 * checks whether font needs to be fixed, and if fixes it
 */
var checkFont = function checkFont() {
    var resume = getResumeDOMElement();
    if (contentIsGreaterThanPage(resume)) fixFont();
};

/**
 * checks whether content is greater than page
 * @param  {HTMLElement} resume
 * @return {boolean}        false if content fits to page
 */
var contentIsGreaterThanPage = function contentIsGreaterThanPage(resume) {
    var pageHeight = page.offsetHeight;
    var resumeHeight = resume.offsetHeight + marginBottom;
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
 * sets font size of DOM-element
 * @param {HTMLElement} element
 * @param {number} fontSize
 */
var setFontSizeOfElement = function setFontSizeOfElement(element, fontSize) {
    element.style.fontSize = fontSize + 'px';
};

/**
 * decreases font size of all DOM-elements
 */
var decreaseFontSizes = function decreaseFontSizes() {
    var current = void 0,
        newFontSize = void 0;
    for (var i = 0; i < elements.length; i++) {
        current = elements[i];
        newFontSize = getFontSizeOfElement(current) * 0.99;
        setFontSizeOfElement(current, newFontSize);
    }
};

/**
 * decreases font size until content fits to page
 */
var fixFont = function fixFont() {
    decreaseFontSizes();
    var resume = getResumeDOMElement();
    if (contentIsGreaterThanPage(resume)) fixFont();
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
 * removes box shadow from element
 * @param  {HTMLElement} element
 */
var removeBoxShadowOfElement = function removeBoxShadowOfElement(element) {
    element.style.boxShadow = 'none';
};

/**
 * gets border radius of element
 * @param  {HTMLElement} element
 * @return {String}         e.g. '50%'
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
 * fixes box shadow of element
 * @param  {HTMLElement} element
 * @param  {string} boxShadow e.g. 'rgba(0, 0, 0, 0.137255) 0px 2px 2px 0px'
 */
var fixBoxShadow = function fixBoxShadow(element, boxShadow) {
    var position = getAbsolutePositionOfElement(element);
    removeBoxShadowOfElement(element);
    addNewBoxShadow(element, position, boxShadow);
};

/**
 * gets all elements with shadows
 * @return {HTMLElement[]} elements with shadows
 */
var getElementsWithShadows = function getElementsWithShadows() {
    var current = void 0,
        boxShadow = void 0;
    var ret = [];
    for (var i = 0; i < elements.length; i++) {
        current = elements[i];
        boxShadow = hasBoxShadow(current);
        if (hasBoxShadow(current) != '') ret.push({
            element: current,
            shadow: boxShadow
        });
    }
    return ret;
};

/**
 * fixes shadows, since normal box-shadow cannot be printed in chrome,
 * see: http://stackoverflow.com/questions/13975198/text-shadow-and-box-shadow-while-printing-chrome
 */
var fixBoxShadows = function fixBoxShadows() {
    var elementsWithShadow = getElementsWithShadows();
    for (var i = 0; i < elementsWithShadow.length; i++) {
        fixBoxShadow(elementsWithShadow[i].element, elementsWithShadow[i].shadow);
    }
};

var isResume = function isResume() {
    if (document.getElementsByTagName('page')[0]) return true;else return false;
};

var fixResume = function fixResume() {
    if (!isResume()) return;
    getAllDOMElements();
    fixBoxShadows();
    setPageDOMElement();
    checkFont();
};

fixResume();
