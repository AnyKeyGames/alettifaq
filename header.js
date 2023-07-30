let lastUpdate = 0;
let bagClicks = 0;
let easterEggActive = false;
const earningsElement = document.getElementById('earnings');
const easterEggElement = document.getElementById('clickEarnings');

function calculateEarnings() {
  const weeklyEarnings = 700000; // 700k
  const millisecondsPerSecond = 1000;
  const millisecondsPerMinute = 60 * millisecondsPerSecond;
  const millisecondsPerHour = 60 * millisecondsPerMinute;
  const millisecondsPerDay = 24 * millisecondsPerHour;
  const averageUpdateRate = 0.58

  // Get the current date and time
  const now = new Date();

  // Calculate the milliseconds elapsed since midnight on July 28, 2023
  const targetDate = new Date(2023, 6, 28);
  const millisecondsSinceMidnight = now - targetDate;

  // Calculate the number of weeks since the target date
  const weeksSinceMidnight = millisecondsSinceMidnight / (millisecondsPerDay * 7);

  // Calculate the total earnings since the target date
  const totalEarnings = weeklyEarnings * weeksSinceMidnight;

  // Display the result
  earningsElement.textContent = `£${totalEarnings.toFixed(2)}`;

  if(easterEggActive){
    easterEggElement.textContent = `You blocked £${(bagClicks *averageUpdateRate).toFixed(2)}`
  }

  if(document.visibilityState === "visible"){
    spawnEmoji();
  }

}

function spawnEmoji() {
  const randomX = Math.floor(Math.random() * window.innerWidth*0.9);

  const emojis = ['💰', '🏳️‍🌈', '💰'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  const header = document.getElementById('header')

  const emoji = document.createElement('span');
  emoji.classList.add('emoji');
  emoji.style.left = randomX + 'px';
  emoji.style.fontSize = randomnumber(8,10) + 'vw'
  emoji.textContent = randomEmoji;
  header.appendChild(emoji);

  emoji.addEventListener('animationend', () => {
    emoji.remove();
  });

  emoji.addEventListener('click', () => {
    if (emoji.textContent === '💰') {
      easterEggActive = true;
      emoji.textContent = '🏳️‍🌈';
      emoji.style.fontSize = randomnumber(11,15) + 'vw'
      bagClicks++;
    } else {
      bagClicks = 0;
    }
  })
}

function randomnumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

calculateEarnings();

setInterval(calculateEarnings, 500);
