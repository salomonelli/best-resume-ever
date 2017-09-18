
const getElements = elements => {
  if (elements && elements.length > 0) return elements;
  elements = document.getElementsByTagName('*');
  let ret = [];
  for (const element of elements) {
    const style = window.getComputedStyle(element, null).getPropertyValue('box-shadow');
    if (style !== 'none') {
      element.style.boxShadow = 'none';
      ret.push({
        shadow: style,
        top: element.offsetTop + 'px',
        left: element.offsetLeft + 'px',
        width: element.getBoundingClientRect().width + 'px',
        height: element.getBoundingClientRect().height + 'px'
      });
    }
  }
  return ret;
};

const generateElements = elements => {
  let ret = '<div id="chrome-shadow-fixer">';
  elements.forEach((el, i) => (ret += '<div id="chrome-shadow-fixer-' + i + '"></div>'));
  ret += '</div>';
  return ret;
};

export const fix = elements => {
  const elementsWithShadows = getElements(elements);
  if (elementsWithShadows.length < 1) {
    console.warn('fixShadows(): No elements to fix shadows.');
    return;
  }
  const generatedElements = generateElements(elementsWithShadows);
  document.body.innerHTML += generatedElements;
  elementsWithShadows.forEach((el, i) => {
    const element = document.querySelector('#chrome-shadow-fixer-' + i);
    element.style.height = el.height;
    element.style.width = el.width;
    element.style.left = el.left;
    element.style.top = el.top;
    element.style.position = 'absolute';
    element.style.boxShadow = el.shadow;
    element.style['-webkit-print-color-adjust'] = 'exact';
    element.style['-webkit-filter'] = 'opacity(1)';
  });
  return elementsWithShadows;
};
