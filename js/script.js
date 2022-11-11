const themeIcon = document.querySelector(".icon-theme img");

themeIcon.addEventListener("click", function () {
  const body = document.querySelector("body");
  const logo = document.getElementById("logo");
  const searchIcon = document.querySelector(".search-bar img");
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    logo.src = "../img/Logo-dark.svg";
    themeIcon.src = "../img/icons/darkreader-dark.svg";
    searchIcon.src = "../img/icons/search-dark.svg";
  } else {
    logo.src = "../img/Logo.svg";
    themeIcon.src =
      "https://cdn.jsdelivr.net/npm/simple-icons@7.19.0/icons/darkreader.svg";
    searchIcon.src = "../img/icons/search.svg";
  }
});
