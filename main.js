const api_key = 'AIzaSyA4iVjYFWaYcsCq0z7a2Ey2FO9MTtXA6QI';
const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
const pid = 'PLMMMmfSQpakSd6WsuPqYUflXHqd1YJliN';
const num = 5;
const resultURL = `${baseURL}?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;

fetch(resultURL)
	.then((data) => data.json())
	.then((json) => {
		console.log(json);
	});
