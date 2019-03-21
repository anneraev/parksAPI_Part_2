const apiBaseUrl = "http://localhost:8088"

const getAllItems = (directoryName) => fetch(`${apiBaseUrl}/${directoryName}`).then(response => response.json())

const deleteItems = (directoryName, parkId) => fetch(`${apiBaseUrl}/${directoryName}/${parkId}`, {
  method: "DELETE"
})
