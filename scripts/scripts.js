// maybe i should rename things as its a little confusing
// let activeContent = document.getElementById('active-content');

// let instantModeSwitch = document.getElementById('instant-mode-switch');
// instantModeSwitch.addEventListener('click', instantReport);

//switch active contents based on button clicked
// function instantReport () {
//     // activeContent.innerHTML ='<button id="instant-report-btn">report!</button>';
//     // play audio when instant button is clicked
//     let instantReportBtn = document.getElementById('instant-report-btn');
//     instantReportBtn.addEventListener('click', playAudio);
//     clearInterval(countdown);
//     countdownDisplay.innerHTML= "";
// };



// plays audio for both modes
function playAudio() {
    let audio = new Audio('audio/wereportedthenews.mp3');
    audio.play();
};

// play audio when instant button is clicked
let instantReportBtn = document.getElementById('instant-report-btn');
instantReportBtn.addEventListener('click', playAudio);


// +++++++++ TIMER ++++++++++++ //
let countdown; //wes said something about how if you dont want this in the glboal name space aroudn the 5 min mark but i didnt catch it

const countdownDisplay = document.getElementById('countdown-display');

const timerInput = document.getElementById('timer-input');
const resetBtn = document.getElementById('stop-btn');
resetBtn.addEventListener('click', resetTime);

//add leading zeroes to input numbers
//from https://stackoverflow.com/questions/36359553/display-leading-zeros-on-input-number-fields
const minInputDisplay = document.getElementById('minutes');
const secInputDisplay = document.getElementById('seconds');

function addLeadingZero(value) {
    return  value.length < 2 ? "0" + value : value;
};

minInputDisplay.addEventListener('input', function() {
    minInputDisplay.value = addLeadingZero(minInputDisplay.value);
});

secInputDisplay.addEventListener('input', function () {
    secInputDisplay.value = addLeadingZero(secInputDisplay.value);
});


timerInput.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    const secs = this.seconds.value;
    console.log(mins);
    console.log(secs);
    timer(parseInt((mins * 60)) + parseInt(secs));
    this.reset();
});


function resetTime() {
    clearInterval(countdown);
    countdownDisplay.textContent = '00:00';
    document.getElementById('timer-input').reset();
};

function timer(seconds) {
    // clear active timer
    clearInterval(countdown);
    //gets current date
    const now = Date.now();
    //you have to times by 1000 because of how the seconds are by default. is the seconds here special or is it just what is passed because it isn't defined?
    const then = now + seconds * 1000;
    displayTimeLeft(seconds); //runs fn once immediately
    console.log(seconds);
    //so this has an unnamed? arrow function in it. the first part b4 comma is the function that we are running, the second is how often it is run
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if timer should stop
        if (secondsLeft < 0) {
            playAudio();
            clearInterval(countdown); //clearInterval is a method related to setInterval
            return;
        }
        //display time left
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${minutes < 10 ? '0' : '' }${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    countdownDisplay.textContent = display;
}