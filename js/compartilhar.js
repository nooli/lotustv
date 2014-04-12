//
var facebook = document.getElementById("facebook-icon");
var plus = document.getElementById("plus-icon");
var twitter = document.getElementById("twitter-icon");
var compartilhar = document.getElementById("compartilhar");
//
var fContent = document.getElementById("facebook-social");
var gContent = document.getElementById("plus-feed");
var tContent = document.getElementById("twitter-widget");

//ABRE FACEBOOK SOCIAL PLUGIN
facebook.onclick = function(){
	fContent.style.display = 'block';
	if(gContent.style.display == 'block'){
		gContent.style.display = 'none';
	}
	if(tContent.style.display == 'block'){
		tContent.style.display = 'none';
	}
}
//ABRE G-PLUS SOCIAL PLUGIN
plus.onclick = function(){
	gContent.style.display = 'block';
	if(fContent.style.display == 'block'){
		fContent.style.display = 'none';
	}
	if(tContent.style.display == 'block'){
		tContent.style.display = 'none';
	}
}
twitter.onclick = function(){
	tContent.style.display = 'block';
		if(fContent.style.display == 'block'){
		fContent.style.display = 'none';
	}
	if(gContent.style.display == 'block'){
		gContent.style.display = 'none';
	}
}
