<script>
var countdown = new Date("Jan 10, 2024 04:20:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    
    var distance = countdown - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    var seconds = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("count").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s"

    
})

if (countdown < 0) {
    clearInterval(x);
    document.getElementById("count").innderHTML = "EXPIRED";
}

</script>
