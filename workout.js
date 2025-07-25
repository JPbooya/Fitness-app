
const form = document.getElementById("workout-form");
const workoutList = document.getElementById("workout-list");

// load saved workouts when the page loads
window.addEventListener("DOMContentLoaded", function () {
  const saved = JSON.parse(localStorage.getItem("workouts")) || [];

  if (saved.length > 0) {
    document.getElementById("placeholder")?.remove();
  }

  saved.forEach(text => {
    const listItem = document.createElement("li");
    listItem.textContent = text;
    workoutList.append(listItem);
  });
});

// save to local storage
function saveToLocalStorage() {
  const items = [...workoutList.querySelectorAll("li")].map(li => li.textContent);
  localStorage.setItem("workouts", JSON.stringify(items));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("workout-name").value;
  const details = document.getElementById("workout-details").value;

    // only procced if both fields are filled 
  if (name && details) {
    const placeholder = document.getElementById("placeholder");
    if (placeholder) {
        placeholder.remove();
    }

  const listItem = document.createElement("li");
  listItem.textContent = `${name} - ${details}`;
  workoutList.appendChild(listItem);

  saveToLocalStorage(); // saved after appending

  // clear inputs after logging
  form.reset();
    }
});