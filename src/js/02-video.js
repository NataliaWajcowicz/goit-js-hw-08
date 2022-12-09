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
    
  });
  
};

timeTrack();


player.setCurrentTime(localStorage.getItem(LOCALSTORAGE)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
