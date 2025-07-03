const form = document.getElementById("workout-form");
const workoutList = document.getElementById("workout-list");

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

  // clear inputs after logging
  form.reset();
    }
});