'use strict';

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

/**
 * checks if the page contains a resume
 * @return {Boolean} true if page contains resume
 */
var isResume = function isResume() {
    if (document.getElementsByTagName('page')[0]) return true;else return false;
};

/**
 * fixes resume
 */
var fixResume = function fixResume() {
    if (!isResume()) return;
    getAllDOMElements();
    fixBoxShadows();
};

fixResume();
