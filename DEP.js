function checkEligibility() {
    let age = document.getElementById("age").value;
    let checkbox = document.getElementById("myCheckbox");
  
    if (age >= 65) {
      document.getElementById("output").innerHTML = "Congratulations! You qualify for a senior discount.";
    } else if (Number(age) >= 18 && checkbox.checked) {
      document.getElementById("output").innerHTML = "Congratulations! You are eligible for a member discount.";
    } else {
      document.getElementById("output").innerHTML = "Sorry, you are not eligible for a discount.";
    }
  
    // Prevent the default submission behavior, which is to refresh the page.
    event.preventDefault();
  }