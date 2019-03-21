const listParks = (directoryName) => {
  getAllItems(directoryName).then(parksArray => {
    console.log("parksArray", parksArray)
    let parksFragment = document.createDocumentFragment();

    parksArray.forEach(park => {
      let parkHtml = buildParkHtml(park);
      parksFragment.appendChild(parkHtml);
    });

    //for national parks.
    const nationalParksSection = document.querySelector("#national--parks");
    clearElement(nationalParksSection)
    nationalParksSection.appendChild(parksFragment)

    //for monuments
  });
};
