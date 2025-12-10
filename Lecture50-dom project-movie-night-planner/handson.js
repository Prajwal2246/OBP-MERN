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

  remainingSection.style.display = "grid";
  loginSection.style.display = "none";

  loadUserInSidebar();
  loadSuggestion(username);
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
}

/* load suggestion of each user */
function loadSuggestion(username) {
  const curruser = sessionStorage.getItem("activeUser");
  const allMovies = JSON.parse(localStorage.getItem("allmovies") || "[]");

  const userMovies = allMovies.filter(
    (movie) => movie.suggestedby === curruser
  );
  movieList.innerHTML = "";
  userMovies.forEach((movie, index) => renderMovieCard(movie, index));
}

/* movieward */
function renderMovieCard(movie, index) {
  const card = document.createElement("div");
  card.className = "p-2 border mb-2 rounded";
  card.innerHTML = `
    <h3>${movie.title}</h3>
    <p>Genre: ${movie.genre}</p>
    <p>Duration: ${movie.duration} mins</p>
    <p>Year: ${movie.year}</p>
    <p>Votes: <span class="vote-count">${movie.voteCount}</span></p>
    <button class="upvote">👍 Upvote</button>
    <button class="downvote">👎 Downvote</button>
    <button class="remove">🗑️ Remove</button>
    <button class="watch-now">▶️ Watch Now</button>
     `;

  /* button functionality */
  const upvoteBtn = card.querySelector(".upvote");
  const downvoteBtn = card.querySelector(".downvote");
  const removeBtn = card.querySelector(".remove");

  movieList.appendChild(card);
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

  const newMovie =  new Movie(title,genre,duration,year,activeUser);
  newMovie.platforms = selectedPlatforms;

  const allMovies = JSON.parse(localStorage.getItem("allmovies") || "[]");
  allMovies.push(newMovie);
  localStorage.setItem("allmovies", JSON.stringify(allMovies));

  renderMovieCard(newMovie, allMovies.length - 1);

  movieForm.reset();
});


class Movie{
    constructor(title,genre,duration,year,suggestedby){
    this.title =title;
    this.genre =genre;
    this.duration=duration
    this.year =year;
    this.suggestedby =suggestedby;
    this.votes=[];
    this.watched = false;
    }
}

Movie.prototype.upvote = function (username){
    if(!this.votes.includes(username)){
        this.votes.push(username);
    }
}

Movie.prototype.downvote = function (username){
    if(this.votes.includes(username)){
        this.votes.remove(username);
    }
}

Movie.prototype.markWatched = function (){
     this.watched = true;
}

Movie.prototype.getVoteCount = function (){
     return this.votes.length;
}

Movie.prototype.hasUserVoted = function (username){
     return this.votes.includes(username);
}

class User {
    #password;
    constructor(username,password="124"){
        this.username=username;
        this.favoriteGenres = [];
        this.watchHistory = [];
        this.#password = password;
    }

    suggestMovie(title,genre,duration,year,platforms){
        return new Movie(title,genre,duration,year,this.username,platforms)
    }

    addToWatchHistory(title){
        this.watchHistory.push(title);
    }
}
