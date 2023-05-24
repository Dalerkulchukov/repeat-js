const watch = document.querySelector("#watch");
const time = document.querySelector("#time")
let milliseconds = 0;
let timer;

const startWatch = ()=> {
    watch.classList.remove("paused")
    clearInterval (timer);
    timer = setInterval(() => {
        milliseconds += 10;
        let datatimer = new Date (milliseconds);
        watch.innerHTML= 
        ("0"+ datatimer.getUTCMinutes()).slice(-2)+ ":"+
        ("0"+ datatimer.getUTCSeconds()).slice(-2)+ ":"+
        ("0"+ datatimer.getUTCMilliseconds()).slice(-3, -1);

        if(milliseconds >= 60000){
            time.innerHTML = "Прошла 1 минута";
            clearInterval(timer);
        }

    }, 10);
};

const pausedWatch = () =>{
    watch.classList.add("paused");
    clearInterval(timer);
};

const resetWatch = () =>{
    watch.classList.add("paused");
    clearInterval(timer);
    milliseconds=0;
    watch.innerHTML= "00:00:00";
    time.innerHTML="";
};

document.addEventListener("click", (e) =>{
    const element = e.target;
    if(element.id==="start") startWatch();
    if(element.id==="pause") pausedWatch();
    if(element.id==="reset") resetWatch();
})