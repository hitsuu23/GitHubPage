const player = document.getElementById('player');

const videos = [
    'https://www.youtube.com/embed/VIDEO_ID_1',
    'https://www.youtube.com/embed/VIDEO_ID_2',
    'https://www.youtube.com/embed/VIDEO_ID_3',
    'https://www.youtube.com/embed/VIDEO_ID_4'
];

let currentVideoIndex = 0;

function loadVideo() {
    player.innerHTML = `<iframe src="${videos[currentVideoIndex]}?autoplay=1&loop=1&playlist=${videos[currentVideoIndex].split('/')[4]}&mute=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
}

loadVideo();
setInterval(loadVideo, 60000);  // Change video every minute
