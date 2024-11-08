let songs = [
	{
		name: 'Autumn Leaves',
		key: 'C',
		parts: [
			[
				'F♯', 'G♯', 'A', 'D', '|',
				'E', 'F♯', 'G♯', 'C♯', '|',
				'D', 'E', 'F♯', 'B', '|',
				'C♯', 'D♯', 'F', 'A', '|'
			],
			[
				'1', '', 'G♯', 'B', 'A', 'F♯', '|'
			],
			[
				'F♯', 'F', 'F♯', '', 'G♯', 'C♯', 'G♯', '|',
				'G♯', 'F♯', 'G♯', 'A', '|',
				'A', 'G♯', 'A', '', 'B', 'E', 'B', '|',
				'E', 'E', 'D', 'C♯'
			],
			[
				'C', 'C♯', 'D', 'D', 'B', '|',
				'G♯', 'D', 'C♯', 'C♯', '|',
				'D', 'B', 'A', 'G♯', '|',
				'A', 'C♯', 'F♯', '|'
			]
		]
	},
	{
		name: 'Berimbau',
		key: 'F',
		parts: [
			[
				'E', 'D', '', 'G', 'F♯', '', 'G', 'A', '|'
			],
			[
				'B', 'A', 'D', 'C', 'B', 'A', 'B', '|',
				'A', 'D', 'C', 'B', 'A', 'G', '|',
				'G', 'F♯', 'B', 'A', 'G', 'E', '|'
			]
		]
	},
	{
		name: 'Bathtub Gin',
		key: 'C',
		parts: [
			[
				'C♯', 'D', '|',
				'G♯', 'A', 'B', 'C', 'B', 'A', 'F', 'F♯', 'G', '|',
				'A', 'G', '|',
				'F♯', 'F', 'F♯', 'G', 'F', 'F♯', 'D', 'C', '|'
			],
			[
				'F', 'F', 'G', '|',
				'G', 'B', 'D', 'C', 'B', 'C', 'B', 'G', '|',
				'B', 'C', 'D', '|',
				'D', 'E', 'D', 'F', 'G', '|'
			]
		]
	},
	{
		name: 'What A Wonderful World',
		key: 'C',
		parts: [
			[
				'C', 'D', 'F', 'C', '|', 
				'D', 'C', '', 'A♯', 'A', '', 'G', 'F', '|',
				'F', 'E', 'F', 'G', 'A', '|'
			],
			[
				'F', 'G', 'F', 'G', 'C', '|',
				'C', 'A♯', 'A', 'G', 'A', '|'
			],
			[
				'A', 'C', 'D', 'C', 'A', 'D', 'C', '|',
				'D', 'C', 'A♯', 'A', 'G', '|'
			]
		]
	},
	{
		name: 'Tequila Song',
		key: 'A',
		parts: [
			[
				'A', 'D', 'D', 'C', 'E', 'C', 'D', 'A', '|',
				'A', 'D', 'D', 'C', 'E', 'C', 'D', '|'
			],
			[
				'A', 'C', 'D', 'F', 'D', '(3x)', '|'
			],
			[
				'E', '(6x)', 'C', '(tequila)', '|'
			]
		]
	},
	{
		name: "Ain't No Sunshine",
		key: 'G',
		parts: [
			[
				'F♯', 'A', 'B', 'D', 'C♯', 'A', 'B', '|',
				'F♯', 'A', 'B', 'D', 'C♯', 'A', 'F♯', '|',
				'F♯', 'A', 'B', 'F♯', 'E', 'F♯', 'F♯', 'E', '|',
				'D', 'E', 'D', 'B', 'A', 'B', 'A', 'B', '|'
			],
			[
				'A', 'B', '...', 'A', 'B', 'A', 'D', '|'
			]
		]
	},
	{
		name: "Can't Help Falling In Love",
		key: 'C',
		parts: [
			[
				'D', 'A', 'D', '|',
				'E', 'F♯', 'G', 'F♯', 'E', '|',
				'A', 'B', 'C♯', 'D', '|',
				'E', 'F♯', 'G', 'F♯', 'E', 'D', '|'
			],
			[
				'C♯', 'F♯', 'A', 'C♯', 'B', '(3x)', '|',
				'A', 'A', '|',
				'F♯', 'A', 'F♯', 'G', '|'
			]
		]
	},
	{
		name: "Careless Whisper",
		key: 'A♯',
		parts: [
			[
				'F♯', 'E', 'B', 'G', '|',
				'D', 'C', 'G', 'E', '|',
				'C', 'B', 'G', 'E', '|',
				'B', 'C', 'D', 'E', 'F♯', 'G', 'A', 'B', '|'
			]
		]
	},
	{
		name: 'Just A Friend',
		key: 'C',
		parts: [
			[
				'D', 'F', 'A', '|',
				'F♯', 'E', 'D', '|',
				'E', 'G', 'B', '|',
				'B', 'D', 'E', 'F♯', 'E', 'D', 'E', '(2x)', '|',
				'A', 'A', '|'
			]
		]
	},
	{
		name: 'Hallelujah',
		key: 'C',
		parts: [
			[
				'F♯', 'A', 'A', 'A', '|',
				'A', 'B', 'B', 'B', '|',
				'A', 'B', '|', 
				'A', 'A', 'G', 'A', 'A', '|'
			],
			[
				'F♯', 'A', '', 'A', 'B', 'B', 'C♯', '|',
				'A', 'D', '', 'D', 'E', '|',
				'D', 'E', '', 'E', 'F♯', 'F♯', '|',
				'F♯', 'E', 'E', 'D', '|'
			],
			[
				'F♯', 'A', 'B', 'B', '', 'B', 'A', 'F♯', 'F♯', '|',
				'F♯', 'A', 'B', 'B', '|',
				'B', 'A', 'G', 'A', 'G', 'F♯', 'E', 'D', 'D', '|'
			]
		]
	},
	{
		name: 'Pokemon Theme',
		key: 'C',
		parts: [
			[
				'B', '(4x)', '', 'B', 'A', 'F♯', 'D', '|',
				'E', 'B', 'B', 'A', 'G', 'A', '|',
				'C', '(4x)', '', 'C', 'B', 'A', 'G', '|',
				'A', 'B', 'B', 'A', 'G', 'B', '|'
			],
			[
				'B', 'D', 'E', '|', 
				'E', 'D', 'B', 'G', '|',
				'E', 'E', 'F♯', 'G', 'F♯', 'E', 'E', 'D', '|'
			],
			[
				'E', 'E', 'D', 'B', 'G', '|',
				'G', 'A', 'B', 'B', 'A', 'G', 'B', '|'
			],
			[
				'(P2)', '|',
				'C', 'G', 'G', '', 'G', 'D', 'G', 'G', '|',
				'G', 'G', 'G', 'F♯', '|',
				'B', 'B', 'D', 'E', 'E', '|'
			]
		]
	},
	{
		name: 'Baker Street',
		key: 'F',
		parts: [
			[
				'G', 'G', 'F♯', 'E', 'D', 'E', 'F♯', 'E', '|',
				'G', 'G', 'F♯', 'E', 'D', 'B', '|',
				'G', 'G', 'F♯', 'E', 'D', '', 'B', '|',
				'G', 'G', 'F♯', 'E', 'D', 'E', 'F♯', 'E', '|'
			]
		]
	},
	// {
	// 	name: 'C Bluegrass Lick',
	// 	key: 'C',
	// 	parts: [
	// 		[
	// 			'D', 'B', 'F♯', 'B', 'A', 'F', 'F♯', 'F', '|',
	// 			'E', 'D', 'B', 'A', 'D', 'B', 'A', 'G', '|',
	// 			'A', 'F', 'F♯', 'A', 'F', 'E', 'D', 'E', 'F', '|',
	// 			'F♯', 'A', 'B', 'C♯', 'D', 'B', 'A', 'D♯', 'D', '|'
	// 		]
	// 	]
	// },
	{
		name: 'Redbone',
		key: 'F',
		parts: [
			[
				'E', 'B', 'A', 'G', 'F♯', 'D', 'B', 'D', 'E', '|',
				'D', 'E', 'G', 'D', 'B', 'F♯', 'G', 'A', 'G', '|'
			],
			[
				'E', 'B', 'C', 'D', 'C', '|',
				'B', 'A', 'G', 'A', 'B', 'A', '|',
				'E', 'F♯', 'E', 'D', 'B', 'E', '|'
			]
		]
	},
	{
		name: 'Us',
		key: 'A♯',
		parts: [
			[
				'D', 'E', 'F', 'G', 'A', 'C', 'B', 'G', 'A', 'E', '|',
				'D', 'E', 'F', 'G', 'A', 'C', 'B', 'G', 'A', 'G', '|'
			],
			[
				'E', 'G', 'E', '|',
				'A', 'C', 'D', 'E', 'D', 'E', '|',
				'E', 'D', 'B', '|'
			],
			[
				'D', 'C', 'D', 'B', 'A', 'G', 'E', '|'
			]
		]
	},
	{
		name: 'Tadow',
		key: 'C',
		parts: [
			[
				'C♯', 'D', 'C♯', 'B', '(2x)', '', 'F♯', 'E', 'B', '|',
				'C♯', 'D', 'C♯', 'B', '(2x)', '', 'F♯', 'E', 'A', '|'
			],
			[
				'D', 'C♯', 'A', 'B', '', 'D', 'B', 'A', 'B', '|',
				'E', 'D', 'E', 'F♯', 'E', 'D', 'C♯', 'D', 'B', '|',
				'D', 'C♯', 'B', 'A', 'G', 'D', 'E', 'D', 'C♯', 'B', '|'
			]
		]
	},
	{
		name: 'Get Lucky',
		key: 'F',
		parts: [
			[
				'D', 'A', 'G', 'F♯', 'G', 'F♯', 'E', '(2x)', '|',
				'D', 'A', 'G', 'F♯', 'G', 'F♯', 'G', '|',
				'D', 'A', 'G', 'F♯', 'G', 'F♯', 'E', '|'
			],
			[
				'C', '', 'B', 'C', 'E', '|',
				'E', 'F♯', 'G', '', 'G', 'A', 'F♯', '|',
				'C', '', 'B', 'C', 'E', '|',
				'G', 'A', 'B', '', 'E', 'B', 'A', '|'
			],
			[
				'C (6x)', 'D', '|',
				'B (6x)', 'D', '|',
				'A (5x)', 'B', 'A', 'G', '|'
			]
		]
	},
	{
		name: 'Feel Good Inc',
		key: 'D♯',
		parts: [
			[
				'F', 'F', 'G', 'G♯', 'C♯', 'C', '|',
				'A♯', 'A♯', 'C♯', 'C', 'G♯', 'F', '|',
				'G', 'F', '|'
			],
			[
				'C', '(4x)', 'B', '(3x)', 'A♯', 'A♯', 'G♯', '|',
				'F', 'G♯', '(alternating)', '|',
				'F', 'A♯', 'G♯', 'F', '|'
			],
			[
				'F', 'G', 'G♯', 'A♯', 'C', 'D♯', 'C', '|',
				'A♯', 'G♯', 'F', 'G♯', 'A♯', 'G', 'F', 'D♯', '|'
			]
		]
	},
	{
		name: 'Great Fairy Fountain',
		key: 'C',
		parts: [
			[
				'D', 'F♯', 'A', 'C', 'E', '|', 
				'F♯', 'A', 'C', 'E', 'F♯', '|', 
				'A', 'C', 'E', 'F♯', 'A', '|', 
				'C', 'E', 'F♯', 'A', 'C', '|', 
				'E', 'F♯', 'A', 'C', 'E', '|', 
				'F♯', 'A', 'C', 'E', 'F♯', '|'
			],
			// [
			// 	'C', 'C', 'E', 'B', '|', 
			// 	'E', 'B', 'A', 'D', 'B', 'A', 'E', '|', 
			// 	'B', 'B', 'D', 'A', '|', 
			// 	'B', 'B', 'A', 'G', 'A', 'G', 'D', '|', 
			// 	'A', 'A', 'C', 'G', '|', 
			// 	'A', 'A', 'G', 'F♯', 'A', 'F♯', 'D', '|', 
			// 	'G', 'G', 'B', 'F♯', '|', 
			// 	'G', 'G', 'F♯', 'E', 'A', 'G', 'D', '|', 
			// 	'C', 'C', 'E', 'B', '|', 
			// 	'C', 'C', 'B', 'A', 'E', 'B', 'A', '|', 
			// 	'B', 'B', 'D', 'D', '|', 
			// 	'E', 'E', 'D', 'B', 'F', 'E', 'D', '|', 
			// 	'A', 'C', 'E', 'C', '|', 
			// 	'A', 'C', 'C', 'B', 'D', 'C', 'A', '|', 
			// 	'D', 'D', 'A', 'C', '|',
			// 	'D', 'D', 'C', 'A', 'F♯', 'E', '|'
			// ],
			[
				'B', '[E', 'C', 'A]', 'A', 'G♯', 'A', '|', 
				'A', '[D', 'B', 'G]', 'G', 'F♯', 'G', '|', 
				'G', '[C', 'A', 'F♯]', 'F♯', 'F', 'F♯', '|', 
				'F♯', '[B', 'G', 'E]', 'E', 'D♯', 'E', '|', 
				'B', '[E', 'C', 'A]', 'A', 'G♯', 'A', '|', 
				'C', '[F', 'D', 'G♯]', 'B', 'A♯', 'B', '|', 
				'D', '[E', 'C', 'A]', 'C', 'B', 'C', '|', 
				'B', '[C', 'A', 'F♯]', 'A', 'G', 'F♯', '|'
			]
		]
	},
	{
		name: 'Thrills',
		key: 'G',
		parts: [
			[
				'F♯', 'F♯', 'A', 'A', 'C♯', 'C♯', 'E', 'E', '|',
				'G♯', 'A', 'G♯', '|',
				'F♯', 'E', 'F♯', 'C♯', '|',
				'B', 'A', 'B', 'D', '|'
			]
		]
	},
	{
		name: "Life's A Beach",
		key: 'C',
		parts: [
			[
				'B', 'A', 'F♯', 'E', 'D', 'A', 'F♯', '|'
			]
		]
	},
	{
		name: 'Dreams',
		key: 'C',
		parts: [
			[
				'A', 'C', 'D', 'E', 'D', 'C', 'A', 'C', '|',
				'A', 'C', 'A', 'D', 'A', '|',
				'A', 'C', 'D', 'E', '', 'D', 'C', 'D', 'A', '|'
			],
			[
				'A', 'A', 'G', 'C', 'B', '|',
				'A', 'A', 'G', 'E', '(6x)', 'A', '|',
				'A', 'E', 'D', 'C', '|',
				'A', 'E', 'D', '', 'C', 'A', 'D', 'C', '|'
			],
			[
				'G', 'G', 'E', 'D', 'C', '|',
				'C', 'A', 'D', 'C', 'C', 'D', 'D', '|',
				'G', 'G', 'E', 'D', 'C', 'A', 'E', 'D', 'D', '|',
				'C', 'C', 'D', 'C', '|'
			],
			[
				'A', 'C', 'D', 'D', 'C', '|',
				'A', 'C', 'C', 'A', 'G', '|',
				'D', 'D', 'E', 'D', 'C', '|'
			],
			[
				'E', '(5x)', 'D', 'C', 'C', 'D', 'A', '|',
				'E', '(4x)', 'A', 'G', 'E', 'E', 'E', 'D', 'C', '|',
				'E', 'E', 'A', 'E', 'A', '|',
				'E', 'D', 'G', 'C', 'G', 'B', 'A', '|',
				'E', '(4x)', 'A', 'G', 'E', 'E', 'D', 'C', '|',
				'E', 'D', 'C', '|'
			]
		]
	},
	{
		name: 'Sukiyaki',
		key: 'C',
		parts: [
			[
				'E', 'F♯', 'A', '|',
				'A', 'B', 'C♯', 'A', 'F♯', 'C♯', 'E', '|'
			],
			[
				'A', 'A', 'B', 'C♯', 'A', 'F♯', 'E', '(2x)', '|',
				'A', 'A', 'B', 'C♯', '', 'C♯', 'E', 'F♯', '|',
				'F♯', 'E', 'F♯', '', 'E', 'C♯', 'B', '|'
			],
			[
				'A', 'A', 'F♯', 'B', '|',
				'B', 'B', 'A', 'C♯', '|',
				'A', 'A', 'F♯', 'E', 'C♯', 'A', 'F♯', 'A', 'A', '|'
			],
			[
				'D', 'D', 'D', 'E', 'F♯', '|',
				'D', 'F♯', 'E', '', 'E', 'C♯', 'E', '|',
				'D', 'D', 'D', 'E', 'F', '|',
				'D', 'F', 'E', '', 'C♯', 'A', 'B', '|'
			]
		]
	},
	{
		name: 'Last Summer Whisper',
		key: 'A',
		parts: [
			[
				'A♯', 'G♯', 'G♯', '|',
				'G♯', 'F♯', 'F', 'F♯', 'G♯', 'F♯', 'F', '|',
				'C♯', 'A♯', '|',
				'A♯', 'G♯', 'G♯', '|',
				'G♯', 'F♯', 'F', 'F♯', 'G♯', 'F♯', 'F', '|',
				'D♯', 'F', 'D', 'C♯', '|'
			],
			[
				'C♯', '(5x)', 'B', 'F♯', '|',
				'F♯', 'G♯', 'A♯', 'A♯', 'A♯', 'B', 'A♯', 'B', 'A♯', '|',
				'A♯', 'A♯', 'F♯', 'A♯', 'F♯', 'G♯', '(A)', 'A♯', '|',
				'C', 'C♯', '(4x)', 'B', 'F♯', '|',
				'F♯', 'G♯', 'A♯', 'A♯', 'A♯', 'B', 'A♯', 'B', 'A♯', '|',
				'A♯', 'A♯', 'F♯', 'A♯', 'F♯', 'G♯', '(A)', 'A♯', '|'
			],
			[
				'(omo sugita)', '|',
				'G♯', 'A♯', 'B', 'F♯', 'F', 'F♯', 'F', '', 'D♯', '|',
				'B', 'G♯', 'F', 'F♯', 'F', '|',
				'B', 'B', 'A♯', 'F♯', 'D♯', 'F♯', 'G♯', '(F♯)', 'F', '|'
			]
		]
	},
	{
		name: 'Sparkle',
		key: 'E',
		parts: [
			[
				'A♯', 'F♯', 'G♯', 'A♯', '|',
				'F♯', 'D♯', 'F', 'F♯', '|',
				'F', 'F♯', 'G♯', 'F♯', 'F', 'C♯', 'A♯', '|'
			],
			[
				'A♯', 'G♯', 'F♯', 'D♯', 'G♯', 'A♯', '|',
				'F♯', 'D♯', 'F', 'G♯', '|',
				'F', 'F♯', 'G♯', 'F♯', 'F', 'C♯', 'A♯', '|'
			],
			[
				'D♯', 'F', 'F♯', 'G♯', '|',
				'F♯', 'F', 'F♯', 'G♯', '|',
				'D♯', 'F', 'F♯', 'A♯', '|',
				'F♯', 'G♯', 'A♯', 'A♯', '|'
			],
			[
				'D♯', 'A♯', 'C♯', 'D♯', 'G♯', 'F♯', '|',
				'F♯', 'F', 'D♯', 'F', 'F♯', '|',
				'D♯', 'F', 'F♯', 'A♯', '', 'G♯', 'A♯', 'G♯', '|'
			]
		]
	},
	{
		name: 'Plastic Love',
		key: 'F',
		parts: [
			[
				'B', 'D', 'E', 'B', 'D', 'E', 'B', 'D', 'E', '|'
			],
			[
				'B', 'C♯', 'A', 'B', 'G', 'F', 'G', '|',
			],
			[
				'E', 'E', 'D', 'E', '|',
				'F♯', 'F♯', 'E', 'F♯', '|',
			],			
			[
				'(outro)', '|',
				'B', 'B', 'A', 'B', '|',
				'A', 'A', 'G', 'A', '|',
				'G', '|'
			],
			[
				'E', 'G', 'D', 'E', 'B', 'D', 'F', 'B', '|'
			]
		]
	},
	{
		name: 'Shyness Boy',
		key: 'E',
		parts: [
			[
				'F♯', 'G♯', 'A♯', 'B', 'C♯', '', 'D♯', 'A♯', 'C♯', '|',
				'F♯', 'G♯', 'A♯', 'B', 'A♯', 'G♯', 'F♯', '|',
				'D♯', 'D♯', 'F♯', 'G♯', 'A♯', 'F♯', 'D♯', '|'
			],
			[
				'E', 'F♯', 'G♯', 'B', 'C♯', 'D♯', '|',
				'F♯', 'D♯', 'F♯', 'E', 'F', 'C♯', '|'
			]
		]
	},
	{
		name: 'Shaken',
		key: 'F',
		parts: [
			[
				'D', 'E', 'G', 'B', 'E', 'D', 'B', '|',
				'G', 'A', 'B', 'C', 'B', 'A', 'G', '|'
			],
			[
				'E', 'D', 'D', 'E', '|',
				'A', 'B', 'C', 'B', '|',
				'E', 'E', 'D', 'A', 'G', '|',
				'G', 'A', 'B', 'C', 'B', '|'
			],
			[
				'(top 3)', '', 'A', 'C', 'B', 'A', 'G', '|'
			],
			[
				'E', 'D', 'E', 'D', 'E', 'D', '|',
				'E', 'D', 'B', 'A', 'G', '|',
				'E', 'D', 'E', 'G', 'A', 'B', 'B', '|',
				'E', 'E', 'D', 'G', '|',
				'E', 'E', 'D', 'E', 'D', 'A', 'G', '|',
				'E', 'G', 'A', 'B', 'C', 'B', 'A', '|'
			],
			[
				'G', 'G', 'F♯', 'F♯', 'E', 'E', 'D', '|',
				'B', 'A', 'B', '|',
				'G', 'G', 'F♯', 'E', 'B', '|',
				'B', 'C', 'B', 'A', '|'
			]
		]
	},
	{
		name: 'Gotta Get Up',
		key: 'F♯',
		parts: [
			[
				'C', 'D♯', 'F', 'G♯', 'A♯', 'C', 'D♯', '|'
			],
			[
				'G♯', 'C', 'D♯', 'G', 'C', '|',
				'F', 'G♯', 'C', 'A♯', 'F', '|'
			],
			[
				'A♯', 'C', 'C', '(3x)', '', 'C♯', 'D♯', 'D♯', 'F', '|'
			],
			[
				'C', 'A♯', 'G♯', 'F', 'D♯', 'F', 'G♯',
				'F', 'D♯', 'F', '|',
				'C', 'A♯', 'G♯', 'F', 'D♯', 'F', 'G♯', '|',
				'C', 'C♯', 'C', 'A', '|',
				'C', 'D♯', 'C', 'A♯', 'G♯', 'A♯', '|',
				'F', 'F', 'D♯', 'A♯', 'G♯', 'F', '|',
				'C', 'A♯', 'G♯', 'A♯', 'G♯', 'A♯', 'G♯', '|',
				'C', 'C♯', 'C', 'A♯', '|'
			],
			[
				'G♯', 'A♯', '|',
				'C', 'A♯', 'G♯', 'F', '', 'D♯', 'A♯', 'G♯', 'F', 'G♯', '|',
				'C', 'A♯', 'G♯', 'F', '', 'D♯', 'A♯', 'G♯', 'F', 'G♯', '|',
				'G', 'G♯', 'G', '|',
				'D♯', 'A♯', 'G♯', 'F', 'G♯', '|',
				'F', 'D♯', 'F', '|'
			]
		]
	},
	{
		name: 'Konya Wa Hanasanai',
		key: 'C',
		parts: [
			[
				'F♯', 'G', 'F♯', '', 'F♯', 'E', 'G', 'F♯', '|'
			],
			[
				'B', 'C♯', 'D', 'E', 'E', 'F♯', '|',
				'E', 'D', 'E', 'C', '|',
				'F♯', 'A', 'B', 'D', 'G', 'F♯', 'G', '|',
				'D', 'C♯', 'D', 'E', 'F♯', '|'
			],
			[
				'E', '(6x)', 'B', 'F♯', '|',
				'D', '(6x)', 'A', 'F♯', '|',
				'F♯', 'E', 'D', 'C♯', 'B', 'A', 'B', '|'
			],
			[
				'F♯', 'G', 'F♯', 'D', 'B', 'F♯', 'G', 'F♯', '|',
				'F♯', 'E', 'B', 'F♯', 'E', 'F♯', 'G', '|',
				'F♯', 'G', 'A', 'B', 'B', 'A', 'G', 'F♯', 'G', 'F♯', '|',
				'C♯', 'C♯', 'D', 'G', 'C♯', 'E', 'F♯', '|'
			],
			[
				'B', 'D', 'B', 'C♯', 'C♯', 'C♯', '|',
				'B', 'C♯', 'D', 'E', 'D', 'C♯', 'D', '|',
				'D', 'C♯', 'B', 'G', 'G', 'F♯', 'G', '|',
				'E', 'G', 'A', 'C♯', 'B', 'G', 'F♯', '|',
				'C♯', 'C♯', 'D', 'E', 'D', 'C♯', 'B', '|'
			]
		]
	},
	{
		name: 'Tokai',
		key: 'E',
		parts: [
			[
				'C', 'A', 'G', 'F', 'E', '|',
				'F', 'G', 'D♯', 'E', 'C', '|',
				'C', 'D', 'E', 'E', '', 'F', 'E', 'D', '|',
				'G♯', 'A', 'C', '', 'C', 'D', 'D♯', 'E', 'G', '|',
				'G♯', 'A', 'C', '', 'C♯', 'D♯', '|'
			]
		]
	},
	{
		name: 'Binary Sunset',
		key: 'F♯',
		parts: [
			[
				'E', 'A', 'B', 'C', 'D', 'C', 'E', '|',
				'E', 'A', 'B', 'C', 'E', 'C', 'A', 'E', 'D', '|',
				'E', 'A', 'B', 'C', 'A', 'E', 'C', 'A', '|',
				'C', 'B', 'A', 'E', 'C', 'A', 'E', '|',
				'E', 'E', 'A', '|'
			]
		]
	},
	{
		name: 'Kiss Me',
		key: 'A♯',
		parts: [
			[
				'A', 'G', 'C', 'A', '|',
				'A', 'G', 'C', 'A', '|',
				'A', 'G', 'A', 'C', '|'
			]
		]
	},
	{
		name: "Isn't She Lovely",
		key: 'D',
		parts: [
			[
				'C♯', 'F♯', 'A', 'E', '|'
			],
			[
				'G♯', 'A', 'G♯', 'F♯', 'E', '|',
				'G♯', 'A', 'G♯', 'F♯', 'E', 'B', 'C♯', 'B', '|',
				'G♯', 'A', 'B', 'B', '', 'B', 'G♯', 'A', 'B', 'A', '|',
				'G♯', 'G♯', 'G♯', 'F♯', 'E', 'C♯', 'G♯', 'F♯', 'G♯', 'F♯', '|',
				'G♯', 'A', 'G♯', 'F♯', 'E', 'C♯', 'B', 'E', '|',
				'B', 'C♯', 'E', 'F♯', 'G♯', 'A', 'B', 'E', 'E', '|'
			]
		]
	},
	{
		name: "Fly Me To The Moon",
		key: 'A♯',
		parts: [
			[
				'D', 'C♯', 'B', 'A', 'G', 'A', 'B', 'D', '|',
				'C♯', 'B', 'A', 'G', 'F♯', '|',
				'B', 'A', 'G', 'F♯', 'E', 'F♯', 'G', 'B', '|',
				'A♯', 'G', 'F♯', 'E', 'D', '|'
			],
			[
				'D♯', 'E', 'B', 'B', '', 'D', 'C♯', 'A', '|',
				'C♯', 'D', 'G', 'G', '', 'B', 'A', 'G', 'F♯', '|'
			],
			[
				'P1', '|'
			],
			[
				'D♯', 'E', 'B', 'B', '', 'D', 'C♯', 'A', '|',
				'A♯', 'B', 'D', 'D', '', 'D', 'E', 'D', '|'
			]
		]
	},
	{
		name: "Smooth Operator",
		key: 'Em',
		parts: [
			[
				'E', 'F♯', 'G', 'A', 'B', '|',
				'D', 'E', 'F♯', 'G/F♯', 'D', 'E', '|'
			],			
			[
				'E', 'F♯', 'G', 'A', 'B', '|',
				'D', 'E', 'F♯', 'G', 'E', 'F♯', 'D', 'E', '|'
			],
			[
				'E', 'F♯', 'G', 'A', 'B', '|',
				'D', 'E', 'F♯', 'G/F♯', 'D', 'E', '|',
				'E', 'F♯', 'G', 'A', 'C♯', '|',
				'A', 'G', 'E', 'F♯', 'D', 'B', '|'
			],
			[
				'(solo)', '|',
				'E', 'D', 'E', 'G', 'E', 'F♯', 'G', 'F♯', 'G', '|',
				'A', 'G', 'A', 'B', 'A', 'B', 'D', 'F♯', '|',
				'D', 'B', 'B', 'D', 'E', 'F♯', 'G', 'A', 'G/F♯', 'D', 'E', '|',
				'G', 'A', 'B', 'D', 'E', '|',
				'D', 'B', 'C♯', 'A', 'G', 'A', 'B', 'A', 'G', 'A/G/E', 'F♯', '|',
				'D', 'B', 'D', 'E', '|',
				'G', 'A', 'C♯', 'B', 'D', 'E', 'F♯', 'G', 'F♯', 'E', 'E', '|',
				'B', 'C', 'C♯', 'D', 'B', 'G', 'E', 'F♯', 'D', 'B', '|'
			]
		]
	},
	{
		name: "Spooky",
		key: "C",
		parts: [
			[
				'B', 'B', 'B', 'A', 'B', 'B', '|',
				'D', 'E', '(3x)', '|',
				'D', 'B', 'A', 'B', 'D', '|'
			],
			[
				'F♯', 'A', 'B', 'B', 'A', 'B', 'B', '|',
				'D', 'E', '(3x)', '|',
				'D', 'B', 'A', 'B', 'D', '|'
			],
			[
				'A', 'B', 'B', 'B', '|',
				'B', 'D', 'E', 'F♯', 'E', 'D', 'B', '|',
				'B', 'B', 'D', 'E', '|',
				'B', 'F', 'F', 'E', 'B', '|'
			]
		]
	},
	{
		name: "Pink Panther",
		key: "A♯",
		parts: [
			[
				'G♯', 'A', '', 'B', 'C', '|', 
				'G♯', 'A', 'B', 'C', 'F', 'E', 'A', 'C', 'E', 'D♯', '|', 
				'D', 'C', 'A', 'G', 'A', '|'
			],
			[
				'G♯', 'A', '', 'B', 'C', '|', 
				'G♯', 'A', 'B', 'C', 'F', 'E', 'C', 'E', 'A', 'G♯', '|', 
				'D', 'C', 'A', 'G', 'A', '|'
			],
			[
				'P1', '|'
			],
			[
				'A', 'G', 'E', 'D', 'C', 'A', '|',
				'D♯', 'D', '(4x)', '', 'C', 'A', 'G', 'A', 'A', '|'
			]
		]
	}
];