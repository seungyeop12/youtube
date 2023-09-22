const frame = document.querySelector('section');
const api_key = 'AIzaSyA4iVjYFWaYcsCq0z7a2Ey2FO9MTtXA6QI';
const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
const pid = 'PLMMMmfSQpakSd6WsuPqYUflXHqd1YJliN';
const num = 5;
const resultURL = `${baseURL}?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;
const tit_ren = 50;
const desc_len = 180;

fetch(resultURL)
	.then((data) => data.json())
	.then((json) => {
		console.log(json.items);
		let tag = '';

		json.items.map((data) => {
			let desc = data.snippet.description;
			desc.length > desc_len ? (desc = desc.substr(0, desc_len) + '...') : desc;

			let date = data.snippet.publishedAt.split('T')[0];
			date = date.split('-').join(' ');

			let text = 'beef-lettuce-tomato';
			text = text
				.split('-')
				.map((el) => el.charAt(0).toUpperCase() + el.slice(1))
				.join(' ');
			console.log(text);

			tag += `
        <article>
          <h2>${
						data.snippet.title.length > tit_ren
							? data.snippet.title.substr(0, tit_ren) + '...'
							: data.snippet.title
					}</h2>
          <div class='txt'>
            <p>${desc}</p>
            <span>${date}</span>
          </div>
          <div class='pic'>
            <img src='${data.snippet.thumbnails.standard.url}'/>
          </div>
        </article>
      `;
		});

		frame.innerHTML = tag;
	});
