const handleDelete = (event, directoryName) => {
  console.log("delete button clicked", event.target.id.split("--")[1]);
  //gets the item id number from the event by using the split method. String will split into two items in an array at the "--", the second item will be the id number.
  let itemId = event.target.id.split("--")[1];


  //deletes specified item (directoryName, Id of item), then calls function to rebuild the list.
  deleteItem(directoryName, itemId)
  .then(() => listParks(directoryName))
};
