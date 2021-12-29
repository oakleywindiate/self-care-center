
// ~~~~~ CLASS/CONSTRUCTOR HERE ~~~~~ //

class Message {
  constructor(affirmation, mantra) {
    this.affirmation = affirmation;
    this.mantra = mantra;
  }
}


// ~~~~~ AFFIRMATIONS AND MANTRAS ARRAYS HERE ~~~~~ //

var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices.",
];

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather.",
];

// ~~~~~ VARIABLES HERE ~~~~~ //


// ~~~~~ QUERY SELECTORS HERE ~~~~~ //

var affirmationButton = document.querySelector('.affirmation-button');
var mantraButton = document.querySelector('.mantra-button');
var receiveMessage = document.querySelector('.receive-message');
var displayAffirmation = document.getElementById('display-affirmation');
var hideIcon = document.querySelector('.meditation-icon');
var name = document.getElementById('welcome-login');
var loginPage = document.querySelector('.login-page');
var submitButton = document.querySelector('.submit-button');
var mainPage = document.querySelector('.main-page');
var displayQuote = document.querySelector('.motivation-quote');

// ~~~~~ EVENT LISTENERS HERE ~~~~~ //

submitButton.addEventListener('click',function(event) {
  event.preventDefault();
  runLogin();
});

receiveMessage.addEventListener('click', eventReceiveMessage);

// ~~~~~ FUNCTIONS HERE ~~~~~ //

function randomArray(array) {
  return Math.floor(Math.random() * array.length);
}

function newAffirmationMessage() {
  displayAffirmation.innerText = affirmations[randomArray(affirmations)];
  hideMeditationIcon();
}

function newMantraMessage() {
  displayAffirmation.innerText = mantras[randomArray(mantras)];
  hideMeditationIcon();
}

function hideMeditationIcon() {
  hideIcon.style.display = "none";
}

function eventReceiveMessage() {
  if (affirmationButton == true) {
  return newAffirmationMessage();
  } else {
  return newMantraMessage();
  }
}

function insertName() {
  name.value = `Hello, ${name.value}!`;
}

function runLogin() {
  mainPage.classList.toggle("hidden");
  displayQuote.classList.toggle("hidden");
  loginPage.style.display = "none";
  insertName();
}
