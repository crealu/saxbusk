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
	},
	{
		name: "Can't Help Falling In Love",
		parts: [
			[
				'D', 'A', 'D', '|',
				'E', 'F♯', 'G', 'F♯', 'E', '|',
				'A', 'B', 'C♯', 'D', '|',
				'E', 'F♯', 'G', 'F♯', 'E', 'D'
			],
			[
				'C♯', 'F♯', 'A', 'C♯', 'B', '(3x)', '|',
				'A', 'A', '|',
				'F♯', 'A', 'F♯', 'G'
			]
		]
	},
	{
		name: "Careless Whisper",
		parts: [
			[
				'F♯', 'E', 'B', 'G', '|',
				'D', 'C', 'G', 'E', '|',
				'C', 'B', 'G', 'E', '|',
				'B', 'C', 'D', 'E', 'F♯', 'G', 'A', 'B'
			]
		]
	},
	{
		name: 'Just A Friend',
		parts: [
			[
				'D', 'F♯', 'A', '(quick)', '|',
				'F♯', 'E', 'D', '|',
				'E', 'G', 'B', '(quick)', '|',
				'B', 'D', 'E', 'F♯', 'E', 'D', 'E', '(2x)'
			]
		]
	},
	{
		name: 'Tequila Song',
		parts: [
			[
				'A', 'D', 'D', 'C', 'E', 'C', 'D', 'A', '|',
				'A', 'D', 'D', 'C', 'E', 'C', 'D'
			],
			[
				'A', 'C', 'D', 'F♯', 'D', '(3x)'
			],
			[
				'E', 'E', 'E', 'E', 'E', 'E', 'C', 'tequila'
			]
		]
	},
	{
		name: "Ain't No Sunshine",
		parts: [
			[
				'F♯', 'A', 'B', 'D', 'C♯', 'A', 'B', '(2x)', '|',
				'B', 'B', 'D', 'F♯', 'E', 'F♯', 'F♯', 'E', '|',
				'D', 'E', 'D', 'B', 'A', 'B', 'A', 'B', '(2x)'
			],
			[
				'A', 'B', 'A', 'B', '...', '|',
				'A', 'B', 'A', 'D'
			],
			[
				'F♯', 'E', 'F♯', 'F♯', 'G', 'F♯', 'F♯', 'E', 'D', 'E', '|',
				'D', 'F♯', 'E', 'E', 'D', 'B', 'B', 'B', 'A'
			]
		]
	},
	{
		name: 'Hallelujah',
		parts: [
			[
				'F♯', 'A', 'A', 'A', '', 'A', 'B', 'B', 'B', '(2x)', '|',
				'A', 'B', 'B', 'B', 'B', 'B', '', 'A', 'A', 'G', 'A', 'A'
			],
			[
				'F♯', 'A', 'A', 'A', 'A', 'B', 'B', 'C♯', '|',
				'A', 'D', 'D', 'D', 'D', 'D', 'D', 'E', '|',
				'D', 'E', 'E', 'E', 'E', 'F♯', 'F♯', '|',
				'F♯', 'E', 'E', 'D'
			],
			[
				'F♯', 'A', 'B', 'B', 'B', 'A', 'F♯', 'F♯', '|',
				'F♯', 'A', 'B', 'B', 'B', 'A', 'F♯', 'G', 'F♯', 'E', 'D', 'D'
			]
		]
	},
	{
		name: 'Pokemon Theme',
		parts: [
			[
				'B', 'B', 'B', 'B', '', 'B', 'A', 'F♯', 'D', '|',
				'E', 'B', 'B', 'A', 'G', 'A', '|',
				'C', 'C', 'C', 'C', '', 'C', 'B', 'A', 'G', '|',
				'A', 'B', 'B', 'A', 'G', 'B'
			],
			[
				'B', 'D', 'E', '', 'E', 'D', 'B', 'G', '|',
				'E', 'E', 'F♯', 'G', 'F♯', 'E', 'E', 'D', '|',
				'E', 'E', 'D', 'B', 'G', '|',
				'G', 'A', 'B', 'B', 'A', 'G', 'B'
			],
			[
				'C', 'G', 'G', '', 'G', 'D', 'G', 'G', '|',
				'G', 'G', 'G', 'F♯', '|',
				'B', 'B', 'D', 'E', 'E'
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

function createSong(song) {
	const songDiv = document.createElement('div');
	songDiv.classList.add('song');

	const songTitle = document.createElement('h3');
	songTitle.textContent = song.name;
	songDiv.appendChild(songTitle);

	song.parts.forEach(part => {
		const songPart = parsePart(part);
		songDiv.appendChild(songPart);
	});

	return songDiv;
}

function fillSongs() {
	let songsWrapper = document.getElementsByClassName('songs-wrapper')[0];

	songs.forEach(song => {
		const songDiv = createSong(song);
		songsWrapper.appendChild(songDiv);
	})
}

fillSongs();
