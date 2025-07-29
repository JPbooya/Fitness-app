// track current unit states
let heightInMetric = true;
let weightInMetric = true;

document.addEventListener("DOMContentLoaded", function() {
  // Toggle between metric (cm) and imperial (ft/in) height input.
  function toggleHeightUnit() {
    const heightCmInput = document.getElementById("heightCm");
    const heightImperialInputs = document.getElementById("heightImperialInputs");
    const heightLabel = document.getElementById("heightLabel");
    const heightToggleBtn = document.getElementById("heightToggleBtn");
    const heightImperialResults = document.getElementById("heightImperialResult");
  }
  // Get the weight label
  const weightLabel = document.getElementById("weight-label");

  toggleHeightBtn.addEventListener("click", function() {
    useImperialHeight = !useImperialHeight;
    if (useImperialHeight) {
      metricGroup.classList.add("hidden");
      imperialGroup.classList.remove("hidden");
      toggleHeightBtn.textContent = "Use Metric Units";
    } else {
      metricGroup.classList.remove("hidden");
      imperialGroup.classList.add("hidden");
      toggleHeightBtn.textContent = "Use Imperial Units";
    }
  });

  toggleWeightBtn.addEdventListener("click", function() {
    useImperialWeight = !useImperialWeight;
    if (useImperialWeight) {
      weightLabel.textContent = "Weight (in lbs):";
      toggleWeightBtn.textContent = "Use Kilograms (kg)";
      weightInput.placeholder = "Pounds";
    } else {
      weightLabel.textContent = "Weight (in kg):";
      toggleWeightBtn.textContent = "Use Pounds (lbs)";
      weightInput.placeholder = "Kilograms";
    }
    weightInput.value = '';
  });

  document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page from refreshing

    let height;
    // Get height in meters
    if (useImperialHeight) {
      let feet = parseFloat(document.getElementById("height-ft").value) || 0;
      let inches = parseFloat(document.getElementById("height-in").value) || 0;
      if (feet === 0 && inches === 0) {
        showResult("Please enter your height.");
        return;
      }
      height = (feet * 12 + inches) * 0.0254; // convert to meters
    } else {
      height = parseFloat(document.getElementById("height").value);
      if (!height || height === 0) {
        showResult("Please enter your height.");
        return;
      }
      height = height / 100; // convert cm to meters
    }

    let weight = parseFloat(document.getElementById("weight").value);
    if (!weight || weight === 0) {
      showResult("Please enter your weight.");
      return;
    }

    // Convert weight to kg if using imperial
    if (useImperialWeight) {
      weight = weight * 0.453592; // convert lbs to kg
    }

    // Calculate BMI
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(1); // Round to 1 decimal place

    // Determine the category
    let category = "";
    let workoutSuggestion = "";

    if (bmi < 18.5) {
      category = "Underweight";
      workoutSuggestion = "Focus on strength training and muscle-building workouts.";
    } else if (bmi < 24.9) {
      category = "Normal weight";
      workoutSuggestion = "Maintain your fitness with a balance of cardio and strength training.";
    } else if (bmi < 29.9) {
      category = "Overweight";
      workoutSuggestion = "Include more cardio and fat-burning workouts.";
    } else {
      category = "Obese";
      workoutSuggestion = "Start with low-impact cardio and gentle strength exercises.";
    }

    // Display the result
    showResult(`Your BMI is ${bmi} (${category}). <br><strong>Workout Suggestion:</strong> ${workoutSuggestion}`);
  });

  function showResult(message) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = message;
    resultDiv.classList.add("show");
  }
});