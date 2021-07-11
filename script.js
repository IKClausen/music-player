const musicContainer = document.querySelector('music-container'); 
const playBtn = document.querySelector('play'); 
const prevBtn = document.querySelector('prev'); 
const nextBtn = document.querySelector('next'); 

const audio = document.querySelector('audio'); 
const progress = document.querySelector('progress'); 
const progressContainer = document.querySelector('progressContainer'); 
const title = document.querySelector('title'); 
const cover = document.querySelector('cover'); 
const currTime = document.querySelector('#currTime'); 
const durTime = document.querySelector('#durTime'); 

// song titles 
const songs =['Got-you','Japan-by-uniq','Jazzaddicts','Last_Energy_For_The_Day','No_Rocking_in_the_Jazzhands_Zone','Stardust',
'Trippin-coffee','Underwater','Uniq-Reverse','Water-wood-and-stone','You Know Why']; 
// keep track of songs 
let songIndex = 2;

//Initially load songs into DOM 
loadSong(songs[songIndex]);

// Update song details 
function loadSong(song){
    title.innerText = song;
    audio.scr = `music/${song}.mp3`;
    cover.scr = `images/${song}.jpg`;
}
// Play song 
function playSong(){
    musicContainer.classList.add('play'); 
    playBtn.querySelector('i.fas').classList.remove('fa-play'); 
    playBtn.querySelector('i.fas').classList.add('fa-pause'); 

    audio.play(); 
}

function pauseSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

function prevSong(){
  songIndex--; 

  if(songIndex < 0){
      songIndex = song.length - 1; 
  }

  loadSong(songs[songIndex]); 
  playSong(); 
}

function nextSong(){
    songIndex++; 

    if(songIndex > songs.length -1){
        songIndex = 0; 
    }
  
    loadSong(songs[songIndex]); 
    playSong(); 
}
//Updating progress bar 
function updateProgress(e){
const {duration, currentTime} = e.srcElement; 
const progressPercent = (currentTime/duration)*100; 
progress.style.width = `${progressPercent}%`; 
}

//Set progress bar 
function setProgress(e){
    const width = this.clientwidth; 
    const clickX = e.offsetX; 
    const duration = audio.duration; 

    audio.currentTime =  (clickX/width)*duration; 
}

//Duration and currentTime of song


//Event listeners 
playBtn.addEventListener('click', () => {
const isPlaying = musicContainer.classList.contains('play')

if(isPlaying){
    pauseSong()
} else {
    playSong()
}
})

//Changing song events 
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress) 

audio.addEventListener('ended', nextSong)

