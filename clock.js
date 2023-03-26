var hours = document.getElementById("hours")
var minuts = document.getElementById("minuts")
var seconds = document.getElementById("seconds")
var timestamp = document.getElementById("timestamp")


function time() {
    var mydate = new Date()
    var h = mydate.getHours()
    if (h > 12) {
        if (h < 12) {
            timestamp.innerText = "AM"
        }
        h -= 12
        timestamp.innerText = "PM"

        if (h < 10) {
            h = "0" + h
        }
    }
    return (
        hours.innerText = h
        , minuts.innerText = mydate.getMinutes()
        , seconds.innerText = mydate.getSeconds()

    )
}
setInterval(time, 1000)
