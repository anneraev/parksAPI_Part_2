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

const buildElement = (elementType, elementId, elementTextContent, elementValue, inputType, check) => {
  //creates an element by passing the name of that element type (element type) to the createElement function.
  let htmlElement = document.createElement(elementType);
  console.log("created element", htmlElement)
  console.log(elementId);

  //adds id if function call passes an id name.
  if (elementId) {
    console.log("this has an element id")
    htmlElement.setAttribute("id", elementId);
  }
  //adds value if function call passes a value.
  if (elementValue) {
    htmlElement.setAttribute("value", elementValue);
  }

    //adds inputType if function call passes one. Also, if inputType is a checkbox, sets the checked state of the box (so long as a checked state is also passed).
    if (inputType) {
      htmlElement.setAttribute("type", inputType);
      if (inputType === "checkbox" && check) {
        htmlElement.checked = check
      };
    };

  //sets text content to the value of elementTextContent.
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
