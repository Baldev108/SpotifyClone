
let songIndex = 0;
let songIndex2 = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItems'))
let masterSongName = document.getElementById('masterSongName');
let songs2 = Array.from(document.getElementsByClassName('soongs2'));

let song = [
    { songName: " The Real Slim Shady", filePath: "songs/1.mp3", coverPath: "cover1.jpg" },
    { songName: " Still Dre-Dr.Dre", filePath: "songs/2.mp3", coverPath: "Dr.-Dre-Still-D.R.E. coverimage.png" },
    { songName: " Barbie-World ", filePath: "songs/3.mp3", coverPath: "Nicki_Minaj,_Ice_Spice,_Aqua_-_Barbie_World.png" },
    { songName: " The Real Slim Shady", filePath: "songs/1.mp3", coverPath: "cover1.jpg" },
];


songItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = song[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = song[i].songName

});
songs2.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = song[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = song[i].songName

});
//handle play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else if (audioElement.play) {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})

//listen to events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemsPlay')).forEach((ele) => {
        ele.classList.remove('fa-pause')
        ele.classList.add('fa-play')
    })
    
      
}
const makeAllPlay2 = () => {
    Array.from(document.getElementsByClassName('soongs2Play')).forEach((ele) => {
        ele.classList.remove('fa-pause')
        ele.classList.add('fa-play')
    })
}

Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        songIndex = parseInt(e.target.id)
        
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');      
            audioElement.src = `songs/${songIndex +1}.mp3`;
            console.log(songIndex)
            masterSongName.innerText = song[songIndex].songName;
            console.log(masterSongName)
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
        
        }
        
    )})
Array.from(document.getElementsByClassName('soongs2Play')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay2();
        songIndex2 = parseInt(e.target.id)
        
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');      
            audioElement.src = `songs/${songIndex2 +1}.mp3`;
            console.log(songIndex2)
            masterSongName.innerText = song[songIndex2].songName;
            console.log(masterSongName)
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
        
        }
        
    )})
