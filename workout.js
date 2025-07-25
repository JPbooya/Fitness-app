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

    const deleteBtn = document.createElement("Button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", function () {
      listItem.remove();
      saveToLocalStorage();
      if (workoutList.children.length === 0) {
        showPlaceholder();
      }
    });

    listItem.appendChild(deleteBtn);
    workoutList.append(listItem);
  });
});

// save to local storage as a JSON string
function saveToLocalStorage() {
  const items = [...workoutList.querySelectorAll("li")].map(li => {
    return li.firstChild.textContent || li.firstChild.nodeValue || li.textContent;
  });
  localStorage.setItem("workouts", JSON.stringify(items));
}

function showPlaceholder() {
  const placeholder = document.createElement("li");
  placeholder.id = "placeholder";
  placeholder.className = "placeholder";
  placeholder.textContent = "No Workouts logged yet.";
  workoutList.appendChild(placeholder);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("workout-name").value;
  const details = document.getElementById("workout-details").value;

  // validates user input for workout names
  const hasLetter = /[a-zA-Z]/.test(name);

  const isDetailsVaild = /[a-zA-Z]/.test(details) && details.length > 2;

  if (!hasLetter) {
    alert("Workout name must include at least one letter (e.g., Push-ups).");
    return;
  }

  if (!isDetailsVaild) {
    alert("Workout details must include a description (e.g., 20 reps or 15 min).");
    return;
  }

  const placeholder = document.getElementById("placeholder");
  if (placeholder) {
    placeholder.remove();
  }

  const listItem = document.createElement("li");
  listItem.textContent = `${name} - ${details}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", function () {
    listItem.remove();
    saveToLocalStorage();
    if (workoutList.children.length === 0) {
      showPlaceholder();
    }
  });

  listItem.appendChild(deleteBtn);
  workoutList.appendChild(listItem);
  saveToLocalStorage(); // saved after appending
  // clear inputs after logging
  form.reset();
});