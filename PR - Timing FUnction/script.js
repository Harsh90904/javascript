
const quoteElement = document.getElementById('quote');
const progressCircle = document.querySelector('.loader');
const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "It is during our darkest moments that we must focus to see the light. - Aristotle",
  "Always remember that you are absolutely unique. Just like everyone else. - Margaret Mead",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Tell me and I forget. Teach me and I remember. Involve me and I learn. - Benjamin Franklin",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Change your thoughts and you change your world. - Norman Vincent Peale",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
];

let index = 0;
const intervalDuration = 30000;

function updateQuote() {
  quoteElement.textContent = quotes[index];
  index = (index + 1) % quotes.length;
}

function startProgressAnimation() {
  progressCircle.style.animationDuration = `${intervalDuration}ms`;
}

updateQuote();

startProgressAnimation();

setInterval(function() {
  updateQuote();
  startProgressAnimation();
}, intervalDuration);

function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 0;
  }
  document.getElementById("dis").innerHTML = localStorage.clickcount;
}
