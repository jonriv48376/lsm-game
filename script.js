const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.5 and 1.0
var guessCounter = 0;
var mistakeCounter = 1;

function startGame() {
  //initialize game variables
  progress = 0;
  mistakeCounter = 1;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  randomizePattern(pattern);
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 300,
  3: 400,
  4: 500,
  5: 600,
  6: 700
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

//Lighting up/Clearing button
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
  lightPicture(btn);
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
  clearPicture(btn);
}

//Lighting up/Clearing picture
function lightPicture(btn) {
  document.getElementById("picture" + btn).classList.remove("hidden");
}

function clearPicture(btn) {
  document.getElementById("picture" + btn).classList.add("hidden");
}

//Playing clue function
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("You win!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else if (mistakeCounter != 3) {
    alert("Incorrect! You've used " + mistakeCounter + " out of 3 strikes.");
    mistakeCounter++;
  } else if (mistakeCounter == 3) {
    loseGame();
  }
}

//Randomly generated pattern
function randomizePattern(pattern) {
  var currentIndex = pattern.length;

  while (currentIndex != 0) {
    var newIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    var temp = pattern[currentIndex];
    pattern[currentIndex] = pattern[newIndex];
    pattern[newIndex] = temp;
  }
  return pattern;
}
