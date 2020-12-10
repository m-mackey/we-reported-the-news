// maybe i should rename things as its a little confusing
let activeContent = document.getElementById('activecontent');

let instantModeSwitch = document.getElementById('instantModeSwitch');
instantModeSwitch.addEventListener('click', instantReport);

//switch active contents based on button clicked
function instantReport () {
    activeContent.innerHTML ='<button id="instantReportBtn">report!</button>';
    // play audio when instant button is clicked
    let instantReportBtn = document.getElementById('instantReportBtn');
    instantReportBtn.addEventListener('click', playAudio);
    
};



function timedReport () {
    activeContent.innerHTML = '<form><input type="number"><button>start</button></form>';
};

let timedModeSwitch = document.getElementById('timedModeSwitch');
timedModeSwitch.addEventListener('click', timedReport);

// plays audio for both modes
function playAudio(){
    let audio = new Audio('audio/wereportedthenews.mp3');
    audio.play();
    console.log('test');
};

// play audio when instant button is clicked
let instantReportBtn = document.getElementById('instantReportBtn');
instantReportBtn.addEventListener('click', playAudio);

// play audio at end of timer
