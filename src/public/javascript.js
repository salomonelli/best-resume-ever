// minimum margin of content to bottom of page
var marginBottom = 0;
// DOM-element of <page></page>
var page;

/**
 * gets all DOM-elements on page
 * @return {HTMLElement[]} DOM-elements
 */
function getAllDOMElements() {
    return document.getElementsByTagName('*');
}

/**
 * gets DOM-element of #resumeX
 * @return {HTMLElement}
 */
function getResumeDOMElement() {
    return page.children[0];
}

/**
 * sets variable "page" to DOM-element of <page></page>
 */
function setPageDOMElement() {
    page = document.getElementsByTagName('page')[0];
}

function autoFontEnabled(resume) {
    return resume.hasAttribute('autofont');
}

/**
 * checks whether font needs to be fixed, and if fixes it
 */
function checkFont() {
    var resume = getResumeDOMElement();
    if (autoFontEnabled(resume) && contentIsGreaterThanPage(resume)) fixFont();
}

/**
 * checks whether content is greater than page
 * @param  {HTMLElement} resume
 * @return {Boolean}        false if content fits to page
 */
function contentIsGreaterThanPage(resume) {
    var pageHeight = page.offsetHeight;
    var resumeHeight = resume.offsetHeight + marginBottom;
    if (pageHeight < resumeHeight) return true;
    else return false;
}

/**
 * gets font size of DOM-elemnt
 * @param  {HTMLElement} element
 * @return {Number}         font size of element
 */
function getFontSizeOfElement(element) {
    var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    return parseFloat(style);
}

/**
 * sets font size of DOM-element
 * @param {HTMLElement} element
 * @param {Number} fontSize
 */
function setFontSizeOfElement(element, fontSize) {
    element.style.fontSize = fontSize + 'px';
}

/**
 * decreases font size of all DOM-elements
 */
function decreaseFontSizes() {
    var elements = getAllDOMElements();
    var current;
    for (var i = 0; i < elements.length; i++) {
        current = elements[i];
        var newFontSize = getFontSizeOfElement(current) * 0.99;
        setFontSizeOfElement(current, newFontSize);
    }
}

/**
 * decreases font size until content fits to page
 */
function fixFont() {
    decreaseFontSizes();
    var resume = getResumeDOMElement();
    if (contentIsGreaterThanPage(resume)) fixFont();
}

setPageDOMElement();
checkFont();
