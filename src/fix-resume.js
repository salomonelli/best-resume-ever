/**
 * gets all DOM-elements on page
 * @return {HTMLElement[]} DOM-elements
 */
const getAllDOMElements = () => {
  return document.getElementsByTagName('*');
};

/**
 * gets DOM-element of #resumeX
 * @param {HTMLElement} page
 * @return {HTMLElement}
 */
const getResumeDOMElement = page => {
  return page.children[0];
};

/**
 * returns DOM-element of <page></page>
 * @return {HTMLElement}
 */
const getPageDOMElement = () => {
  return document.getElementsByTagName('page')[0];
};

/**
 * checks whether auto-font adjustment is enabled for resume
 * @param  {HTMLElement} resume
 * @return {boolean}
 */
const autoFontEnabled = resume => {
  return resume.hasAttribute('autofont');
};

/**
 * checks whether content is greater than page
 * @param  {HTMLElement} resume
 * @param  {HTMLElement} page
 * @return {boolean}        false if content fits to page
 */
const contentIsGreaterThanPage = (resume, page) => {
  const pageHeight = page.offsetHeight;
  const resumeHeight = resume.offsetHeight;
  if (pageHeight < resumeHeight) return true;
  else return false;
};

/**
 * gets font size of DOM-elemnt
 * @param  {HTMLElement} element
 * @return {number}         font size of element
 */
const getFontSizeOfElement = element => {
  const style = window.getComputedStyle(element, null).getPropertyValue('font-size');
  return parseFloat(style);
};

/**
 * calculates new font size of all DOM-elements
 * @param {HTMLElement[]}
 */
const calcNewFontSizes = elements => {
  return elements
    .map(el => getFontSizeOfElement(el) * 0.99);
};

/**
 * checks if DOM-element has box-shadow
 * @param  {HTMLElement}  element
 * @return {string} '' if no shadow, otherwise shadow e.g. 'rgba(0, 0, 0, 0.137255) 0px 2px 2px 0px'
 */
const hasBoxShadow = element => {
  const style = window
    .getComputedStyle(element, null)
    .getPropertyValue('box-shadow');
  if (style !== 'none') return style;
  else return '';
};

/**
 * gets absolute position of element
 * @param  {HTMLElement} element
 * @return {{}}
 */
const getAbsolutePositionOfElement = element => {
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
const getBorderRadiusOfElement = element => {
  return window
    .getComputedStyle(element, null)
    .getPropertyValue('border-radius');
};

/**
 * adds new box shadow
 * @param {HTMLElement} element
 * @param {{}} position  e.g. { left: 10, top: 100}
 * @param {string} boxShadow e.g. 'rgba(0, 0, 0, 0.137255) 0px 2px 2px 0px'
 */
const addNewBoxShadow = (element, position, boxShadow) => {
  let div = document.createElement('div');
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
const getElementsWithShadows = elements => {
  const ar = [].slice.call(elements);
  return ar
    .filter(el => hasBoxShadow(el) !== '')
    .map(el => {
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
const fixBoxShadows = () => {
  const elements = getAllDOMElements();
  const elementsWithShadow = getElementsWithShadows(elements);
  elementsWithShadow.forEach(element => {
    const position = getAbsolutePositionOfElement(element.element);
    element.element.style.boxShadow = 'none';
    addNewBoxShadow(element.element, position, element.shadow);
  });
};

/**
 * checks if the page contains a resume
 * @return {Boolean} true if page contains resume
 */
const isResume = () => {
  console.log(document.getElementsByTagName('page')[0]);
  if (document.getElementsByTagName('page')[0]) return true;
  else return false;
};

/**
 * checks whether font needs to be fixed, and if fixes it
 */
const checkFont = () => {
  const page = getPageDOMElement();
  const resume = getResumeDOMElement(page);
  const fixFont = (resume, page) => {
    const elements = getAllDOMElements();
    const elementsAr = [].slice.call(elements);
    const newFontSizes = calcNewFontSizes(elementsAr);
    elementsAr.forEach((el, i) => (el.style.fontSize = newFontSizes[i] + 'px'));
    if (contentIsGreaterThanPage(resume, page)) fixFont(resume, page);
  };
  if (
    autoFontEnabled(resume) &&
    contentIsGreaterThanPage(resume, page)
  ) fixFont(resume, page);
};

/**
 * fixes resume
 */
export const fixResume = () => {
  console.log('aaaaaaaaaaaaaa');
  if (!isResume()) return;
  checkFont();
  fixBoxShadows();
};

fixResume();
