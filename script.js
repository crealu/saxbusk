let notes = ['A', 'A♯', 'B', 'C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯'];

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

window.addEventListener('load', fillSongs);
