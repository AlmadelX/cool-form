// Setup event listeners
function setup() {
  // Setup input validation
  const inputs = document.querySelectorAll(".form input");
  inputs.forEach(input => input.addEventListener("input", () => { validateInput(input); }));

  // Setup form validation
  const form = document.querySelector("form");
  form.addEventListener("submit", e => {
    if (!validateForm()) {
      e.preventDefault();
    }
  });
}

function validateInput(input) {
  if (input.checkValidity()) {
    input.classList.remove("error");
  } else {
    input.classList.add("error");
  }

  // Check password match
  if (input.id === "password" || input.id === "confirm-password") {
    validatePasswords();
  }
}

function validatePasswords() {
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirm-password");
  const passwordPrompt = document.querySelector(".input p");

  if (password.value === confirmPassword.value) {
    passwordsMatch = true;
    passwordPrompt.classList.remove("password-error");
  } else {
    passwordsMatch = false;
    passwordPrompt.classList.add("password-error");
  }
}

function validateForm() {
  return passwordsMatch;
}

let passwordsMatch = false;

setup();
