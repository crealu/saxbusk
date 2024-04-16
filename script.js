const songsWrapper = document.getElementsByClassName('songs-wrapper')[0];
const sax = document.getElementsByClassName('sax')[0];
const expandAllBtn = document.getElementsByClassName('expand-all-btn')[0];

let expanded = false;

const notes = ['A', 'A♯', 'B', 'C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯'];
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

function createSegment(notes) {
	let p = document.createElement('p');
	p.classList.add('segment');
	notes.forEach(note => { p.appendChild(note) });
	return p;
}

function checkSharp(part) {
	return part.includes('♯')
		? part.replaceAll('♯', '<span class="sharp">♯</span>')
		: part;
}

function parsePart(part) {
	let partDiv = document.createElement('div');
	partDiv.classList.add('part');
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

function toggleParts(parts) {
	if (parts.style.display == 'none') {
		parts.style.display = 'block';
	} else {
		parts.style.display = 'none';
	}
}

function expandParts(event) {
	if (event.target.classList[0] == 'song') {
		let parts = event.target.children[1];
		toggleParts(parts);
	} else if (event.target.classList[0] == 'song-title') {
		let parts = event.target.nextSibling;
		toggleParts(parts);
	}
}

function createSong(song) {
	const songDiv = document.createElement('div');
	songDiv.classList.add('song');

	const songTitle = document.createElement('h3');
	songTitle.classList.add('song-title');
	songTitle.textContent = song.name;
	songDiv.appendChild(songTitle);

	const partsWrapper = document.createElement('div');
	partsWrapper.classList.add('parts');

	song.parts.forEach(part => {
		const songPart = parsePart(part);
		partsWrapper.appendChild(songPart);
	});

	songDiv.appendChild(partsWrapper);
	songDiv.addEventListener('click', expandParts);

	return songDiv;
}

function fillSongs() {
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

expandAllBtn.addEventListener('click', () => {
	let songs = document.getElementsByClassName('song');
	let value = expanded ? 'none' : 'block';
	for (let i = 0; i < songs.length; i++) {
		songs[i].children[1].style.display = value;
	}
	expanded = !expanded;
});

window.addEventListener('load', fillSongs);
