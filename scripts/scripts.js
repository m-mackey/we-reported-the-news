// maybe i should rename things as its a little confusing
let activeContent = document.getElementById('active-content');

let instantModeSwitch = document.getElementById('instant-mode-switch');
instantModeSwitch.addEventListener('click', instantReport);

//switch active contents based on button clicked
function instantReport () {
    activeContent.innerHTML ='<button id="instant-report-btn">report!</button>';
    // play audio when instant button is clicked
    let instantReportBtn = document.getElementById('instant-report-btn');
    instantReportBtn.addEventListener('click', playAudio);
    clearInterval(countdown);
    countdownDisplay.innerHTML= "";
};

function timedReport () {
    activeContent.innerHTML = '<form><input type="number"><button>start</button></form>';
};

let timedModeSwitch = document.getElementById('timed-mode-switch');
timedModeSwitch.addEventListener('click', timedReport);

// plays audio for both modes
function playAudio(){
    let audio = new Audio('audio/wereportedthenews.mp3');
    audio.play();
    console.log('test');
};

// play audio when instant button is clicked
let instantReportBtn = document.getElementById('instant-report-btn');
instantReportBtn.addEventListener('click', playAudio);

// play audio at end of timer


// timer stuff
let countdown; //wes said something about how if you dont want this in the glboal name space aroudn the 5 min mark but i didnt catch it
const countdownDisplay = document.getElementById('countdown-display');

function timer(seconds){
    //gets current date
    const now = Date.now();
    //you have to times by 1000 because of how the seconds are by default. is the seconds here special or is it just what is passed because it isn't defined?
    const then = now + seconds * 1000;
    displayTimeLeft(seconds); //runs fn once immediately

    //so this has an unnamed? arrow function in it. the first part b4 comma is the function that we are running, the second is how often it is run
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if timer should stop
        if(secondsLeft < 0){
          clearInterval(countdown); //clearInterval is a method related to setInterval
          return;
        }
        //display time left
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds/60);
    const remainingSeconds = seconds % 60;
    const display = `${minutes < 10 ? '0' : '' }${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    countdownDisplay.textContent = display;
}

// around 17 min

