// JavaScript Document
var apiURL = "http://api.giphy.com/v1/gifs/search?q=";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var searchList = [];
var searchTerm = "";
var queryURL = "";

$("#submit").on("click", function () {
	"use strict";
	searchTerm = $("#searchWord").val().trim();
	console.log(searchTerm);

	searchList.push(searchTerm);
	console.log(searchList);

	createButtons();

	$("#searchWord").val("");

	queryURL = apiURL + searchTerm + apiKey;
	console.log(queryURL);






	return false;
});

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

function ajaxCall() {
	"use strict";
	$.ajax({
		url: queryURL,
		method: "GET"

	}).done(function (giphyData) {
		console.log(giphyData);
	}).fail(function () {
		console.log("Unexpected error / server timeout - try again");
	});

}

//var imageHolder = $("<div/>");
//var giphyImage = $("<img/>");
