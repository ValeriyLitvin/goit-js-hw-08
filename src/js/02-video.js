import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  const timeNow = data.seconds;
  localStorage.setItem('videoplayer-current-time', timeNow);
  console.log(timeNow);
};

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
player.on('timeupdate', throttle(onPlay, 1000));
player.on('play', onPlay);
