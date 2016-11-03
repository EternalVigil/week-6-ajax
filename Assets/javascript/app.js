// JavaScript Document
var apiURL = "http://api.giphy.com/v1/gifs/search?q=";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var searchList = [];
var searchTerm = "";
var queryURL = "";

$("#submit").on("click", function () {
	"use strict";
	searchTerm = $("#searchWord").val().trim();
	if (searchTerm === ""){
		console.log("You didn't enter anything.");
		return false;
	}
	else{
	console.log(searchTerm);

	searchList.push(searchTerm);
	//console.log(searchList);

	createButtons();

	$("#searchWord").val("");

	return false;
	}
});


	$(document).on("click", ".itemButton", clickButton);
	
// var queryURL = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";

function createButtons() {
	"use strict";
	$("#typeRow").empty();

	for (var i = 0; i < searchList.length; i++) {


		console.log(searchList[i]);
		console.log(i);

		var b = $("<button/>");
		b.text(searchList[i]);
		b.attr("class", "itemButton");
		b.attr("data-name", searchList[i]);

		$("#typeRow").append(b);
	}

}
function clickButton(){
	"use strict";
	console.log("you clicked?");
	searchTerm = $(this).text();
	console.log(searchTerm);
	queryURL = apiURL + searchTerm + apiKey;
	console.log(queryURL);
	ajaxCall();
}

function ajaxCall() {
	"use strict";
	$.ajax({
		url: queryURL,
		method: "GET"

	}).done(function (giphyData) {
		//console.log(giphyData);
		populateGifs(giphyData);
	}).fail(function () {
		console.log("Unexpected error / server timeout - try again");
	});

}
function populateGifs(info){
	"use strict";
	console.log(info);
	var temp = info.data[0].embed_url;
	console.log(temp);
}
//var imageHolder = $("<div/>");
//var giphyImage = $("<img/>");
