let notes = ['A', 'A♯', 'B', 'C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯'];
const saxNotes = [
  {
    name: 'C♯',
    pads: []    	
  },  
  {
    name: 'C',
    pads: [2]
  },
  {
    name: 'B',
    pads: [1]
  },  
  {
    name: 'A♯',
    pads: [1, 7]
  },
  {
    name: 'A',
    pads: [1, 2]
  },  
  {
    name: 'G♯',
    pads: [1, 2, 3, 8]
  },
  {
    name: 'G',
    pads: [1, 2, 3]
  },
  {
    name: 'F♯',
    pads: [1, 2, 3, 5]
  },
  {
    name: 'F',
    pads: [1, 2, 3, 4]
  },
  {
    name: 'E',
    pads: [1, 2, 3, 4, 5]
  },
  {
    name: 'D♯',
    pads: [1, 2, 3, 4, 5, 6, 11]
  },
  {
    name: 'D',
    pads: [1, 2, 3, 4, 5, 6]
  },
  {
    name: 'C♯',
    pads: [1, 2, 3, 4, 5, 6, 10, 12]
  }
]
let sax = document.getElementsByClassName('sax')[0];

function createSegment(notes) {
	let p = document.createElement('p');
	p.classList.add('segment');
	notes.forEach(note => { p.appendChild(note) });
	return p;
}

function checkSharp(part) {
	let str = '';
	if (part.includes('♯')) {
		str = part.replaceAll('♯', '<span class="sharp">♯</span>')
	} else {
		str = part;
	}
	return str;
}

function parsePart(part) {
	let partDiv = document.createElement('div');
	let partNotes = [];
	
	for (let i = 0; i < part.length; i++) {
		if (part[i] == '|') {
			let partP = createSegment(partNotes);
			partDiv.appendChild(partP);
			partNotes = [];
		} else {
			let note = document.createElement('span');
			note.classList.add('note');

			if (part[i].length <= 2) {
				note.classList.add('one-note');
			}

			let str = checkSharp(part[i]);
			note.innerHTML = str;

			partNotes.push(note);
		}
	}

	return partDiv;
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

	songs.forEach((song, idx) => {
		const songDiv = createSong(song);
		songDiv.setAttribute('data-sid', idx);
		songsWrapper.appendChild(songDiv);
	});
}

function saxify() {
	let last = songs.length - 1;
	let song = songs[last];
	let songDiv = document.getElementsByClassName('song')[last];
	let segment = 1;
	let part = song.parts[segment];
	let subseg = 0;
	for (let i = 0; i < part.length; i++) {
		let note = part[i];

		for (let j = 0; j < saxNotes.length; j++) {
			if (note == saxNotes[j].name) {
				let newSax = sax.cloneNode(true);
				for (let a = 0; a < saxNotes[j].pads.length; a++) {
					let pad = saxNotes[j].pads[a] - 1;
					newSax.children[pad].style.fill = 'red';
				}
				songDiv.appendChild(newSax);
			}
		}

		if (note == '|') {
			songDiv.innerHTML += '<br/>';
		}
	}
}

window.addEventListener('load', fillSongs);
