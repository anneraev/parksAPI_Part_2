const buildParkHtml = (parkObject, directoryName) => {
  //create main article tag.
  const parkArticle = buildElement("article");
  console.log("main article element", parkArticle)
  //create h3 heading, no ID,
  parkArticle.appendChild(buildElement("h3", undefined, parkObject.name));
  parkArticle.appendChild(buildElement("p", undefined, parkObject.state));
  //reference to delete button, created with the buildElement button. Passes the element type (button) as Id of the park object (passed from the function that calls this function) and the text content the element (delete park)).
  let deleteParkButton = buildElement("button", `delete-park--${parkObject.id}`, "Delete Park")
  parkArticle.appendChild(deleteParkButton);
  //adds an event listener for "click" event with a callback function that handles the deletion of the object.
  deleteParkButton.addEventListener("click", (event) => {
    handleDelete(event, directoryName);
  });
  //returns the HTML.
  return parkArticle;
};