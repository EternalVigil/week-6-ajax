// JavaScript Document
$(document).ready(function(){
	"use strict";
var apiURL = "http://api.giphy.com/v1/gifs/search?q=";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var topics = ["Tesla", "Elon Musk", "John Cleese", "Gary Oldman", "Macbook Pro", "Explosions", "Batman"];
var searchTerm = "";
var queryURL = "";
var giphyLimit = 10;

$("#submit").on("click", function () {
	searchTerm = $("#searchWord").val().trim();
	if (searchTerm === ""){
		//console.log("You didn't enter anything.");
		return false;
	}
	else{
	//console.log(searchTerm);

	topics.push(searchTerm);
	//console.log(topics);

	createButtons();

	$("#searchWord").val("");

	return false;
	}
});	

function createButtons() {
	$("#typeRow").empty();

	for (var i = 0; i < topics.length; i++) {


		//console.log(topics[i]);
		//console.log(i);

		var b = $("<button/>");
		b.text(topics[i]);
		b.attr("class", "itemButton");
		b.attr("data-name", topics[i]);

		$("#typeRow").append(b);
	}

}
function clickButton(){
	//console.log("you clicked?");
	searchTerm = $(this).text();
	//console.log(searchTerm);
	queryURL = apiURL + searchTerm + apiKey;
	//console.log(queryURL);
	ajaxCall();
}

function ajaxCall() {
	$.ajax({
		url: queryURL,
		method: "GET"

	}).done(function (giphyData) {
		//console.log(giphyData);
		populateGifs(giphyData);
	}).fail(function () {
		//console.log("Unexpected error / server timeout - try again");
	});

}
function populateGifs(info){
	$("#giphyContainer").empty();
	//console.log(info);
	for (var i = 0; i < giphyLimit; i++){
		
	var animatedImg = info.data[i].images.fixed_height.url;
	var staticImg = info.data[i].images.original_still.url;
	var imgRating = info.data[i].rating;
		//console.log(imgRating);
		
	var d = $("<div>");
	d.addClass("imgHolder");
		
	var x = $("<img>");
	x.attr("class", "giphyImg");
	x.attr("src", staticImg);
	x.attr("staticURL", staticImg);
	x.attr("animatedURL", animatedImg);
	x.attr("state", "static");
	
	var p = $("<p>");
	p.addClass("RatingIMG");
	p.text("Giphy Rating: " + imgRating);
		
	$(d).append(x);
	$(d).append(p);
		
	$("#giphyContainer").append(d);	
	//console.log(x);	
	}
	
}
function toggleState(){
	//console.log("Yes?");
	var newURL = "";
	var stateCheck = $(this).attr("state");
	//console.log(stateCheck);
	
	if (stateCheck === "static"){
		//console.log("image ain't moving");
		newURL = $(this).attr("animatedURL");
		$(this).attr("state", "animated");
		
	}
	else {
		//console.log("why'd you stop?");
		newURL = $(this).attr("staticURL");
		$(this).attr("state", "static");
		
		
	}
	$(this).attr("src", newURL);
}
function clearWindow(){
	$("#searchWord").val("");
	return false;
}
	$(document).ready(createButtons());
	$(document).on("click", ".itemButton", clickButton);
	$(document).on("click", "#clearButton", clearWindow);
	$(document).on("click", ".giphyImg", toggleState);
	});