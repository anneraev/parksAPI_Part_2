const handleDelete = () => {
  console.log("delete button clicked", event.target.id.split("--")[1]);
  let parkId = event.target.id.split("--")[1];

  deleteItem("parks", parkId)
  .then(() => listNationalParks())
};
