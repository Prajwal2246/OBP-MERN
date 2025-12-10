/* --------------------- Sections --------------------- */
const loginSection = document.querySelector("#login");
const allSectionsAfterLogin = document.querySelector("#allsections");

/* Initially hide all sections except login */
allSectionsAfterLogin.style.display = "none";

/* Login  */
const loginUsername = document.querySelector("#username");
const loginbutton = document.querySelector("#setuser");
const userList = document.querySelector("#userList");

loginbutton.addEventListener("click", () => {
  const username = loginUsername.value.trim();

  if (!username) {
    alert("Please login to access movie night planner");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  if (!users.includes(username)) {
    alert("No such user exists");
    return;
  }

  sessionStorage.setItem("activeUser", username);
  loginSection.style.display = "none";
  allSectionsAfterLogin.style.display = "grid";

  loadUserInSidebar();
  loadSuggestion(username);
});

/* Load Users in Sidebar  */
function loadUserInSidebar() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  userList.innerHTML = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user;
    li.className = "cursor-pointer p-1 hover:bg-gray-300 rounded";
    li.setAttribute("data-username", user);

    li.addEventListener("click", () => selectUser(user));

    userList.appendChild(li);
  });
}

/*  Select User from Sidebar  */
function selectUser(username) {
  sessionStorage.setItem("activeUser", username);

  document.querySelectorAll("#userList li").forEach((li) => {
    if (li.getAttribute("data-username") === username) {
      li.classList.add("bg-blue-300");
    } else {
      li.classList.remove("bg-blue-300");
    }
  });

  loadSuggestion(username);
}

/* Load Movies for a User  */
const moviesListDiv = document.querySelector("#movieList");

function loadSuggestion(username) {
  const allMovies = JSON.parse(localStorage.getItem("allmovies") || "[]");
  const userMovies = allMovies.filter(
    (movie) => movie.suggestedby === username
  );

  moviesListDiv.innerHTML = ""; // clear previous

  userMovies.forEach((movie, index) => renderMovieCard(movie, index));
}

/*  Add Movie */
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

  const newMovie = {
    title,
    genre,
    duration,
    year,
    platforms: selectedPlatforms,
    suggestedby: activeUser,
    voteCount: 0,
  };

  const allMovies = JSON.parse(localStorage.getItem("allmovies") || "[]");
  allMovies.push(newMovie);
  localStorage.setItem("allmovies", JSON.stringify(allMovies));

  renderMovieCard(newMovie, allMovies.length - 1);

  movieForm.reset();
});

/*  Render Movie Card */
function renderMovieCard(movie, index) {
  const card = document.createElement("div");
  card.className = "p-2 border mb-2 rounded";

  card.innerHTML = `
    <h3>${movie.title}</h3>
    <p>Genre: ${movie.genre}</p>
    <p>Duration: ${movie.duration} mins</p>
    <p>Year: ${movie.year}</p>
    <p>Suggested by: ${movie.suggestedby}</p>
    <p>Votes: <span class="vote-count">${movie.voteCount}</span></p>
    <button class="upvote">👍 Upvote</button>
    <button class="downvote">👎 Downvote</button>
    <button class="remove">🗑️ Remove</button>
    <button class="watch-now">▶️ Watch Now</button>
  `;

  /* Button functionality */
  const upvoteBtn = card.querySelector(".upvote");
  const downvoteBtn = card.querySelector(".downvote");
  const removeBtn = card.querySelector(".remove");

  upvoteBtn.addEventListener("click", () => updateVote(index, 1));
  downvoteBtn.addEventListener("click", () => updateVote(index, -1));
  removeBtn.addEventListener("click", () => removeMovie(index));

  moviesListDiv.appendChild(card);
}

/*  Update Votes  */
function updateVote(index, value) {
  const allMovies = JSON.parse(localStorage.getItem("allmovies") || "[]");
  allMovies[index].voteCount += value;
  localStorage.setItem("allmovies", JSON.stringify(allMovies));

  loadSuggestion(sessionStorage.getItem("activeUser"));
}

/*  Remove Movie */
function removeMovie(index) {
  let allMovies = JSON.parse(localStorage.getItem("allmovies") || "[]");
  allMovies.splice(index, 1);
  localStorage.setItem("allmovies", JSON.stringify(allMovies));

  loadSuggestion(sessionStorage.getItem("activeUser"));
}
