let riffsWrapper = document.getElementsByClassName('riffs-wrapper')[0];

let mandolinFreboard = [
	['E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B', 'C', 'C♯', 'D', 'D♯', 'E'],
	['A', 'A♯', 'B', 'C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A'],
	['D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B', 'C', 'C♯', 'D'],
	['G', 'G♯', 'A', 'A♯', 'B', 'C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'F']
];

function locateNote(note, lower) {
	let start = 0;
	if (lower) {
		start = 7;
	}
	for (let i = 0; i < mandolinFreboard.length; i++) {
		let string = mandolinFreboard[i];
		for (let j = start; j < string.length; j++) {
			if (j == 7) {
				break;
			}
			if (string[j] == note) {
				return `s${i}f${j}`
			}
		}
	}
}

function isNote(note) {
	return note != '|' && note != '' && note != '[' && note != ']' && note != '1'
}

let parts = [
	[
		'C', 'E', 'G', 'A♯', 'D', '|',
		'E', 'G', 'A♯', 'D', 'E', '|',
		'G', 'A♯', 'D', 'E', 'G', '|',
		'A♯', 'D', 'E', 'G', 'A♯', '|',
		'D', 'E', 'G', 'A♯', 'D', '|',
		'E', 'G', 'A♯', 'D', 'E'
	],
	[
		'A♯', 'A♯', 'D', 'A', '|',
		'D', 'A', 'G', 'C', 'A', 'G', 'D', '|',
		'A', 'A', 'C', 'G', '|',
		'A', 'A', 'G', 'F', 'G', 'F', 'C', '|',
		'G', 'G', 'A♯', 'F', '|',
		'G', 'G', 'F', 'E', 'G', 'E', 'C', 'A♯', '|',
		'F', 'F', 'A', 'E', '|',
		'F', 'F', 'E', 'D', 'G', 'F', 'C', 'A♯', '|',
		'A♯', 'A♯', 'D', 'A', '|',
		'A♯', 'A♯', 'A', 'G', 'D', 'A', 'G', 'D', '|',
		'A', 'A', 'C', 'C', '|',
		'D', 'D', 'C', 'A', 'D♯', 'D', 'C', 'A', '|',
		'G', 'A♯', 'D', 'A♯', '|',
		'G', 'A♯', 'A♯', 'A', 'C', 'A♯', 'G', 'D', '|',
		'C', 'C', 'G', 'A♯', '|',
		'C', 'C', 'A♯', 'G', 'E', 'D' 
	],
	[
		'A', '[', 'D', 'A♯', 'G', ']', 'G', 'F♯', 'G', '|',
		'G', '[', 'C', 'A', 'F', ']', 'F', 'E', 'F', '|',
		'F', '[', 'A♯', 'G', 'E', ']', 'E', 'D♯', 'E', '|',
		'E', '[', 'A', 'F', 'D', ']', 'D', 'C♯', 'D', '|',
		'1', '|',
		'A♯', '[', 'D♯','C', 'F♯', ']', 'A', 'G♯', 'A', '|',
		'C', '[', 'D', 'A♯', 'G', ']', 'A♯', 'A', 'A♯', '|',
		'A', '[', 'A♯', 'G', 'E', ']', 'G', 'F', 'E'
	]
];

class Fret {
	constructor(nid) {
		this.div = document.createElement('div');
		this.div.classList.add('fret');
		this.nid = nid;
		this.setup();
	}

	setup() {
		// this.addListener();
	}

	addListener() {
		this.div.addEventListener('click', (event) => {
			this.restyle(event.target);
		});
	}

	restyle(el) {
		if (el.style.background === 'gray') {
			el.style.background = 'none';
		} else {
			el.style.background = 'gray';
		}
	}

	placeNote(fn) {
		let note = document.createElement('div');
		note.classList.add('note');
		note.textContent = fn;
		this.div.appendChild(note);
		return true;
	}
}

class String {
	constructor(number) {
		this.div = document.createElement('div');
		this.div.classList.add('string');
		this.number = number;
		this.frets = [];
		this.setup();
	}

	setup() {
		for (let i = 0; i < 20; i++) {
			let nid = `s${this.number}f${i}`;
			let fret = new Fret(nid);
			this.frets.push(fret);
			this.div.appendChild(fret.div);
		}
	}
}

class Fretboard {
	constructor(part) {
		this.div = document.createElement('div');
		this.strings = [];
		this.seq = part;
		this.setup();
	}

	setup() {
		this.div.classList.add('fretboard');
		this.fillStrings();
		this.fillSequence();
	}

	fillStrings() {
		for (let s = 0; s < 4; s++) {
			let string = new String(s);
			this.strings.push(string);
			this.div.appendChild(string.div);
		}
	}


	fillSequence() {
		for (let i = 0; i < this.seq.length; i++) {
			let note = this.seq[i];
			if (isNote(note)) {
				let nid = locateNote(note, false);
				console.log(nid);
				let splitId = nid.split('f');
				let sn = parseInt(splitId[0].replace('s', ''));
				let fn = parseInt(splitId[1]);
				let loc = this.strings[sn].frets[i];
				loc.placeNote(fn);
			}
		}
	}
}

function loadRiffs() {
	for (let i = 0; i < parts.length; i++) {
		let fbCount;
		if (parts[i].length >= 20) {
			fbCount = parts[i].length / 20;
		}
		for (let f = 0; f < fbCount; f++) {
			let newParts = parts[i].length >= 20 
				? parts[i].splice(0, 20)
				: parts[i];
			let fretboard = new Fretboard(newParts);
			riffsWrapper.appendChild(fretboard.div);
		}
	}
}

window.addEventListener('load', loadRiffs);
