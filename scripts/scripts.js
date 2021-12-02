// plays audio for both modes
function playAudio() {
    let audio = new Audio('audio/wereportedthenews.mp3');
    audio.play();
};

// play audio when instant button is clicked
let instantReportBtn = document.getElementById('instant-report-btn');
instantReportBtn.addEventListener('click', playAudio);


// +++++++++ TIMER ++++++++++++ //
let countdown; //wes said something about how if you dont want this in the global name space around the 5 min mark but i didn't catch it

const countdownDisplay = document.getElementById('countdown-display');

const timerInput = document.getElementById('timer-input');
const resetBtn = document.getElementById('stop-btn');
resetBtn.addEventListener('click', resetTime);

//add leading zeroes to input numbers
//from https://stackoverflow.com/questions/36359553/display-leading-zeros-on-input-number-fields
const hourInputDisplay = document.getElementById('hours')
const minInputDisplay = document.getElementById('minutes');
const secInputDisplay = document.getElementById('seconds');

function addLeadingZero(value) {
    return  value.length < 2 ? "0" + value : value;
};

hourInputDisplay.addEventListener('input', function() {
    hourInputDisplay.value = addLeadingZero(hourInputDisplay.value);
});

minInputDisplay.addEventListener('input', function() {
    minInputDisplay.value = addLeadingZero(minInputDisplay.value);
});

secInputDisplay.addEventListener('input', function () {
    secInputDisplay.value = addLeadingZero(secInputDisplay.value);
});

//TIMER FUNCTIONALITY
timerInput.addEventListener('submit', function (e) {
    e.preventDefault();
    const hours = this.hours.value;
    const mins = this.minutes.value;
    const secs = this.seconds.value;
    // console.log(hours);
    // console.log(mins);
    // console.log(secs);
    timer(parseInt((hours * 3600)) + parseInt((mins * 60)) + parseInt(secs));
    this.reset();
});


function resetTime() {
    clearInterval(countdown);
    countdownDisplay.textContent = '00:00:00';
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
    let remainingSeconds = seconds;

    const remainingHours = Math.floor(remainingSeconds / 3600);
    remainingSeconds = remainingSeconds % 3600;

    const remainingMinutes = Math.floor(remainingSeconds / 60);
    
    remainingSeconds = remainingSeconds % 60;

    const display = `${remainingHours < 10 ? '0' : '' }${remainingHours}:${remainingMinutes < 10 ? '0' : '' }${remainingMinutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    countdownDisplay.textContent = display;
}