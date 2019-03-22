//Capitalizes a word by splitting it into multiple letters in an array
const capitalize = (value) => {
  const wordArray = value.split("");
  //(.split("")), targeting the first item in that array (the first letter), using a built in method that returns the upper case of a string, using the reduce function to flatten the array back down to a word and returnin that word.
  wordArray[0] = wordArray[0].toUpperCase();
  console.log(wordArray);
  return wordArray.reduce(
    (wholeWord, nextLetter) => wholeWord += nextLetter
    );
}

const buildElement = (elementType, elementId, elementTextContent) => {
  //creates an element by passing the name of that element type (element type) to the createElement function.
  let htmlElement = document.createElement(elementType);
  console.log("created element", htmlElement)
  console.log(elementId);
  //if there's an element id passed, set the attribute of the html element to the elementId passed.
  if (elementId) {
    console.log("this has an element id")
    htmlElement.setAttribute("id", elementId);
  }
  //set the text content of html element to element textContext.
  htmlElement.textContent = elementTextContent;

  //returns the htmlElement string.
  return htmlElement;
};

//dom element passed from function call.
clearElement = domElement => {
  console.log("element to clear", domElement);
  //when the first child of the dom element exists.
  while (domElement.firstChild) {
    //remove that dom element.
    domElement.removeChild(domElement.firstChild);
  }
};

//references to display container, and creates sections to append to Dom element display container. This is where the lists will be written to and removed from.
const displayContainer = document.querySelector("#display-container");
const parksSection = buildElement("section", "national--parks");
const monumentsSection= buildElement("section", "national--monuments");
displayContainer.appendChild(parksSection);
displayContainer.appendChild(monumentsSection);
