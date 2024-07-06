// Load the IFrame Player API code asynchronously
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var videoIds = [
    "gdEe_lXsULg", "ZwGn7CDhiGs", "ZQRsDx11pCg", "DbSfsdS7lkw", "azoQ9gSJ-60", "1kp4Tnv8B7E", 
    "H1SguK7rSTM", "4eNxIZrq9U4", "WYS2PMgCfRE", "SV4k2XNS0tE", "S_KWsUR08P8", "hWp7IjONZCM", 
    "ZwGn7CDhiGs", "gdEe_lXsULg", "x65yxfRo6rM", "I4jh4ojwSoM", "azoQ9gSJ-60", "EcImU26ThN4", 
    "1kp4Tnv8B7E", "DbSfsdS7lkw", "-P9U7nDbr0A", "Cqfrffq81sU", "csa8ry5sgIs", "WvV5TbJc9tQ", 
    "1kp4Tnv8B7E", "ZwGn7CDhiGs", "8erv9o7A7mg", "uuy9oJmfFK8", "e0ACFFptjj0"
];

function getRandomVideoId() {
    var randomIndex = Math.floor(Math.random() * videoIds.length);
    return videoIds[randomIndex];
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: getRandomVideoId(),
        playerVars: {
            'autoplay': 1, // Start the video automatically
            'controls': 0,
            'loop': 0,
            'playlist': videoIds.join(','), // Include all video IDs for looping
            'rel': 0,
            'showinfo': 0,
            'mute': 1 // Mute the video initially
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.setVolume(50);

    var volumeSlider = document.getElementById('volume-slider');
    volumeSlider.addEventListener('input', function() {
        var newVolume = volumeSlider.value;
        player.setVolume(newVolume);
    });

    var skipButton = document.getElementById('skip-button');
    skipButton.addEventListener('click', function() {
        playNextVideo();
    });

    // Ensure the volume slider is updated to reflect the initial volume
    volumeSlider.value = 50;
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        playNextVideo();
    }
}

function playNextVideo() {
    player.loadVideoById(getRandomVideoId());
}

// Forum Post Form
document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    document.getElementById('forum-posts').appendChild(postElement);
});
