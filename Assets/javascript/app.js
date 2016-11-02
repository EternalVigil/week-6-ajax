// JavaScript Document
var apiURL = "http://api.giphy.com/v1/gifs/search?q=";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var searchList = [];
var searchTerm = "";
var queryURL = "";

$("#submit").on("click", function () {
	searchTerm = $("#searchWord").val().trim();
	console.log(searchTerm);
	searchList.push(searchTerm);
	console.log(searchList);
	$("#searchWord").val("");
	queryURL = apiURL + searchTerm + apiKey;
	console.log(queryURL);
	return false;
});

for (var i = 0; i < searchList.length; i++) {
	console.log("loop time");
	var b = $("<button/>");
	b.text(searchList[i]);
	b.attr("class", "itemButton");
	b.attr("data-name", searchList[i]);
	$("#typeRow").append(b);
}

// var queryURL = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";



$.ajax({
	url: queryURL,
	method: "GET"

}).done(function (data) {
	//console.log(data);
});


var imageHolder = $("<div/>");
var giphyImage = $("<img/>");
