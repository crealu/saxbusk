let songs = [
	{
		name: 'Autumn Leaves',
		parts: [
			[
				'F♯', 'G♯', 'A', 'D', '|',
				'E', 'F♯', 'G♯', 'C♯', '|',
				'D', 'D', 'F♯', 'B', '|',
			],
			[
				'C♯', 'D♯', 'F', 'A'
			],
			[
				'P1', 'G♯', 'B', 'A', 'F♯'
			],
			[
				'F♯', 'F', 'F♯', '', 'G♯', 'C♯', 'G♯', '|',
				'G♯', 'F♯', 'G♯', 'A', '|',
				'A', 'G♯', 'A', 'B', 'E', 'B', '|',
				'E', 'E', 'D', 'C♯'
			],
			[
				'C', 'C♯', 'D', 'D', 'B', '|',
				'G♯', 'D', 'C♯', 'C♯', '|',
				'D', 'B', 'A', 'G♯',
				'A', 'C♯', 'F♯'
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
		name: 'What A Wonderful World',
		parts: [
			[
				'C', 'D', 'F', 'C', '|', 
				'D', 'C', '', 'A♯', 'A', '', 'G', 'F', '|',
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
		name: 'Tequila Song',
		parts: [
			[
				'A', 'D', 'D', 'C', 'E', 'C', 'D', 'A', '|',
				'A', 'D', 'D', 'C', 'E', 'C', 'D'
			],
			[
				'A', 'C', 'D', 'F', 'D', '(3x)'
			],
			[
				'E (6x)', 'C', 'tequila'
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
		name: 'Hallelujah',
		parts: [
			[
				'F♯', 'A', 'A', 'A', '|', 
				'A', 'B', 'B', 'B', '}(2x)', '|',
				'A', 'B (5x)', 'A', 'A', 'G', 'A', 'A'
			],
			[
				'F♯', 'A (4x)', 'B', 'B', 'C♯', '|',
				'A', 'D (6x)', 'E', '|',
				'D', 'E (4x)', 'F♯', 'F♯', '|',
				'F♯', 'E', 'E', 'D'
			],
			[
				'F♯', 'A', 'B', 'B', '|',
				'B', 'A', 'F♯', 'F♯', '|',
				'...', '|',
				'G', 'F♯', 'E', 'D', 'D'
			]
		]
	},
	{
		name: 'Pokemon Theme',
		parts: [
			[
				'B (4x)', '', 'B', 'A', 'F♯', 'D', '|',
				'E', 'B', 'B', 'A', 'G', 'A', '|',
				'C (4x)', '', 'C', 'B', 'A', 'G', '|',
				'A', 'B', 'B', 'A', 'G', 'B'
			],
			[
				'B', 'D', 'E', '|', 
				'E', 'D', 'B', 'G', '|',
				'E', 'E', 'F♯', 'G', 'F♯', 'E', 'E', 'D'
			],
			[
				'E', 'E', 'D', 'B', 'G', '|',
				'G', 'A', 'B', 'B', 'A', 'G', 'B'
			],
			[
				'P2', '|',
				'C', 'G', 'G', '', 'G', 'D', 'G', 'G', '|',
				'G', 'G', 'G', 'F♯', '|',
				'B', 'B', 'D', 'E', 'E'
			]
		]
	},
	{
		name: 'Baker Street',
		parts: [
			[
				'G', 'G', 'F♯', 'E', 'D', 'E', 'F♯', 'E', '|',
				'G', 'G', 'F♯', 'E', 'D', 'B', '|',
				'G', 'G', 'F♯', 'E', 'D (4x)', 'B', '|',
				'G', 'G', 'F♯', 'E', 'D', 'E', 'F♯', 'E'
			]
		]
	},

	{
		name: 'C Bluegrass Lick',
		parts: [
			[
				'D', 'B', 'F♯', 'B', 'A', 'F', 'F♯', 'F', '|',
				'E', 'D', 'B', 'A', 'D', 'B', 'A', 'G', '|',
				'A', 'F', 'F♯', 'A', 'F-E-D', 'E', 'F', '|',
				'F♯', 'A', 'B', 'C♯', 'D', 'B', 'A', 'D♯', 'D'
			]
		]
	},
	{
		name: 'Redbone',
		key: 'F',
		parts: [
			[
				'E', 'B', 'A', 'G', 'F♯', 'D', 'B', 'D', 'E', '|',
				'D', 'E', 'G', 'D', 'B', 'F♯', 'G', 'A', 'G'
			],
			[
				'E', 'B', 'C', 'D', 'C', '|',
				'B', 'A', 'G', 'A', 'B', 'A', '|',
				'E-F♯', 'E', 'D', 'B', 'E'
			]
		]
	},
	{
		name: 'Us (FKJ)',
		key: 'A♯',
		parts: [
			[
				'D', 'E', 'F', 'G', 'A', 'C', 'B', 'G', 'A', 'E', '|',
				'D', 'E', 'F', 'G', 'A', 'C', 'B', 'G', 'A', 'G', '|'
			],
			[
				'Little fills', '|',
				'E', 'G', 'E', '|',
				'E', 'G', 'B', '|',
				'A', 'C', 'D-E', 'D-E', '|',
				'C', 'D', 'B', 'A', 'G', 'E'
			]
		]
	},
	{
		name: 'Tadow',
		key: 'C',
		parts: [
			[
				'C♯', 'D', 'C♯', 'B', '}(2x)', '|',
				'F♯', 'E', 'B', '|',
				'C♯', 'D', 'C♯', 'B', '}(2x)', '|',
				'F♯', 'E', 'A'
			],
			[
				'D', 'C-C♯', 'A', 'B', '', 'D', 'B', 'A', 'B', '|',
				'E', 'D', 'E', 'F♯', 'E', 'D', 'C♯', 'C♯-D', 'B', '|',
				'D', 'C♯', 'B', 'A', 'G', 'D', 'E', 'D', 'C♯-D', 'B'
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
