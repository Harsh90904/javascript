document.addEventListener("DOMContentLoaded", function () {
  let timerDisplay = document.getElementById("timer");
  let quoteDisplay = document.getElementById("quote");

  let quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "Learn from yesterday, live for today, hope for tomorrow. - Albert Einstein",
    "Imagination is more important than knowledge. - Albert Einstein",
    "Life is what happens when you’re busy making other plans. - John Lennon",
    "Time you enjoy wasting is not wasted time. - Marthe Troly-Curtin",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "The best way to predict the future is to invent it. - Alan Kay",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
  ];

  let timeLeft = 30;
  let quoteIndex = 0;

 setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft === 0) {
      quoteDisplay.textContent = quotes[quoteIndex];
      quoteIndex = (quoteIndex + 1) % quotes.length;
      timeLeft = 30;
    } else if (timeLeft % 30 === 0) {
      quoteDisplay.textContent = quotes[quoteIndex];
      quoteIndex = (quoteIndex + 1) % quotes.length;
    }
  }, 1000);
  
})
// ==========================

function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount)+1;
  } else {
    localStorage.clickcount = 0;
  }
  document.getElementById("dis").innerHTML = localStorage.clickcount;
}