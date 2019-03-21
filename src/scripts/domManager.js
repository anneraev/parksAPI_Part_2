const buildElement = (elementType, elementId, elementTextContent) => {
  let htmlElement = document.createElement(elementType);
  console.log(elementId);
  if (elementId) {
    htmlElement.setAttribute("id", elementId);
    console.log(elementId)
  }
  htmlElement.textContent = elementTextContent;
  return htmlElement;
};

clearElement = domElement => {
  while (domElement.firstChild) {
    domElement.removeChild(domElement.firstChild);
  }
};

//for national parks
const displayContainer = document.querySelector("#display-container");
displayContainer.appendChild(buildElement("section", "national--parks"));
