const buildParkHtml = (parkObject, directoryName) => {
  //create main article tag.
  const parkArticle = buildElement("article", `national-park--${parkObject.id}`);
  console.log("main article element", parkArticle)
  //create h3 heading, no ID,
  parkArticle.appendChild(buildElement("h3", undefined, parkObject.name));
  parkArticle.appendChild(buildElement("p", undefined, parkObject.state));

    //Note: Vist and edit buttons need to  be edited to pass directory name to work with monuments.
    //Visted Button. Pass (elementType, elementId, elementTextContent)
  if (parkObject.visited !== true){
    let visitedParkButton = buildElement("button", undefined, "Visied Park");
    parkArticle.appendChild(visitedParkButton);
    visitedParkButton.addEventListener("click", (event) => {
      handleVisted(event, directoryName)
    });
  }

  //Create Edit button and attach event listener.
  let editParkButton  = buildElement("button", undefined, "Edit Park");
  parkArticle.appendChild(editParkButton);
  editParkButton.addEventListener("click", (event) => {
    handleEdit(event, directoryName);
  });

  //reference to delete button, created with the buildElement button. Passes the element type (button) as Id of the park object (passed from the function that calls this function) and the text content the element (delete park)).
  let deleteParkButton = buildElement("button", undefined, "Delete Park")
  parkArticle.appendChild(deleteParkButton);
  //adds an event listener for "click" event with a callback function that handles the deletion of the object.
  deleteParkButton.addEventListener("click", (event) => {
    handleDelete(event, directoryName);
  });
  //returns the HTML.
  return parkArticle;
};

const parkEditForm = (parkObject) => {
  //reference to document fragment.
  let editFormFragment = document.createDocumentFragment()
  //build element pass (elementType, elementId, elementTextContent, elementValue, inputType)
  editFormFragment.appendChild(buildElement("label", undefined, "Name: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-name--${parkObject.id}`, undefined, parkObject.name))

  editFormFragment.appendChild(buildElement("label", undefined, "State: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-state--${parkObject.id}`, undefined, parkObject.state))

  editFormFragment.appendChild(buildElement("label", undefined, "Latitude: "));
  editFormFragment.appendChild(buildElement("input", `edit-park-latitude--${parkObject.id}`, undefined, parkObject.latitude));
  console.log(parkObject.latitude);

  editFormFragment.appendChild(buildElement("label", undefined, "Longitude: "));
  editFormFragment.appendChild(buildElement("input", `edit-park-longitude--${parkObject.id}`, undefined, parkObject.longitude));

  console.log("latitude", parkObject.latitude)

  //visted checkbox.
  //pass (elementType, elementId, elementTextContent, elementValue, elementType)
  editFormFragment.appendChild(buildElement("label", undefined, "Visited? "));
  editFormFragment.appendChild(buildElement("input", `edit-park-visited--${parkObject.id}`, "Visited?", "true", "checkbox", parkObject.visited))

  const updateParkButton = buildElement("button", undefined, "Update")
  updateParkButton.addEventListener("click", handleUpdate)
  editFormFragment.appendChild(updateParkButton)

  return editFormFragment
}
