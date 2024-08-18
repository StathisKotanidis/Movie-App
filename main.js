fetch("http://www.omdbapi.com/?t=Jaws&apikey=a64c27d1")
  .then((response) => {
    if (!response.ok) {
      console.error(
        `Network response was not ok. Status: ${response.status} - ${response.statusText}`
      );
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
