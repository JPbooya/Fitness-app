// Wait for the form to be submitted
document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page from refreshing
  
    // Get values from the inputs
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
  
    // Convert height from cm to meters
    height = height / 100;
  
    // Calculate BMI
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2); // Round to 2 decimal places
  
    // Determine the category
    let category = "";
    let workoutSuggestion = "";
  
    if (bmi < 18.5) {
      category = "Underweight";
      workoutSuggestion = "Focus on strength training and muscle-building workouts."
    } else if (bmi < 24.9) {
      category = "Normal weight";
      workoutSuggestion = "Maintain your fitness with a balance of cardio and strength training."
    } else if (bmi < 29.9) {
      category = "Overweight";
      workoutSuggestion = "Include more cardio and fat-burning workouts."
    } else {
      category = "Obese";
      workoutSuggestion = "Start with low-impact cardio and gentle strength exercises."
    }
  
    // Display the result
    document.getElementById("result").innerHTML = `Your BMI is ${bmi} (${category}). 
    <br>
     <strong>Workout Suggestion:</strong> ${workoutSuggestion}
     `;
  });
  