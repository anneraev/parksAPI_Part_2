const apiBaseUrl = "http://localhost:8088"

//gets all items in the specified api directory. The passed argument is the name of the directory.
const getAllItems = (directoryName) => fetch(`${apiBaseUrl}/${directoryName}`).then(response => response.json())

//delete's specified item from specified api directory. The first argument passed is the name of the directory, the second is the ID of the item to delete.
const deleteItem = (directoryName, parkId) => fetch(`${apiBaseUrl}/${directoryName}/${parkId}`, {
    method: "DELETE"
})