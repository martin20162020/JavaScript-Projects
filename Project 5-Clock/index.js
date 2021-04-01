myTimer = () => {
    setInterval(function(){
    const d = new Date();
    const t = d.toLocaleTimeString();
    document.getElementById("time").innerHTML = t;

}, 1000)
}

myTimer()
