import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
  console.log(currentTime);
};

const timePlayerNow = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(timePlayerNow);

player.on('timeupdate', throttle(onPlay, 1000));
