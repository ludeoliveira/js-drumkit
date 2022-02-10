// we're going to listen to a keydown event then this will run the function wich will give us the event
window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    
    if (!audio) return // stop the function if there is no audio conected with the key pressed
    audio.currentTime = 0 //rewind the audio to the start so you can hit it in succession
    audio.play() // if we have the element it will play
    key.classList.add('playing') // adds the class playing wich contains the animation to the .key element. the same way we have classList.remove and classList.toggle
})

// set the transition -.playing- (border color and scale) back to default -.key-
function removeTransition(e) {
    if(e.propertyName !== 'transform') return //skip it if it's not a transform
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')

keys.forEach(key => key.addEventListener('transitionend', removeTransition))