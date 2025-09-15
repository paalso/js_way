// Password checker
// https://thejsway.net/chapter17/#password-checker

const formElement = document.querySelector("form");
const passwordHelp = document.getElementById("passwordHelp");
const errorMessages = {
  notMatch: "Passwords do not match.",
  tooShort: "The minimal password length is 6 characters.",
  noDigit: "The password must contain at least one digit.",
};

const validatePasswords = (password1, password2) => {
  if (password1 !== password2) return errorMessages.notMatch;
  if (password1.length < 6) return errorMessages.tooShort;
  if (!/\d/.test(password1)) return errorMessages.noDigit;
  return null;
};

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const password1 = e.target.elements.password1.value;
  const password2 = e.target.elements.password2.value;
  const error = validatePasswords(password1, password2);

  if (error) {
    passwordHelp.textContent = `Error: ${error}`;
    passwordHelp.style.color = "red";
  } else {
    passwordHelp.textContent = "Form is valid, submitting...";
    passwordHelp.style.color = "green";
  }
  e.preventDefault();
});
