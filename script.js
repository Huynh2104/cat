const videoPlayer = document.getElementById("videoPlayer");
const videoSource = document.getElementById("videoSource");

// Array of video sources
const videos = ["./img/a.mp4", "./img/b.mp4", "./img/c.mp4"];
let currentVideoIndex = 0;

// Function to play the next video
function playNextVideo() {
  currentVideoIndex++;

  // If we reached the end of the array, start over
  if (currentVideoIndex >= videos.length) {
    currentVideoIndex = 0;
  }

  // Change the video source
  videoSource.src = videos[currentVideoIndex];
  console.log(`Now playing: ${videoSource.src}`);

  // Load and play the new video
  videoPlayer.load();
  videoPlayer.play().catch((error) => {
    console.error("Failed to autoplay the next video:", error);
  });
}

// Event listener for when the video ends
videoPlayer.addEventListener("ended", playNextVideo);

// Event listener for any errors
videoPlayer.addEventListener("error", (e) => {
  console.error("Error occurred:", e);
});

// Try to play with sound on page load (initially muted)
videoPlayer.play().catch((error) => {
  console.log("Autoplay was prevented:", error);
});

// Listen for user interaction to unmute and play with sound
document.body.addEventListener("click", () => {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    videoPlayer.play().catch((error) => {
      console.error("Failed to play video with sound:", error);
    });
  }
});

// Initial log
console.log(`Starting with: ${videoSource.src}`);
