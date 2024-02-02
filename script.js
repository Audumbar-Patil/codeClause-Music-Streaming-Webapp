//getting the values of the element 

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("progress");

//tracking the duration of a song
song.onloadedmetadata = function(){
    progress.max = song.duration;
}

song.ontimeupdate = function(){
    
    progress.value = song.currentTime;
}

//play and pause function 
function playPause(){
    if(song.paused || song.ended){
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
    else {
        song.pause();
        ctrlIcon.classList.remove("fa fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}