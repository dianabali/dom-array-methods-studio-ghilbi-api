const main = document.getElementById('main');
const addMovieBtn = document.getElementById('add-movie');
const doubleBtn = document.getElementById('double');
const showMasterpiecesBtn = document.getElementById('show-masterpieces');
const sortBtn = document.getElementById('sort');
const calculateAverageBtn = document.getElementById('calculate-average');

let data = [];

getRandomMovie();

// Fetch random movie and add score
async function getRandomMovie() {
  const res = await fetch('https://ghibliapi.vercel.app/films');
  const movies = await res.json();

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  const newMovie = {
    title: randomMovie.title,
    score: parseInt(randomMovie.rt_score) || Math.floor(Math.random() * 100)
  };

  addData(newMovie);
}

// Double scores
function doubleScores() {
  data = data.map(movie => {
    return { ...movie, score: movie.score * 2 };
  });

  updateDOM();
}

// Sort by highest score
function sortByHighest() {
  data.sort((a, b) => b.score - a.score);

  updateDOM();
}

// Show only masterpieces (>90)
function showMasterpieces() {
  data = data.filter(movie => movie.score > 90);

  updateDOM();
}

// Calculate average score
function calculateAverageScore() {
  if (data.length === 0) return;

  const total = data.reduce((acc, movie) => acc + movie.score, 0);
  const avg = total / data.length;

  const avgElement = document.createElement('div');
  avgElement.innerHTML = `<h3>Average Score: <strong>${avg.toFixed(1)}</strong></h3>`;
  main.appendChild(avgElement);
}

// Add new obj to data array
function addData(obj) {
  data.push(obj);

  updateDOM();
}

// Update DOM
function updateDOM(providedData = data) {
  // Clear the main div
  main.innerHTML = '<h2><strong>Movie</strong> Score</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.title}</strong> ${formatNumber(item.score)}`;
    main.appendChild(element);
  });
}

// Format number
function formatNumber(number) {
  return number.toLocaleString();
}

// Event listeners
addMovieBtn.addEventListener('click', getRandomMovie);
doubleBtn.addEventListener('click', doubleScores);
sortBtn.addEventListener('click', sortByHighest);
showMasterpiecesBtn.addEventListener('click', showMasterpieces);
calculateAverageBtn.addEventListener('click', calculateAverageScore);
