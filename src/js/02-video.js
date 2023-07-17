import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = 




// const player = new Player('vimeo-player');
// const LOCALSTORAGE_KEY = 'videoplayer-current-time';

// player.on(
//   'timeupdate',
//   throttle(data => {
//     const LOCALSTORAGE_VALUE = data.seconds;
//     localStorage.setItem(LOCALSTORAGE_KEY, LOCALSTORAGE_VALUE);
//   }, 2000)
// );

// player
//   .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
//   .then(function () {})
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         break;
//       default:
//         break;
//     }
//   });

