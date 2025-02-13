const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

function validateUSPhoneNumber(phoneNumber) {
  const phonePattern =
    /^\s*1?\s*(\(\d{3}\)\s*|\d{3})[\s-]?(\d{3})[\s-]?(\d{4})\s*$/;
  return phonePattern.test(phoneNumber);
}

check.addEventListener("click", () => {
  console.log("Check button clicked");
  const phoneNumber = input.value;
  if (!phoneNumber) {
    alert("Please provide a phone number");
    return;
  }

  const isValid = validateUSPhoneNumber(phoneNumber);
  console.log(`Phone number: ${phoneNumber}, Valid: ${isValid}`);

  results.style.visibility = "visible";
  results.style.opacity = "1";
  results.innerHTML = isValid
    ? `✅ Valid US number: ${phoneNumber}`
    : `❌ Invalid US number: ${phoneNumber}`;
});

clear.addEventListener("click", () => {
  console.log("Clear button clicked");
  input.value = "";
  results.style.opacity = "0";
  setTimeout(() => {
    results.style.visibility = "hidden";
    results.innerHTML = "&nbsp;"; // Keeps the space reserved
  }, 300);
});

AOS.init({
  easing: "ease-in-out", // Easing function for smooth animation
  anchorPlacement: "top-bottom", // Defines when animation starts
  once: true, // Ensures animation happens only once
});

let typed; // Declare typed globally
const userInput = document.getElementById("user-input"); // Use a different variable name

function startTyped() {
  typed = new Typed("#typed-placeholder", {
    strings: [
      "Type your number...",
      "e.g., 123-456-7890",
      "Enter a valid number!",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
    showCursor: false,
  });
}

startTyped(); // Start Typed.js initially

userInput.addEventListener("input", () => {
  if (userInput.value.length > 0) {
    typed.destroy(); // Stop Typed.js
    document.getElementById("typed-placeholder").textContent = ""; // Clear placeholder text
  } else {
    startTyped(); // Restart Typed.js if input is empty
  }
});
