import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const throttled = throttle(timeUpdate, 1000, { 'trailing': false })

const LOCALSTORAGE_KEY = "videoplayer-current-time";

function onPlay() {
    console.log('played the video!');
}

function timeUpdate({ seconds }) {
    localStorage.setItem(LOCALSTORAGE_KEY, seconds);
    console.log(seconds);
}

function playRepeat() {
    const valueSeconds = localStorage.getItem(LOCALSTORAGE_KEY);
    if (valueSeconds) {
        player.setCurrentTime(valueSeconds);
    }
}

playRepeat()

player.on('play', onPlay);
player.on('timeupdate', throttled);