let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('background-video', {
        videoId: 'EOzAP96tgE4',
        playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: 'EOzAP96tgE4',
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            mute: 1,
            start: 156,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.seekTo(156);
    }
}
