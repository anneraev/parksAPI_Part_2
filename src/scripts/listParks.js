const listParks = (directoryName) => {
  //fetches all items in directory name, then...
  getAllItems(directoryName).then(parksArray => {
    console.log("parksArray", parksArray)
    //reference to a created fragment to which new HTML elements will be written.
    let parksFragment = document.createDocumentFragment();

    //This iterates through the array of parks and for each one passes that park object to a function that builds the HTML, stores it in a variable that can then be passed to the appendChild function to append the HTML to the parks fragment.
    parksArray.forEach(park => {
      let parkHtml = buildParkHtml(park, directoryName, park.id);
      parksFragment.appendChild(parkHtml);
    });

    //gets reference to the section containing the dom list, then clears and recreates the DOM list using the current database. Accepts the currently accessed directoryName to find the appropriate element.
    const parksSection = document.querySelector(`#national--${directoryName}`);
    console.log("park section", parksSection)
    clearElement(parksSection)
    //pass directory name to function that capitalizes the first letter.
    const capitalizedDirectoryName = capitalize(directoryName);
    //adds title to parksSetion.
    parksSection.appendChild(buildElement("h2", undefined, `National ${capitalizedDirectoryName}`));
    parksSection.appendChild(parksFragment)

  });
};