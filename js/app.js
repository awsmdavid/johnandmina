// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(document).ready(function(){

var end = new Date('08/29/2015 10:1 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    var days = Math.floor(distance / _day);
    if (days === 0) {
        try{
            clearInterval(timer);
			document.getElementById('countdowndays').innerHTML = "Today is the day!";
            return;
        }
        catch(err){}
    }
    if (distance > 0) {
		try{
			document.getElementById('countdowndays').innerHTML = "The wedding is in " + days + " days!";
        }
        catch(err){}
    }

    if (distance < 0) {
        try{
            clearInterval(timer);
			document.getElementById('countdowndays').innerHTML = -days + " days married!";
            return;
        }
        catch(err){}
    }




}

timer = setInterval(showRemaining, 1000);
});