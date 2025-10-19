const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval (updateTime, 10);
        isRunning = true;
    }
}

function stop(){

    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);

}

function updateTime(){{
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    let second = Math.floor(elapsedTime / 1000) % 60;
    let milliseconds = Math.floor (elapsedTime % 1000 / 10);
    
}