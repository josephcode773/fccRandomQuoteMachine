var tweetText = '';
$(document).ready(function () {
    $("#newQuote").on('click', function () {
        $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function (json) {
            $("#quoteText").html(JSON.stringify(json.quoteText));
            $("#quoteAuthor").html(JSON.stringify(json.quoteAuthor));
            tweetText = json.quoteText + json.quoteAuthor;
            $("a.myLink").attr("href", function () {
                var textie = '';
                textie = "https://twitter.com/intent/tweet?text=Quote: "+tweetText;
                return textie;
            });
            $.ajaxSetup({ cache: false});
        });
    });
});