

//switch active contents based on button clicked
function instantReport () {
    activecontent.innerHTML ='<button id="instantReportBtn">report!</button>';
};

instantModeSwitchBtn.addEventListener('click', instantReport);

function timedReport () {
    activecontent.innerHTML = '<form><input type="number"><button>start</button></form>';
};

timedModeSwitchBtn.addEventListener('click', timedReport);

// plays audio for both modes
function playAudio(){
    let audio = new Audio('audio/wereportedthenews.mp3');
    audio.play();
    console.log('test');
}

// play audio when instant button is clicked
instantReportBtn.addEventListener('click', playAudio);

// play audio at end of timer