const centerText = document.getElementById("centerText")

centerText.style.backgroundColor = "red";

function stopwatch(click) {
    startTime = Date.now()
    timer = setInterval( function() {
        time= Date.now() - startTime
        centerText.textContent = "Press! "+time+"ms";

    },0.1);
}
click = 0;
centerText.addEventListener("click",function() {
    click++;
    console.log(click)
    if (click > 1) {
        clearInterval(timer);
    }
    if (click == 1) {
        setTimeout( function() {
            centerText.textContent = "Press! ";
            centerText.style.backgroundColor = "green";
            stopwatch(click);
        },((Math.round(Math.random())*4000)+500));
    }
});