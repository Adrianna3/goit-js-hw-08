
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const _ = require('lodash');

player.on('timeupdate', throttle(currentTime, 1000));

function currentTime(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
