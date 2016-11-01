// JavaScript Document
var apiURL = "http://api.giphy.com/v1/gifs/search?q=";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var searchList = [];


$("#submitButton").on("click", function(){
var searchTerm = $("#searchKey").val().trim();	
console.log(searchTerm);
});

for (var i = 0; i < searchList.length; i++){
	var b = $("<button/>");
	b.text(searchList[i]);
	b.attr("class", "itemButton");
	b.val(searchList[i]);
}



//var searchTerm = "monkey";
// var queryURL = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
	
	var queryURL = apiURL + searchTerm + apiKey;

$.ajax({
	url: queryURL,
	method: "GET"
	
}).done(function(data){
	console.log(data);
});


var imageHolder = $("<div/>");
var giphyImage = $("<img/>");