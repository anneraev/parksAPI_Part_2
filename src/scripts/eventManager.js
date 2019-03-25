const handleDelete = (event, directoryName) => {
  console.log("delete button clicked", event.target.parentNode.id.split("--")[1]);
  //gets the item id number from the event by using the split method. String will split into two items in an array at the "--", the second item will be the id number. Tagets ID of parent Node to keep from needing to add the same ID to muliple elements.
  let itemId = event.target.parentNode.id.split("--")[1];


  //deletes specified item (directoryName, Id of item), then calls function to rebuild the list.
  deleteItem(directoryName, itemId)
  .then(() => listParks(directoryName))
};

//when visited button is clicked.
const handleVisited = (event, directoryName) => {
  console.log(
    "visited button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  let visitedParkObject = {
    visited: true
  };

  patchPark(parkId, visitedParkObject, directoryName).then(() => listNationalParks());
};

const handleEdit = (event, directoryName) => {
  console.log("edit button clicked", event.target.parentNode.id.split("--")[1]);
  let parkId = event.target.parentNode.id.split("--")[1];

  const parkArticle = document.querySelector(`#national-park--${parkId}`);
  clearElement(parkArticle);

  getPark(parkId, directoryName).then(parkToEdit => {
    const editFormForPark = parkEditForm(parkToEdit);
    parkArticle.appendChild(editFormForPark);
  });
};

const handleUpdate = (event, directoryName) => {
  console.log(
    "update button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  const editedParkName = document.querySelector(`#edit-park-name--${parkId}`);
  const editedParkState = document.querySelector(`#edit-park-state--${parkId}`);
  const editedParkLatitude = document.querySelector(`#edit-park-latitude--${parkId}`);
  const editedParkLongitude = document.querySelector(`#edit-park-longitude--${parkId}`);
  const visitedBool = document.querySelector(`#edit-park-visited--${parkId}`);


  console.log(editedParkName.value, editedParkState.value);

  let editedPark = {
    name: editedParkName.value,
    state: editedParkState.value,
    latitude: editedParkLatitude.value,
    longitude: editedParkLongitude.value,
    visited: visitedBool.checked
  };

  console.log(editedPark);

  putPark(parkId, editedPark, directoryName).then(() => listNationalParks());
};
