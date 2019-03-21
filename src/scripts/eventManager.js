const handleDelete = (directoryName) => {
  console.log("delete button clicked", event.target.id.split("--")[1]);
  let itemId = event.target.id.split("--")[1];


  //deletes specified item (directoryName, Id of item), then calls function to rebuild the list.
  deleteItem(directoryName, itemId)
  .then(() => listParks(directoryName))
};
