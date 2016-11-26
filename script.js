$(document).ready(function () {

    $("#newQuote").on("click", function () {
        $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function (json) {
            $("#message").html(JSON.stringify(json));
        });
    });

});