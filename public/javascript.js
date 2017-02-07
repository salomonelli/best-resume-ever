// minimum margin of content to bottom of page
var marginBottom = 50;
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
 * sets variable 'page' to DOM-element of <page></page>
 */
function setPageDOMElement() {
    page = document.getElementsByTagName('page')[0];
}

/**
 * checks whether font needs to be fixed, and if fixes it
 */
function checkFont() {
    var resume = getResumeDOMElement();
    if (contentIsGreaterThanPage(resume)) fixFont();
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
    var style = window
        .getComputedStyle(element, null)
        .getPropertyValue('font-size');
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
        newFontSize = getFontSizeOfElement(current) * 0.99;
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

/**
 * checks if DOM-element has box-shadow
 * @param  {HTMLElement}  element
 * @return {String} '' if no shadow, otherwise shadow e.g. 'rgba(0, 0, 0, 0.137255) 0px 2px 2px 0px'
 */
function hasBoxShadow(element) {
    var style = window
        .getComputedStyle(element, null)
        .getPropertyValue('box-shadow');
    if (style != 'none') return style;
    else return '';
}

/**
 * gets absolute position of element
 * @param  {HTMLElement} element
 * @return {{}}
 */
function getAbsolutePositionOfElement(element) {
    return {
        top: element.getBoundingClientRect().top,
        left: element.getBoundingClientRect().left
    }
}


/**
 * removes box shadow from element
 * @param  {HTMLElement} element
 */
function removeBoxShadowOfElement(element) {
    element.style.boxShadow = 'none';
}


/**
 * gets border radius of element
 * @param  {HTMLElement} element
 * @return {String}         e.g. '50%'
 */
function getBorderRadiusOfElement(element) {
    return window
        .getComputedStyle(element, null)
        .getPropertyValue('border-radius');
}

/**
 * adds new box shadow
 * @param {HTMLElement} element
 * @param {{}} position  e.g. { left: 10, top: 100}
 * @param {String} boxShadow e.g. 'rgba(0, 0, 0, 0.137255) 0px 2px 2px 0px'
 */
function addNewBoxShadow(element, position, boxShadow) {
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
}

/**
 * fixes box shadow of element
 * @param  {HTMLElement} element
 * @param  {String} boxShadow e.g. 'rgba(0, 0, 0, 0.137255) 0px 2px 2px 0px'
 */
function fixBoxShadow(element, boxShadow) {
    var position = getAbsolutePositionOfElement(element);
    removeBoxShadowOfElement(element);
    addNewBoxShadow(element, position, boxShadow);
}

/**
 * gets all elements with shadows
 * @return {HTMLElement[]} elements with shadows
 */
function getElementsWithShadows() {
    var elements = getAllDOMElements();
    var current, boxShadow;
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
}

/**
 * fixes shadows, since normal box-shadow cannot be printed in chrome,
 * see: http://stackoverflow.com/questions/13975198/text-shadow-and-box-shadow-while-printing-chrome
 */
function fixBoxShadows() {
    var elementsWithShadow = getElementsWithShadows();
    for (var i = 0; i < elementsWithShadow.length; i++) {
        fixBoxShadow(elementsWithShadow[i].element, elementsWithShadow[i].shadow);
    }
}

fixBoxShadows();
setPageDOMElement();
checkFont();
