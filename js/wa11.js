const genreText = document.querySelector(".genre-text");
const newGenreButton = document.querySelector("#js-new-genre");

async function fetchGenre() {
  try {
    const response = await fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/");
    const genreData = await response.json();
    return genreData;
  } catch (error) {
    console.log(error);
  }
}

function generateGenre() {
  fetchGenre()
    .then((genreData) => {
      console.log(genreData);
      genreText.textContent = genreData.genre;
      console.log(genreText.textContent);
    })
    .catch((error) => {
      console.log(error);
    });
}

generateGenre();

newGenreButton.addEventListener("click", generateGenre);