const apiBaseUrl = "http://localhost:8088"

//gets the information from the specified API. The passed arument is the name of the directory being accessed.
const getAllItems = (directoryName) => fetch(`${apiBaseUrl}/${directoryName}`).then(response => response.json())

//Deletes the specified item. The first argument passed is the name of the directory the item will be deleted from, the second is the ID of the item.
const deleteItem = (directoryName, itemId) => fetch(`${apiBaseUrl}/${directoryName}/${itemId}`, {
  method: "DELETE"
})
