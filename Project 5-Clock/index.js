myTimer = () => {
    setInterval(function(){
    let today = new Date();
    let localTime = today.toLocaleTimeString();
    document.getElementById("time").innerHTML = localTime;

}, 1000)
}

myTimer()
