class GenderScene extends Phaser.Scene {
	constructor() {
		super({ key: 'GenderScene' })
	}

	preload() {
		this.load.image('square', 'assets/square.png');
	}

	create() {
		const gray = 0xA9A9A9;
	var fem = false; // grayed out
	var squares = [];
	const word = "professionnelle";
	const toggleNum = 13;
	var width = (w - (word.length*65))/2;
	for (var i = 0; i < word.length; i++) {
		width += 65;
		const square = this.add.sprite(width, 275, 'square');
		square.tint = colors.headlineNum;
		squares.push(square);
		const text = this.add.text(square.x, square.y, word[i], {
			font: "50px Merriweather",
			fill: colors.white,
		});
		text.setOrigin(0.5)
		if(i >= toggleNum) {
			square.setInteractive();
			square.tint = 0xA9A9A9;
			square.on('pointerup', function (pointer) {
				if(fem) {
					// turn them gray
					for (var j = toggleNum; j < word.length; j++) {
						squares[j].setTint(gray);
					}
					// update text
					topWord.setText('Skilled worker (m)');
					bottomWord.visible = false;
				}
				else {
					// reveal
					for (var j = toggleNum; j < word.length; j++) {
						squares[j].setTint(colors.headlineNum);
					}
					topWord.setText('Skilled worker (f)');
					bottomWord.visible = true;
				}
				
				fem = !fem;
        	
        	});
			square.on('pointerover', function (pointer) {
				if(fem) {
					// turn them gray
					for (var j = toggleNum; j < word.length; j++) {
						squares[j].setTint(gray);
					}
				}
				else {
					for (var j = toggleNum; j < word.length; j++) {
						squares[j].setTint(colors.headlineNum);
					}
				}
			});
			square.on('pointerout', function (pointer) {
				if(!fem) {
					// turn them gray
					for (var j = toggleNum; j < word.length; j++) {
						squares[j].setTint(gray);
					}
				}
				else {
					for (var j = toggleNum; j < word.length; j++) {
						squares[j].setTint(colors.headlineNum);
					}
				}
			});
		}
	}

	const topWord = 
	this.add.text( w/2, h - 200, 'Skilled worker (m)', {fill: colors.headline, font: '40px Montserrat'}).setOrigin(0.5, 0.5);
	const bottomWord = 
	this.add.text( w/2, h - 150, 'Prostitute', {fill: colors.headline, font: '40px Montserrat'}).setOrigin(0.5, 0.5);
	bottomWord.visible = false;
	const back = this.add.text(50, h - 100, "↩️", {
		fill: colors.headline,
		font: '70px Montserrat'
	});

	back.setInteractive();
	back.on('pointerdown', () => {
		this.scene.stop('GenderScene');
		this.scene.start('ResultsScene');
	})
}
}