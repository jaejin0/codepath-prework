//global constants
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const maxHealth = 3;

//global variables
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var timeStart;
var timeEnd;

//implemented variables
var pattern = []; //empty array
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
var health = maxHealth;
var numStage = Math.floor(Math.random() * 3) + 3;

function changeStage() {
  switch (numStage) {
      case 3: 
        document.getElementById("stage0").classList.add("hidden");
        document.getElementById("stage3").classList.remove("hidden");
        break;
      case 4: 
        document.getElementById("stage0").classList.add("hidden");
        document.getElementById("stage4").classList.remove("hidden");
        break;
      case 5: 
        document.getElementById("stage0").classList.add("hidden");
        document.getElementById("stage5").classList.remove("hidden");
        break;
  }
}

function speedUp() {
  clueHoldTime = (clueHoldTime / 2) + 50;
  cluePauseTime = cluePauseTime - 10;
}

function startGame() {
  numStage = Math.floor(Math.random() * 3) + 3; //different number of stages
  changeStage(numStage); //showing the number of stage on webpage
  patternGeneration(); //different pattern every game
  
  health = maxHealth; //resetting health as we start
  document.getElementById("life0").classList.add("hidden");
  document.getElementById("life1").classList.add("hidden");
  document.getElementById("life2").classList.add("hidden");
  document.getElementById("life3").classList.remove("hidden");
  
  //resetting values
  clueHoldTime = 1000;
  cluePauseTime = 333;
  progress = 0;
  
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  document.getElementById("stage3").classList.add("hidden");
  document.getElementById("stage4").classList.add("hidden");
  document.getElementById("stage5").classList.add("hidden");
  document.getElementById("stage0").classList.remove("hidden");
  clearPattern();
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  timeStart = performance.now();
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!!!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  else if (btn == pattern[guessCounter]) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1)
        //finished final step
        winGame();
      else {
        //going to next step
        progress++;
        speedUp();
        playClueSequence();
      }
    }
    else
      guessCounter++;
  } 
  else {
    //act based on health status
    switch (health) {
      case 3: 
        health--;
        document.getElementById("life3").classList.add("hidden");
        document.getElementById("life2").classList.remove("hidden");
        break;
      case 2:
        health--;
        document.getElementById("life2").classList.add("hidden");
        document.getElementById("life1").classList.remove("hidden");
        break;
      case 1:
        health--;
        document.getElementById("life1").classList.add("hidden");
        document.getElementById("life0").classList.remove("hidden");
        loseGame();
        break;
    }
  }
}

function patternGeneration() {
  for (let i = 0; i < numStage; i++) {
    pattern.push(Math.ceil(Math.random() * 8));
  }
}
function clearPattern() {
  pattern = [];
}


const freqMap = {
  1: 349.228, //F4
  2: 392, //G4
  3: 440, //A4
  4: 466.16, //Bb4
  5: 523.25, //C5
  6: 587.33, //D5
  7: 659.25, //E5
  8: 698.46, //F5
  9: 783.99, //G5
  10: 880.00, //A5
  11: 932.33, //Bb5
  12: 1046.50, //C6
  13: 1174.66, //D6
  14: 1318.51, //E6
  15: 1396.91 //F6
}
function playTone(btn,len){ 
  //harmony of 1st, 3rd, and 8th
  o0.frequency.value = freqMap[btn]; //1st note
  o1.frequency.value = freqMap[btn + 2]; //3rd note
  o2.frequency.value = freqMap[btn + 7]; //8th note
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o0.frequency.value = freqMap[btn];
    o1.frequency.value = freqMap[btn + 2];
    o2.frequency.value = freqMap[btn + 7];
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o0 = context.createOscillator()
var o1 = context.createOscillator()
var o2 = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
//three different sound
o0.connect(g)
o1.connect(g)
o2.connect(g)
o0.start(0)
o1.start(0)
o2.start(0)