const songsWrapper = document.getElementsByClassName('songs-wrapper')[0];
const expandAllBtn = document.getElementsByClassName('expand-all-btn')[0];
const sax = document.getElementsByClassName('sax')[0];
const keyMenu = document.getElementsByClassName('key-menu')[0];

let expanded = false;

const notes = ['A', 'A♯', 'B', 'C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯'];
const indices = {
  "A": 0,
  "A♯": 1,
  "B": 2,
  "C": 3,
  "C♯": 4,
  "D": 5,
  "D♯": 6,
  "E": 7,
  "F": 8,
  "F♯": 9,
  "G": 10,
  "G♯": 11
}

let sid = 0;

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

function toggleElement(el) {
	if (el.style.display == 'none') {
		el.style.display = 'block';
	} else {
		el.style.display = 'none';
	}
}

function expandParts(event) {
	if (event.target.classList[0] == 'song') {
		let parts = event.target.children[2];
		sid = event.target.dataset.sid;
		toggleElement(parts);
	} else if (event.target.classList[0] == 'song-title') {
		let parts = event.target.nextSibling.nextSibling;
		sid = event.target.parentNode.dataset.sid;
		toggleElement(parts);
	}

	console.log(sid);
}

function handleKeyClick(event) {
	event.preventDefault();
	toggleElement(keyMenu);
}

function addKey(songDiv, key) {
	const iconWrapper = document.createElement('div');
	iconWrapper.classList.add('icon-wrapper');

	const icon = document.createElement('img');
	icon.classList.add('key-icon');
	icon.src = './img/key-icon.svg';

	const keyText = document.createElement('p');
	keyText.classList.add('key-text');
	keyText.textContent = key;

	iconWrapper.addEventListener('click', handleKeyClick);

	iconWrapper.appendChild(icon);
	iconWrapper.appendChild(keyText);
	songDiv.appendChild(iconWrapper);
}

function createSong(song) {
	const songDiv = document.createElement('div');
	songDiv.classList.add('song');

	const songTitle = document.createElement('h3');
	songTitle.classList.add('song-title');
	songTitle.textContent = song.name;
	songDiv.appendChild(songTitle);

	addKey(songDiv, song.key);

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

function isNote(note) {
	return note != '|' && note != '' && note != '[' && note != ']' && note != '1'
}

function adjustParts(shift) {
	let parts = songs[sid].parts;

	let newParts = parts.map(part => {
		let newPart = part.map(note => {
			let newNote = note;
			if (isNote(note)) {
				let index = indices[note] + shift;
				if (index >= 11) {
					index -= 11;
				}
				newNote = notes[index];
			}

			return newNote;
		})

		return newPart;
	})

	return newParts;
}

function changeKey(event) {
	let fromKey = songs[sid].key;
	let toKey = event.target.textContent;

	console.log(fromKey, toKey);

	let diff = indices[toKey] - indices[fromKey];
	let shift = diff;

	if (diff < 0) {
		shift *= -1;
	}3

	let newParts = adjustParts(shift);

	let songDiv = document.getElementsByClassName('song')[sid];
	let keyText = document.getElementsByClassName('key-text')[sid];
	let partsDiv = document.getElementsByClassName('parts')[sid];

	while (partsDiv.firstChild) {
		partsDiv.removeChild(partsDiv.firstChild);
	}

	newParts.forEach(part => {
		const songPart = parsePart(part);
		partsDiv.appendChild(songPart);
	});

	keyText.textContent = toKey;
	songs[sid].key = toKey;
	songs[sid].parts = newParts;
}

function addKeyChangeListener() {
	const keyNotes = document.getElementsByClassName('key-note');
	for (let i = 0; i < keyNotes.length; i++) {
		keyNotes[i].addEventListener('click', changeKey);
	}
}

function fillSongs() {
	songs.forEach((song, idx) => {
		const songDiv = createSong(song);
		songDiv.setAttribute('data-sid', idx);
		songsWrapper.appendChild(songDiv);
	});
}

function loadPage() {
	addKeyChangeListener();
	fillSongs();
}

expandAllBtn.addEventListener('click', () => {
	let songs = document.getElementsByClassName('song');
	let value = expanded ? 'none' : 'block';
	for (let i = 0; i < songs.length; i++) {
		songs[i].children[1].style.display = value;
	}
	expanded = !expanded;
});

window.addEventListener('load', loadPage);
