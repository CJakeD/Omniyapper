const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const forwardBtn = document.getElementById('forward-btn');
const backBtn = document.getElementById('back-btn');
const playlistItems = document.querySelectorAll('#playlist li');

let currentSongIndex = 0;
let isPlaying = false;

// Load the first song
loadSong(playlistItems[currentSongIndex]);

// Function to load a song
function loadSong(songElement) {
  const songSrc = songElement.getAttribute('data-src');
  audioPlayer.src = songSrc;
}

// Function to play the song
function playSong() {
  isPlaying = true;
  audioPlayer.play();
  playBtn.textContent = '⏸️ Pause';
}

// Function to pause the song
function pauseSong() {
  isPlaying = false;
  audioPlayer.pause();
  playBtn.textContent = '▶️ Play';
}

// Play/pause functionality
playBtn.addEventListener('click', () => {
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Function to play the next song
function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % playlistItems.length;
  loadSong(playlistItems[currentSongIndex]);
  playSong();
}

// Function to play the previous song
function playPreviousSong() {
  currentSongIndex = (currentSongIndex - 1 + playlistItems.length) % playlistItems.length;
  loadSong(playlistItems[currentSongIndex]);
  playSong();
}

// Forward and Back button functionality
forwardBtn.addEventListener('click', playNextSong);
backBtn.addEventListener('click', playPreviousSong);

// Load and play song when clicking on a playlist item
playlistItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentSongIndex = index;
    loadSong(item);
    playSong();
  });
});
