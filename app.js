'use strict';

$(document).ready(function() {
	const APIKEY = "AIzaSyAOlN6_KVX0PqPLsaA6raMgHhyA8DeX5Hw";
	const URL = "https://www.googleapis.com/youtube/v3/search";
	const EMBED = "https://www.youtube.com/embed/";
	let token;

	$("#search-form").submit(event => {
		event.preventDefault();
		let query = $("#query").val();
		getRequest(query);
	});

	const getRequest = (query, token) => { 
		let params = {
			part: 'snippet',
			key: APIKEY,
			q: query,
			type: 'video',
			pageToken: token
		};
		
		$.getJSON(URL, params, data => {
			for(var i =0; i < data.items.length; i++) {
				var thumbnail = data.items[i].snippet.thumbnails.default.url;
				var clickable = EMBED + data.items[i].id.videoId;
				
				var html = "";
				html += `<div class="result-box">`;
				html += "<h3>" + data.items[i].snippet.title + "</h3>";
				html += `<a href='${clickable}'> <img src='${thumbnail}'> </a>`
				$("#results").append(html);
			}
			 var token = data.nextPageToken;

			console.log(data);
		});

	} 

});