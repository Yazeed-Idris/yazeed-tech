const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removePlaying));
function removePlaying(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

window.addEventListener('keydown', function(event) {
  const code = event.keyCode;
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  const key = document.querySelector(`.key[data-key="${code}"]`);
  if (event.defaultPrevented) {
    return;
  }
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
  event.preventDefault();
}, true);
