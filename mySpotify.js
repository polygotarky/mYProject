
console.log("Welcome to mySpotify");
// making an audio file memory space
let songIndex = 0;
let play = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let songItems = document.getElementsByClassName("songItem");
let audioElement = new Audio('1.mp3');
let btn = document.getElementsByClassName("songItemsPlay");
let nn = document.getElementById('nam');
// array of songs as objects

let songs = [
    { songName: "Let me Love You", filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: "Trap Cartel", filePath: "2.mp3", coverPath: "2.jpg" },
    { songName: "They Mad", filePath: "3.mp3", coverPath: "3.jpg" }]

//add Event Listener is a pre defined functionfor calling other events/functions  which occurs when element in focus is activated by some process
// 'click' ,timeupdate, paused, currentTime , play() ,pause() are all pre-defined events/functiond so directly use them .

play.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        gif.style.opacity = 1;
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');

        //song is playing , gif should also play
       

    }

    else {

        audioElement.pause();
        play.classList.remove('fa-pause-circle');
        play.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});



//document.addEventListener('time');

//update the seek bar - < input type="range">

audioElement.addEventListener('timeupdate', () => {

    console.log('time update');
    // in percentage , how much of the total song is played till current time
    // parseInt gives value of exprsn in integer
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;




});

myProgressBar.addEventListener('change', () => {

    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

});

// traversing the song list class

Array.from(songItems).forEach((element, i) => {

    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// makes all songs play active and remove any pauses if some previous song was being played
const makeAllPlay = () => {
    Array.from(btn).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(btn).forEach((element) => {
    element.addEventListener('click', (e) => {
        //console.log(e.target);
        makeAllPlay();
        songIndex = parseInt(e.target.id);

        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex + 1}.mp3`;
        //audioElement =  Audio('$(index+1).mp3');
        //console.log(index);
        nn.innerText = songs[songIndex].songName;

        audioElement.currentTime = 0;

        audioElement.play();
        gif.style.opacity = 1;
        play.classList.remove('fa-play-circle');
        play.classList.add('fa-pause-circle');
    })
});


document.getElementById('next'). addEventListener('click', () => {


    if (songIndex >= 2) {
        songIndex = 0;
    }

    else {
        songIndex += 1;


    }

    audioElement.src = `${songIndex+1}.mp3`;
    nn.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    
    
    

    audioElement.play();
    
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');
});


document.getElementById('previous'). addEventListener('click', () => {


    if (songIndex == 0) {
        songIndex = 2;
    }

    else {
        songIndex -= 1;


    }
    
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    nn.innerText = songs[songIndex].songName;
    

    audioElement.play();
    
    play.classList.remove('fa-play-circle');
    play.classList.add('fa-pause-circle');
});

