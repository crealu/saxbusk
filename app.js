let songsWrapper = document.getElementsByClassName('songs-wrapper')[0];

let songs = [
	{
		name: 'What A Wonderful World',
		parts: [
			[
				'C', 'D', 'F', 'C', '|', 
				'D', 'C', '|', 
				'A♯', 'A', '|', 
				'G', 'F', '|',
				'F', 'E', 'F', 'G', 'A'
			],
			[
				'F', 'G', 'F', 'G', 'C', '|',
				'C', 'A♯', 'A', 'G', 'A',
			],
			[
				'A', 'C', 'D', 'C', 'A', 'D', 'C', '|',
				'D', 'C', 'A♯', 'A', 'G'
			]
		]
	},
	{
		name: 'Berimbau',
		parts: [
			[
				'E', 'D', '|',
				'G', 'F♯', '|',
				'G', 'A'
			],
			[
				'B', 'A', 'D', 'C', 'B', 'A', 'B', '|',
				'A', 'D', 'C', 'B', 'A', 'G', '|',
				'G', 'F♯', 'B', 'A', 'G', 'E'
			]
		]
	},
	{
		name: 'Bathtub Gin',
		parts: [
			[
				'C♯', 'D', '|',
				'G♯', 'A', 'B', 'C', 'B', 'A', '|',
				'F', 'F♯', 'G', '|',
				'A', 'G', '|',
				'F♯', 'F', 'F♯', 'G', '|',
				'F', 'F♯', 'D', 'C'
			],
			[
				'F', 'F', 'G', 'G', 'B', 'D', '|',
				'C', 'B', '|',
				'C', 'B', 'G', '|',
				'B', 'C', 'D', '|',
				'D', 'E', 'D', 'F', 'G'
			]
		]
	}
];

function parsePart(part) {
	let songDiv = document.createElement('div');
	let notes = [];
	let i = 0;

	while (part.length) {
		if (part[i] == '|' || i > part.length - 1) {
			part.splice(0, i);
			let partP = document.createElement('p');
			partP.classList.add('segment');
			notes.forEach(note => { partP.appendChild(note) });
			songDiv.appendChild(partP);
			text = '';
			notes = [];
			i = 0;
		} else {
			let note = document.createElement('span');
			note.classList.add('note');
			note.textContent = part[i];
			notes.push(note);
		}
		i++;
	}

	return songDiv;
}

function createSong(song, index) {
	const songDiv = document.createElement('div');
	songDiv.classList.add('song');

	const songTitle = document.createElement('h3');
	songTitle.textContent = song.name;
	songDiv.appendChild(songTitle);

	song.parts.forEach(part => {
		const songPart = parsePart(part);
		songDiv.appendChild(songPart);
	});

	const editBtn = document.createElement('button');
	editBtn.classList.add('edit-btn');
	editBtn.textContent = 'edit';
	editBtn.setAttribute('data-songid', index);
	editBtn.addEventListener('click', (event) => {
		// make HTML spans editable
		let id = event.target.dataset.songid;
		let theSong = document.getElementsByClassName('song')[id];
		let allPs = theSong.getElementsByClassName('note');
		for (let i = 0; i < allPs.length; i++) {
			allPs[i].setAttribute('contenteditable', true);
		}
	});

	// save button to set contenteditable to false and update current song
	// then save to database or localStorage ?
	// const saveBtn = document.createElement('button');

	songDiv.appendChild(editBtn);

	return songDiv;
}

function fillSongs() {

	songs.forEach((song, idx) => {
		const songDiv = createSong(song, idx);
		songsWrapper.appendChild(songDiv);
	})
}

fillSongs();
