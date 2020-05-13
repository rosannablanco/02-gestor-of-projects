const elementHtml = (tag, parent) => {
  const element = document.createElement(tag);
  parent.appendChild(element);
  return element;
};
const textElementInner = (text) => {
  const innerText = document.createTextNode(text);
  return innerText;
};
export default {elementHtml, textElementInner};

//# sourceMappingURL=createElement.js.map
