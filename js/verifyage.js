console.clear();

/* ----- podcasts ----- */

let form = document.querySelector("form#userAgeForm");
let anchor = document.querySelector("a");

anchor.addEventListener("click", function (event) {
  event.preventDefault();

  window.alert(`Sorry, you're not allowed to leave`);
});

form.addEventListener("submit", function (event) {
  // we can prevent any default event, in this case the default event for a form submittal...this way we can take control of what happens when a form is submitted
  event.preventDefault();

  if (form.userAgeInput.value >= 18) {
    document.querySelector(".user-allowed").classList.remove("hidden");
    document.querySelector(".user-not-allowed").classList.add("hidden");

    window.setTimeout(function () {
      window.location.href = "podcasts.html";
    }, 2000);
  } else {
    document.querySelector(".user-not-allowed").classList.remove("hidden");
    document.querySelector(".user-allowed").classList.add("hidden");
  }
});
