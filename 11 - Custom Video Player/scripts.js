/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay(e){
  if(video.paused){
    video.play();
    // toggle.innerHTML = '=';
  } else {
    video.pause();
    // toggle.innerHTML = '►';
  }
};

function updateButton(e){
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip(e){
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange(e){
  video[this.name] = this.value;
}

function handleProgress(){
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
  console.log(progress);
  console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRange));
progress.addEventListener('click', scrub);
