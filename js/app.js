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


function login() {

    // set hashword (what hash of (password + random hash) equals)
    var theHashword = "2879a3a3b23a9f5b9ead69529bb5f3c8";

    // "enter key" also triggers submit click
    $(".content-password").keyup(function(event){
        if(event.keyCode == 13){
            $('#submit-password-button').click();
        }
    });

    // get user submitted password
    var password = document.getElementById("password").value;

    // if password is correct
    if (CryptoJS.MD5(password+"2aecc21ce57c973d624175017c3f4616")==theHashword){
        // open new window
        window.open('rsvp'+ CryptoJS.MD5(password) +'.html', 'rsvp!', '_blank');
    }
    // if incorrect password
    else {
        $('#incorrect-password-message').replaceWith("<span class="+"incorrect-pw-msg panel"+">Incorrect password, please try again!</span>");
        $('form').get(0).reset();
    }
}