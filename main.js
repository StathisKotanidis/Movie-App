const searchbarInput = document.querySelector("#searchbar");
const searchBtn = document.querySelector("#search-button");
const movieYear = document.querySelector("#year");
const movieGenre = document.querySelector("#genre");
const movieCast = document.querySelector("#cast");
const movieDuration = document.querySelector("#duration");
const movieLanguage = document.querySelector("#language");
const movieRating = document.querySelector("#rating");
const moviePlot = document.querySelector("#plot");
const moviePoster = document.querySelector("#poster");
const movieTitle = document.querySelector("#title");
const movieDetails = document.querySelector(".movie-details");
const titleAndPoster = document.querySelector(".title-and-poster");
const errorMessage = document.querySelector("#error-message");
const errorMessageContainer = document.querySelector(
  ".error-message-container"
);

searchBtn.addEventListener("click", () => {
  getMovieInfo();
});

function getMovieInfo() {
  fetch(`https://www.omdbapi.com/?t=${searchbarInput.value}&apikey=a64c27d1`)
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
      if (data.Response === "False") {
        movieDetails.style.display = "none";
        titleAndPoster.style.display = "none";
        errorMessage.innerHTML = "Movie not found :(";
        errorMessageContainer.style.display = "block";
      } else {
        errorMessageContainer.style.display = "none";
        movieTitle.innerHTML = data.Title;
        moviePoster.src = data.Poster;
        movieYear.innerHTML = data.Year;
        movieGenre.innerHTML = data.Genre;
        movieCast.innerHTML = data.Actors;
        movieDuration.innerHTML = data.Runtime;
        movieRating.innerHTML = data.imdbRating;
        movieLanguage.innerHTML = data.Language;
        moviePlot.innerHTML = data.Plot;
        movieDetails.style.display = "flex";
        titleAndPoster.style.display = "flex";
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
