module.exports = function (lang) {
	return {
		game: {
			id: "xmas",
			api: {
				machine: "xmas"
			},
			figures: [
				{
					name: "Rudolph",
					animated: false,
					isFullHeight: false
				},
				{
					name: "Sleigh",
					animated: false,
					isFullHeight: false
				},
				{
					name: "Present",
					animated: false,
					isFullHeight: false
				},
				{
					name: "Gingerman",
					animated: false,
					isFullHeight: false
				},
				{
					name: "A",
					animated: false,
					isFullHeight: false
				},
				{
					name: "K",
					animated: false,
					isFullHeight: false
				},
				{
					name: "Q",
					animated: false,
					isFullHeight: false
				},
				{
					name: "J",
					animated: false,
					isFullHeight: false
				},
				{
					name: "10",
					animated: false,
					isFullHeight: false
				},
				{
					name: "Elf",
					animated: false,
					isFullHeight: false
				},
				{
					name: "Tree",
					animated: false,
					isFullHeight: true
				},
			],
			layout: {
				lines: [
					//LINE 1
					{
						vertices: [
						{ x: 10, y: 300 },
						{ x: 870, y: 300 }
						],
						numX: 3,
						numY: 270,
						numFrame: "1",
						freeSpins: false,
						color: 0x00009E,
						width: 5
					},
					//LINE 2
					{
						vertices: [
						{ x: 10, y: 150 },
						{ x: 870, y: 150 }
						],
						numX: 880,
						numY: 130,
						numFrame: "2",
						freeSpins: false,
						color: 0xDA1720,
						width: 5
					},
					//LINE 3
					{
						vertices: [
						{ x: 10, y: 465 },
						{ x: 870, y: 465 }
						],
						numX: 880,
						numY: 450,
						numFrame: "3",
						freeSpins: false,
						color: 0x004900,
						width: 5
					},
					//LINE 4
					{
						vertices: [
						{ x: 10, y: 150 },
						{ x: 135, y: 150 },
						{ x: 460, y: 450 },
						{ x: 780, y: 165 },
						{ x: 870, y: 165 }
						],
						numX: 3,
						numY: 130,
						numFrame: "4",
						freeSpins: false,
						color: 0x0086A1,
						width: 5
					},
					//LINE 5
					{
						vertices: [
						{ x: 10, y: 450 },
						{ x: 135, y: 450 },
						{ x: 460, y: 160 },
						{ x: 780, y: 450 },
						{ x: 870, y: 450 }
						],
						numX: 3,
						numY: 430,
						numFrame: "5",
						freeSpins: false,
						color: 0xA30019,
						width: 5
					},
					//LINE 6
					{
						vertices: [
						{ x: 40, y: 170 },
						{ x: 295, y: 170 },
						{ x: 460, y: 310 },
						{ x: 620, y: 185 },
						{ x: 870, y: 185 }
						],
						numX: 880,
						numY: 170,
						numFrame: "6",
						freeSpins: false,
						color: 0xE77600,
						width: 5
					},
					//LINE 7
					{
						vertices: [
						{ x: 40, y: 450 },
						{ x: 295, y: 450 },
						{ x: 460, y: 310 },
						{ x: 620, y: 430 },
						{ x: 870, y: 430 }
						],
						numX: 880,
						numY: 410,
						numFrame: "7",
						freeSpins: false,
						color: 0x008D00,
						width: 5
					},
					//LINE 8
					{
						vertices: [
						{ x: 40, y: 310 },
						{ x: 135, y: 310 },
						{ x: 295, y: 450 },
						{ x: 625, y: 450 },
						{ x: 780, y: 310 },
						{ x: 870, y: 310 }
						],
						numX: 880,
						numY: 290,
						numFrame: "8",
						freeSpins: false,
						color: 0xECBD00,
						width: 5
					},
					//LINE 9
					{
						vertices: [
						{ x: 40, y: 330 },
						{ x: 135, y: 330 },
						{ x: 295, y: 170 },
						{ x: 625, y: 170 },
						{ x: 780, y: 310 },
						{ x: 870, y: 310 }
						],
						numX: 3,
						numY: 310,
						numFrame: "9",
						freeSpins: false,
						color: 0x81004E,
						width: 5
					},
					//LINE 10
					{
						vertices: [
						{ x: 40, y: 185},
						{ x: 135, y: 185 },
						{ x: 300, y: 450 },
						{ x: 460, y: 160 },
						{ x: 625, y: 450 },
						{ x: 780, y: 165 },
						{ x: 870, y: 165 }
						],
						numX: 3,
						numY: 170,
						numFrame: "10",
						freeSpins: false,
						color: 0x5234D8,
						width: 5
					},
				],
				buttons: {
					mute: {
						x: 5,
						y: 470,
						visible: true
					},
					paytable: {
						x: 5,
						y: 555,
						visible: true
					},
					help: {
						x: 5,
						y: 515,
						visible: true
					},
					betDown: {
						x: 205,
						y: 510,
						visible: true
					},
					betUp: {
						x: 375,
						y: 510,
						visible: true
					},
					play: {
						x: 690,
						y: 490,
						visible: true
					},
				},
				displays: {
					wallet: {
						x: 140,
						y: 529,
						visible: true
					},
					betPerLine: {
						x: 325,
						y: 529,
						visible: true
					},
					bet: {
						x: 495,
						y: 529,
						visible: true
					},
					win: {
						x: 620,
						y: 529,
						visible: true
					},
					freeSpins: {
						x: 764,
						y: 529,
						visible: true
					},
				},
			}
		},
		animations: require("./animations"),
		atlases: require("./atlases/")(lang),
		audiosprites: require("./audiosprites/index.js")(lang),
		sprites: require("./sprites")(lang),
		// spritesheets: require("./spritesheets.js")(lang),
		sounds: require("./sounds.js")(lang),
	};
};
