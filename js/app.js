// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(document).ready(function(){

    //baewatch
    var keys = [];
    var baewatch = "66,65,69,87,65,84,67,72";
    $(document).keydown(function(e) {
        keys.push(e.keyCode);
        if (keys.toString().indexOf(baewatch) >= 0)
        {
            keys = [];
            $(".baewatch").toggle();
            $(".baewatch").animate({
                "left": "25%"
            }, 1000, function(){
                $(".baewatch").css("background", "url('/assets/baewatch-sup.jpg') 0 0 no-repeat");
            }).delay(700).animate({
                "left": "100%",
            }, 1500, function(){
                $(".baewatch").toggle();
                $(".baewatch").css("background", "url('/assets/baewatch.jpg') 0 0 no-repeat");
                $(".baewatch").css("left","0");
            });
        }
    });


    $('.bm-panel').click(function() {
        if ($('#bm-container').children(':visible').length === 0){
            $('#'+this.id+'-info').toggle( "fast", function() {
            });
            // alert('yo');
        }
        else if($('#'+this.id+'-info').css("display") == "block"){
            $('#'+this.id+'-info').toggle( "fast", function() {
            });
        }
        else{
            $('.bm-info').hide();
            $('#'+this.id+'-info').css("display", "block");
        }

    });

    $('.gm-panel').click(function() {
        if ($('#gm-container').children(':visible').length === 0){
            $('#'+this.id+'-info').toggle( "fast", function() {
            });
            // alert('yo');
        }
        else if($('#'+this.id+'-info').css("display") == "block"){
            $('#'+this.id+'-info').toggle( "fast", function() {
            });
        }
        else{
            $('.gm-info').hide();
            $('#'+this.id+'-info').css("display", "block");
        }

    });


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
			document.getElementById('#countdowndays').innerHTML = "Today is the day!";
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