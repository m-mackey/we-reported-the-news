// plays audio for both modes
function playAudio(){
    let audio = new Audio('audio/wereportedthenews.mp3');
    audio.play();
}

// play audio when instant button is clicked
instantReport.addEventListener('click', playAudio);

// play audio at end of timer

//switch active contents based on button clicked
