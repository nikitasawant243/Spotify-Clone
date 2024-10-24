
    function toggleDropdown() {
        const dropdown = document.getElementById('dropdownMenu');
        dropdown.style.display = 
            dropdown.style.display === 'none' || dropdown.style.display === '' 
            ? 'block' 
            : 'none';
    }

    // Optional: Hide the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        const dropdown = document.getElementById('dropdownMenu');
        if (!event.target.matches('.menu')) {
            dropdown.style.display = 'none';
        }
    }

    const playBtn = document.querySelector('.play-btn');
    const audio = document.getElementById('audio');
    
    let isPlaying = false; // Track the playing state
    
    // Toggle play/pause on button click
    playBtn.addEventListener('click', () => {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    });
    
    // Update button text based on audio status
    audio.addEventListener('play', () => {
      isPlaying = true;
      playBtn.textContent = "▐▐"  // Change to pause icon
    });
    
    audio.addEventListener('pause', () => {
      isPlaying = false;
      playBtn.textContent = '▶';  // Change back to play icon
    });
    