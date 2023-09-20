document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registration-form");
  const message = document.getElementById("message");

  registrationForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const password1 = document.getElementById("password1").value;

      if (password !== password1) {
          message.textContent = "Passwords do not match, please try again.";
          return; 
      }

      const userData = {
          username: username,
          email: email,
          password: password,
      };

      localStorage.setItem(username, JSON.stringify(userData));
      message.textContent = "Registration successful!";
      registrationForm.reset();
  });
});


// Random color after click on the body
document.addEventListener("DOMContentLoaded", function () {
  const htmlBody = document.querySelector('#wotlk-body'); 
  const colors = ["#7393B3", "#808080"];
  let usedColors = []; 

  const randomClickFunction = function () {
      if (colors.length === 0) {
          colors.push(...usedColors);
          usedColors = [];
      }

      const randomIndex = Math.floor(Math.random() * colors.length);
      const randomColor = colors.splice(randomIndex, 1)[0]; 
      usedColors.push(randomColor); 
      htmlBody.style.backgroundColor = randomColor;
  }

  htmlBody.onclick = randomClickFunction;
  randomClickFunction();
});