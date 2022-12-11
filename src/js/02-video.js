import Player from '@vimeo/player';  
import throttle from 'lodash.throttle';


const LOCALSTORAGE ="videoplayer-current-time"
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

function timeTrack() {
    player.on('timeupdate', function (time) {
      localStorage.setItem(LOCALSTORAGE, JSON.stringify(time.seconds));

      if (time.seconds >= 568.641) {
       localStorage.setItem(LOCALSTORAGE, "0.0")

     }
    
    });
  
  }

player.on("play", throttle(function () { timeTrack() }, 1000));



player.setCurrentTime(localStorage.getItem(LOCALSTORAGE)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
