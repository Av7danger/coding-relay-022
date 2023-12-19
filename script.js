
    // Sample song data
    const songs = [
      {
        title: 'Song 1',
        artist: 'Artist 1',
        file: 'your-audio-file1.mp3' // Replace with the actual audio file URL
      },
      {
        title: 'Song 2',
        artist: 'Artist 2',
        file: 'your-audio-file2.mp3' // Replace with the actual audio file URL
      },
      // Add more songs with their details
    ];

    let currentSongIndex = 0;
    const audio = document.getElementById('audio-player');

    // Function to play/pause the audio
    function playPause() {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    // Function to play the previous song
    function previousSong() {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      playSelectedSong(currentSongIndex);
    }

    // Function to play the next song
    function nextSong() {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      playSelectedSong(currentSongIndex);
    }

    // Function to play the selected song
    function playSelectedSong(index) {
      audio.src = songs[index].file;
      audio.play();
    }

    // Initialize the first song
    playSelectedSong(currentSongIndex);