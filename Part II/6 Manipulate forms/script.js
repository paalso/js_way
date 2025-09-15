const stopTokens = [
  "admin",
  "root",
  "superuser",
  "system",
  "guest",
  "null",
  "undefined",
  "sex",
  "fuck",
  "shit",
  "bitch",
  "asshole",
  "damn",
  "support",
  "help",
  "moderator",
  "manager",
  "staff",
  " ",
  "\t",
  "\n",
  "<",
  ">",
  "/",
  "\\",
  "{",
  "}",
  "[",
  "]",
  "(",
  ")",
  ":",
  ";",
];

const formElement = document.querySelector("form");
console.log("Form info\n===============");
console.log(`Number of fields: ${formElement.elements.length}`); // 10
console.log(formElement.elements[0].name); // "username"
console.log(formElement.elements.password.type); // "password"

const usernameElement = document.getElementById("username");
// Show a tip associated with a selected text area
usernameElement.addEventListener("focus", (e) => {
  document.getElementById("usernameHelp").textContent =
    "Enter a unique username!";
});
// Hide the advice when the user moves onto a different field
usernameElement.addEventListener("blur", (e) => {
  document.getElementById("usernameHelp").textContent = "";
});

/*
const switchFocus = prompt("Focus on username element (y/no)?");
if (switchFocus === "y") usernameElement.focus();
*/

// Show if the email confirmation checkbox is checked
document.getElementById("confirmation").addEventListener("change", (e) => {
  console.log(`Email confirmation request: ${e.target.checked}`);
});

// Show the subscription type selected via radio button
const subscriptionElements = Array.from(
  document.getElementsByName("subscription")
);
subscriptionElements.forEach((element) => {
  element.addEventListener("change", (e) => {
    console.log(`Selected subscription: ${e.target.value}`);
  });
});

document.getElementById("nationality").addEventListener("change", (e) => {
  console.log(`Nationality code: ${e.target.value}`);
});

// document.getElementById("nationality").addEventListener("change", e => {
//   console.log("Nationality code: " + e.target.value);
// });

const checkUsername = (username, stopWords) => {
  const normalizedUsername = username.toLowerCase();
  const result = stopWords.reduce(
    (acc, e) => (normalizedUsername.includes(e) ? [...acc, e] : acc),
    []
  );
  return result;
};

// Shows all user input and cancels form data sending
formElement.addEventListener("submit", (e) => {
  const username = e.target.elements.username.value;
  const password = e.target.elements.password.value;
  const email = e.target.elements.emailAddress.value;
  console.log(`Username: ${username}, password: ${password}, email: ${email}`);

  const checkUsernameResult = checkUsername(username, stopTokens);
  if (checkUsernameResult.length) {
    alert(
      `Check username! It contains stop tokens: ${checkUsernameResult.join(
        " "
      )}`
    );
  }

  if (e.target.elements.confirmation.checked) {
    console.log("You asked for email confirmation");
  } else {
    console.log("You didn’t asked for email confirmation");
  }
  switch (e.target.elements.subscription.value) {
    case "newspromo":
      console.log("You are subscribed to newsletters and promotions");
      break;
    case "news":
      console.log("You are subscribed to newsletters only");
      break;
    case "no":
      console.log("You are not subscribed to anything");
      break;
    default:
      console.error("Unknown subscription code");
  }
  switch (e.target.elements.nationality.value) {
    case "US":
      console.log("Hello! You are a US citizen");
      break;
    case "FR":
      console.log("Bonjour! You are a French citizen");
      break;
    case "ES":
      console.log("Hola! You are a Spanish citizen");
      break;
    default:
      console.log("Your nationality is unknown");
  }
  e.preventDefault(); // Cancel form data sending
});

// Validate password length
document.getElementById("password").addEventListener("input", (e) => {
  const password = e.target.value; // Value of the password field
  let passwordLength = "too short";
  let messageColor = "red"; // Short password => red
  if (password.length >= 8) {
    passwordLength = "adequate";
    messageColor = "green"; // Long password => green
  } else if (password.length >= 4) {
    passwordLength = "moderate";
    messageColor = "orange"; // Moderate password => orange
  }
  const passwordHelpElement = document.getElementById("passwordHelp");
  passwordHelpElement.textContent = `Length: ${passwordLength}`; // helper text
  passwordHelpElement.style.color = messageColor; // helper text color
});

// Check email validity when field loses focus
document.getElementById("emailAddress").addEventListener("blur", (e) => {
  // Match a string of the form xxx@yyy.zzz
  const emailRegex = /.+@.+\..+/;
  let validityMessage = "";
  if (!emailRegex.test(e.target.value)) {
    validityMessage = "Invalid address";
  }
  document.getElementById("emailHelp").textContent = validityMessage;
});
