//GREETINGS//

// Get the current hour
const currentHour = new Date().getHours();

// Reference the greeting container
const greetingContainer = document.getElementById("greeting");

// Determine the greeting message and background image
let greetingMessage = "";
let backgroundImage = "";

if (currentHour >= 5 && currentHour < 12) {
  greetingMessage = "Good Morning, User!";
  backgroundImage = "url('Images/greetings/Morning.png')"; // Path to morning image
} else if (currentHour >= 12 && currentHour < 15) {
  greetingMessage = "Good Noon, User!";
  backgroundImage = "url('Images/greetings/noon.png')"; // Path to noon image
} else if (currentHour >= 15 && currentHour < 18) {
  greetingMessage = "Good Afternoon, User!";
  backgroundImage = "url('Images/greetings/dusk.png')"; // Path to afternoon image
} else {
  greetingMessage = "Good Evening, User!";
  backgroundImage = "url('Images/greetings/evening.png')"; // Path to evening image
}

// Update the greeting message
greetingContainer.textContent = greetingMessage;

// Set the background image for the greeting container
greetingContainer.style.backgroundImage = backgroundImage;