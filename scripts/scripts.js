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
