const frame = document.querySelector('section');
const api_key = 'AIzaSyA4iVjYFWaYcsCq0z7a2Ey2FO9MTtXA6QI';
const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
const pid = 'PLMMMmfSQpakSd6WsuPqYUflXHqd1YJliN';
const num = 5;
const resultURL = `${baseURL}?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;
const tit_ren = 50;

fetch(resultURL)
	.then((data) => data.json())
	.then((json) => {
		console.log(json.items);
		let tag = '';

		json.items.map((data) => {
			let desc = data.snippet.description;
			desc.length > desc_len ? (desc = desc.substr(0, desc_len) + '...') : desc;

			tag += `
        <article>
          <h2>${
						data.snippet.title.length > tit_ren
							? data.snippet.title.substr(0, tit_ren) + '...'
							: data.snippet.title
					}</h2>
          <div class='txt'>
            <p>${data.snippet.description}</p>
            <span>${data.snippet.publishedAt}</span>
          </div>
          <div class='pic'>
            <img src='${data.snippet.thumbnails.standard.url}'/>
          </div>
        </article>
      `;
		});

		frame.innerHTML = tag;
	});
