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
  
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    // Display the result
    document.getElementById("result").innerText = `Your BMI is ${bmi} (${category})`;
  });
  