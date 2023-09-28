// Get references to HTML elements
const videoElement = document.getElementById('livestream-video');
const overlayContainer = document.getElementById('overlay-container');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const volumeSlider = document.getElementById('volume-slider');
const Heading = document.getElementById('Heading');

// Function to load the livestream video
function loadLivestream(videoElement) {
    // Replace 'your_rtsp_url_here' with the actual RTSP URL
    const livestreamURL = 'https://www.youtube.com/watch?v=L444GPh6qrk&pp=ygUJbGl2ZSBuZXdz';
    videoElement.src =livestreamURL ;
    videoElement.load();
}

// Function to add a custom overlay
function addOverlay(content, position, size) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.style.top = position.top + 'px';
    overlay.style.left = position.left + 'px';
    overlay.style.width = size.width + 'px';
    overlay.style.height = size.height + 'px';
    overlay.textContent = content;
    
    overlayContainer.appendChild(overlay);
}

// Event listeners for play and pause buttons
playButton.addEventListener('click', () => {
    videoElement.play();
});

pauseButton.addEventListener('click', () => {
    videoElement.pause();
});

// Event listener for volume control
volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value / 100;
    videoElement.volume = volume;
});

// Example usage: Load the livestream and add an overlay
loadLivestream(videoElement);
addOverlay('Your Overlay Text', { top: 20, left: 20 }, { width: 200, height: 50 });

// Example: Handling a form submission to add or edit an item
document.getElementById('crud-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Use AJAX to send data to the server and update the UI
    // ...
});

// Example: Handling a button click to delete an item
document.getElementById('delete-button').addEventListener('click', function() {
    // Use AJAX to send a request to delete the item from the server and update the UI
    // ...
});
