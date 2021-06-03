function removeTransition(e){
    e.target.classList.remove("play");
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    const image = document.querySelector(".images")
    key.classList.add("play")
    audio.currentTime =0
    audio.play()
    switch(e.keyCode){
        case 65: image.src = "images/clap.png"
        break;
        case 83: image.src = "images/hihat.png"
        break;
        case 68: image.src = "images/kick.png"
        break;
        case 70: image.src = "images/openhat.png"
        break;
        case 71: image.src = "images/boom.png"
        break;
        case 72: image.src = "images/ride.png"
        break;
        case 74: image.src = "images/snare.png"
        break;
        case 75: image.src = "images/tom.png"
        break;
        case 76: image.src = "images/drumset.png"
        break;
    }
}

const keys = document.querySelectorAll(".key")

keys.forEach(key=>key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
