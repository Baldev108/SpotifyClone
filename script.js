let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');

let song = [
    { songName: "The Real Slim Shady", filePath: "songs/1.mp3", coverPath: "cover1.jpg" },
    { songName: "Still Dre-Dr.Dre", filePath: "songs/2.mp3", coverPath: "Dr.-Dre-Still-D.R.E. coverimage.png" },
    { songName: "Barbie-World", filePath: "songs/3.mp3", coverPath: "Nicki_Minaj,_Ice_Spice,_Aqua_-_Barbie_World.png" },
    // Add more songs here as needed
];

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songPlay')).forEach((ele) => {
        ele.classList.remove('fa-pause');
        ele.classList.add('fa-play');
    });
};

const playSong = (index) => {
    makeAllPlay();

    const playIcon = document.getElementById(`songPlay${index}`);
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');

    audioElement.src = song[index].filePath;
    masterSongName.innerText = song[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

    audioElement.addEventListener('ended', () => {
        songIndex = (index + 1) % song.length;
        playSong(songIndex);
    });
};

Array.from(document.getElementsByClassName('songPlay')).forEach((element, index) => {
    element.addEventListener('click', () => {
        songIndex = index;
        playSong(songIndex);
    });
});






document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex >=3){
        songIndex =0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex +1}.mp3`;
     console.log(songIndex)
    masterSongName.innerText = song[songIndex ].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');


})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex <=0){
        songIndex =0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex +1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    
    

})
