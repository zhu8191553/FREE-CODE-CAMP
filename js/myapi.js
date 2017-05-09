function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }
var currentQuote = '', currentAuthor = '';
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224',
"#472E32", "#BDBB99", "#77B1A9", "#73A857"];
function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {
      var r = JSON.parse(response);
      currentQuote = r.quote;
      currentAuthor = r.author;
      console.log(r);
      // if(inIframe())
      // {
      //   $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freeco
      //     decamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
      //   $('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=
      //     quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote));
      // }
      var color = Math.floor(Math.random() * colors.length);
		  $("button").animate({
	        backgroundColor: colors[color],
	      }, 1000);
		  $('span').css({'color':colors[color],'display':'none'});
		  $('span').fadeIn(1500);
		  $("html body").animate({
	        backgroundColor: colors[color],
	      }, 1000);
	      $('#quote').html(r.quote);
	      $('#author1').html(r.author);	
    }
  });
}
$(function(){
	getQuote();
	function gradient(){
		getQuote();
	}
	$('button').on('click',gradient); 
//	openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote));
});


