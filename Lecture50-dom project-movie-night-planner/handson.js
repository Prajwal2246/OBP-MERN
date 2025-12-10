const loginSection = document.querySelector("#login");
const remainingSection = document.querySelector("#allsections");
const movieList = document.querySelector("#movieList");

remainingSection.style.display = "none";

/* login btn (login+show sections + localstorage (all users) sessionstorage(curruser) ) */
const loginBtn = document.querySelector("#setuser");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const username = document.querySelector("#username").value.trim();
  if (username === "") {
    alert("username required for login ");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users"));

  if (!users.includes(username)) {
    alert("no such user exist");
    return;
  }

  sessionStorage.setItem("activeUser", username);
  localStorage.setItem("activeUser", username);

  remainingSection.style.display = "grid";
  loginSection.style.display = "none";

  loadUserInSidebar();
  loadSuggestion(username);
  renderWatchHistory();
});

/* loading all users in sidebar */
function loadUserInSidebar() {
  const users = JSON.parse(localStorage.getItem("users"));
  const userList = document.querySelector("#userList");

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user;
    li.className = "cursor-pointer p-1 hover:bg-gray-300 rounded";
    li.setAttribute("data-username", user);

    li.addEventListener("click", () => selectUser(user));
    userList.appendChild(li);
  });
}

/* select user from sidebar */
function selectUser(username) {
  sessionStorage.setItem("activeUser", username);

  document.querySelectorAll("#userList li").forEach((li) => {
    if (li.getAttribute("data-username") === username) {
      li.classList.add("bg-blue-300");
    } else {
      li.classList.remove("bg-blue-300");
    }
  });
  loadSuggestion();
}

/* Helper to safely get all movies from localStorage */
function getAllMovies() {
  const data = localStorage.getItem("allmovies");
  // nothing saved yet
  try {
    return JSON.parse(data).map(reviveMovie);
  } catch (e) {
    console.warn("Invalid JSON in allmovies, resetting...", e);
    localStorage.setItem("allmovies", "[]");
    return [];
  }
}
/* load suggestion of each user */
function loadSuggestion(username) {
  const curruser = sessionStorage.getItem("activeUser");
  if (!curruser) return;

  const allMovies = getAllMovies(); // safe parsing
  const userMovies = allMovies.filter(
    (movie) => movie.suggestedby === curruser
  );

  movieList.innerHTML = "";
  userMovies.forEach((movie, index) => renderMovieCard(movie, index));
}

/* movieward */
function renderMovieCard(movie, index) {
  const card = document.createElement("div");
  card.className =
    "border border-gray-700 bg-gray-800 p-4 rounded-xl shadow flex flex-col gap-2 transition hover:shadow-lg";
  card.innerHTML = `
    <h3 class="text-lg font-bold text-blue-300">${movie.title}</h3>
    <p class="text-gray-300 text-sm">Genre: ${movie.genre}</p>
    <p class="text-gray-300 text-sm">Duration: ${movie.duration} mins</p>
    <p>Year: ${movie.year}</p>
    <p class="text-gray-300 text-sm">Votes: <span class="vote-count text-yellow-300 font-semibold">${movie.getVoteCount()}</span></p>
    <div class="flex gap-2 mt-2">
    <button class="upvote flex-1 bg-green-600 hover:bg-green-500 py-1 rounded-lg text-sm font-semibold">
      👍 Upvote
    </button>

    <button class="downvote flex-1 bg-red-600 hover:bg-red-500 py-1 rounded-lg text-sm font-semibold">
      👎 Downvote
    </button>
  </div>
    <div class="flex gap-2 mt-2">
    <button class="watch-now flex-1 bg-blue-600 hover:bg-blue-500 py-1 rounded-lg text-sm font-semibold">
      ▶️ Watch Now
    </button>

    <button class="remove flex-1 bg-gray-700 hover:bg-gray-600 py-1 rounded-lg text-sm font-semibold">
      🗑 Remove
    </button>
  </div>
     `;

  /* button functionality */
  const upvoteBtn = card.querySelector(".upvote");
  const downvoteBtn = card.querySelector(".downvote");
  const removeBtn = card.querySelector(".remove");
  const watchNow = card.querySelector(".watch-now");

  /* upvote */
  upvoteBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const user = localStorage.getItem("activeUser");
    const activeUser = sessionStorage.getItem("activeUser");
    if (!activeUser) {
      alert("login required");
      return;
    }

    const allmovies = JSON.parse(localStorage.getItem("allmovies")).map(
      reviveMovie
    );

    const idx = allmovies.findIndex((m) => m.title === movie.title);
    if (idx === -1) return;

    const realMovie = allmovies[idx];

    if (realMovie.hasUserVoted(user)) {
      alert("already voted");
      return;
    }

    realMovie.upvote(user);

    // Save
    localStorage.setItem(
      "allmovies",
      JSON.stringify(
        allmovies.map((m) => ({
          id: m.id,
          title: m.title,
          genre: m.genre,
          duration: m.duration,
          year: m.year,
          suggestedby: m.suggestedby,
          votes: m.votes,
          watched: m.watched,
          platforms: m.platforms || [],
        }))
      )
    );
    // Update UI immediately
    card.querySelector(".vote-count").textContent = realMovie.getVoteCount();
  });

  /* downvote */
  downvoteBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const activeUser = localStorage.getItem("activeUser");

    const allmovies = JSON.parse(localStorage.getItem("allmovies") || "[]");

    const idx = allmovies.findIndex((m) => m.title === movie.title);
    if (idx === -1) return;

    const realMovie = reviveMovie(allmovies[idx]);

    realMovie.downvote(activeUser);
    allmovies[idx] = realMovie;
    localStorage.setItem("allmovies", JSON.stringify(allmovies));
    card.querySelector(".vote-count").textContent = realMovie.getVoteCount();
  });

  /* remove */
  removeBtn.addEventListener("click", () => {
    const user = localStorage.getItem("activeUser");
    const allmovies = JSON.parse(localStorage.getItem("allmovies"));

    const idx = allmovies.findIndex((m) => m.title === movie.title);
    if (idx === -1) return;

    if (allmovies[idx].suggestedby !== user) {
      alert("you can remove only your added movies");
      return;
    }

    allmovies.splice(idx, 1);
    localStorage.setItem("allmovies", JSON.stringify(allmovies));

    card.remove();
  });

  /* watch now add to history */
  watchNow.addEventListener("click", (e) => {
    e.preventDefault;
    const allmovies = JSON.parse(localStorage.getItem("allmovies"));
    const idx = allmovies.findIndex((m) => m.title === movie.title);

    localStorage.setItem("watchHistory", JSON.stringify(allmovies[idx]));
    delete allmovies[idx];
    localStorage.setItem("allmovies", JSON.stringify(allmovies));
    card.remove();

    renderWatchHistory();
  });

  movieList.appendChild(card);
}
const historyDiv = document.querySelector("#history");
function renderWatchHistory() {
  const movie = JSON.parse(localStorage.getItem("watchHistory"));
  console.log(movie.title);
  const card = document.createElement("div");
  card.className = "p-2 border mb-2 rounded";
  card.innerHTML = `
    <h3>${movie.title}</h3>
    <p>Genre: ${movie.genre}</p>
    <p>Duration: ${movie.duration} mins</p>
    <p>Year: ${movie.year}</p>

     `;

  historyDiv.appendChild(card);
}
/* add movie */
const movieForm = document.querySelector("#movieForm");
movieForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#movietitle").value.trim();
  const genre = document.querySelector("#movieGenre").value;
  const duration = Number(document.querySelector("#movieDuration").value);
  const year = Number(document.querySelector("#releaseYear").value);
  const selectedPlatforms = Array.from(
    document.querySelectorAll("#add-movie input[type='checkbox']:checked")
  ).map((cb) => cb.id);

  if (!title || !genre || duration <= 0 || year < 1900 || year > 2025) {
    alert("Fill all details correctly");
    return;
  }

  const activeUser = sessionStorage.getItem("activeUser");
  if (!activeUser) {
    alert("Login required to add movie");
    return;
  }

  const newMovie = new Movie(title, genre, duration, year, activeUser);
  newMovie.platforms = selectedPlatforms;

  // Safe loading of existing movies
  const allMovies = getAllMovies();
  allMovies.push(newMovie);

  // Save updated list
  localStorage.setItem("allmovies", JSON.stringify(allMovies));

  // Render the new movie card
  renderMovieCard(newMovie, allMovies.length - 1);

  movieForm.reset();
});

class Movie {
  constructor(title, genre, duration, year, suggestedby) {
    this.id = `${Date.now()}_${Math.floor(Math.random() * 10000)}`;
    this.title = title;
    this.genre = genre;
    this.duration = duration;
    this.year = year;
    this.suggestedby = suggestedby;
    this.votes = [];
    this.watched = false;
  }
}

Movie.prototype.upvote = function (username) {
  if (!this.votes.includes(username)) {
    this.votes.push(username);
  }
};

Movie.prototype.downvote = function (username) {
  this.votes = this.votes.filter((user) => user != username);
};

Movie.prototype.markWatched = function () {
  this.watched = true;
};

Movie.prototype.getVoteCount = function () {
  return this.votes.length;
};

Movie.prototype.hasUserVoted = function (username) {
  return this.votes.includes(username);
};

class User {
  #password;
  constructor(username, password = "124") {
    this.username = username;
    this.favoriteGenres = [];
    this.watchHistory = [];
    this.#password = password;
  }

  suggestMovie(title, genre, duration, year, platforms) {
    return new Movie(title, genre, duration, year, this.username, platforms);
  }

  addToWatchHistory(movieId) {
    if (!this.watchHistory.includes(movieId)) {
      this.watchHistory.push(movieId);
    }
  }
}

function reviveMovie(movieObj) {
  const movie = new Movie(
    movieObj.title,
    movieObj.genre,
    movieObj.duration,
    movieObj.year,
    movieObj.suggestedby
  );
  movie.id = movieObj.id;
  movie.votes = movieObj.votes || [];
  movie.watched = movieObj.watched || false;
  movie.platforms = movieObj.platforms || [];

  return movie;
}

const pickTonightMovieBtn = document.querySelector("#pickMovieBtn");
const divptm = document.querySelector("#recommendation-result");

pickTonightMovieBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const allmovies = getAllMovies();
  if (allmovies.length === 0) {
    alert("No movies available");
    return;
  }

  let highVotesMovie = allmovies[0];
  allmovies.forEach((m) => {
    if (m.votes.length > highVotesMovie.votes.length) {
      highVotesMovie = m;
    }
  });
  divptm.innerHTML = "";
  const card = document.createElement("p");
  card.className = "p-2 border mb-2 rounded";
  card.innerHTML = `
    🎬 <strong>${highVotesMovie.title}</strong>  
    <br>
    Votes: ${highVotesMovie.votes.length}
  `;

  divptm.appendChild(card);
});
