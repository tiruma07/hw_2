function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid numbers for weight and height.");
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));

    var interpretation = "";
    if (bmi < 18.5) {
        interpretation = "You are underweight. Consider consulting a healthcare professional.";
    } else if (bmi >= 18.5 && bmi < 25) {
        interpretation = "You have a normal weight. Keep up the good work!";
    } else if (bmi >= 25 && bmi < 30) {
        interpretation = "You are overweight. Consider maintaining a balanced diet and regular exercise.";
    } else {
        interpretation = "You are obese. It's important to consult a healthcare professional for guidance.";
    }

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your BMI is: " + bmi.toFixed(2) + "<br>" + interpretation;
}

var calculateButton = document.getElementById("calculateBtn");
calculateButton.addEventListener("click", calculateBMI);
