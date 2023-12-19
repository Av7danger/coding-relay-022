// Sample song data
const songs = [
  {
    title: 'Song 1',
    artist: 'Artist 1',
    file: "https://www.youtube.com/watch?v=-tJYN-eG1zk"
  },
  {
    title: 'Song 2',
    artist: 'Artist 2',
    file: "https://www.youtube.com/watch?v=-tJYN-eG1zk"
  },
  // Add more songs with their details
];

// Function to create playlist
function createPlaylist() {
  const playlist = document.getElementById('playlist-list');
  songs.forEach((song, index) => {
    const listItem = document.createElement('a');
    listItem.href = '#';
    listItem.className = 'list-group-item list-group-item-action';
    listItem.innerText = `${index + 1}. ${song.title} - ${song.artist}`;
    listItem.addEventListener('click', () => playSong(index));
    playlist.appendChild(listItem);
  });
}

// Function to play selected song
function playSong(index) {
  const audio = document.getElementById('audio-player');
  audio.src = songs[index].file;
  audio.play();
}

// Initialize the playlist
window.onload = createPlaylist;
// Define addSong function
function addSong(song) {
  // Create songCard string with song data
  const songCard = `
     <div class="col-md-4 mb-4">
       <div class="card">
         <img src="${song.cover}" class="card-img-top" alt="${song.title}">
         <div class="card-body">
           <h5 class="card-title">${song.title}</h5>
           <p class="card-text">${song.artist}</p>
         </div>
       </div>
     </div>
  `;

  // Append songCard to music-library
  $('#music-library').append(songCard);
} 
