'use strict';

$(document).ready(function() {
	const APIKEY = "AIzaSyAOlN6_KVX0PqPLsaA6raMgHhyA8DeX5Hw";
	const URL = "https://www.googleapis.com/youtube/v3/search";
	const EMBED = "https://www.youtube.com/embed";

	$("#search-form").submit(event => {
		event.preventDefault();
		let query = $("#query").val();
		getRequest(query);
	});

	const getRequest = (query) => {
		let params = {
			part: 'snippet',
			key: APIKEY,
			q: query,
			type: 'video'
		};
		
		$.getJSON(URL, params, data => {
			console.log(data);
		});
	} 

});