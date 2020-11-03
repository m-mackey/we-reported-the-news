function playAudio(){
    let audio = new Audio('audio/wereportedthenews.mp3');
    audio.play();
}

instantReport.addEventListener('click', playAudio);