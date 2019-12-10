var counter = 0;

class GameScene extends Phaser.Scene {

	constructor(){
		super({ key: 'GameScene' })
	}

	preload() {
		this.load.image('select', 'assets/select.png');
	}


	create() {
		this.cameras.main.backgroundColor.setTo(255,255,254);

		const word = this.add.text(w/2, h/2 - h/4, answers[0].word, {fill: colors.headline, font: 'bold 80px Montserrat'}).setOrigin(0.5, 0.5);
		
		// buttons
		const fem = this.add.sprite(w/4 - 50, 2 * h/3, 'select');
    	fem.setOrigin(0.5);
    	fem.setInteractive();
    	fem.on('pointerup', function (pointer) {
    	});
    	fem.tint = colors.button;
    	this.add.text(fem.x, fem.y, "fem", {fill: colors.headline, font: '50px Montserrat'}).setOrigin(0.5, 0.5);

    	const masc = this.add.sprite(w/2, 2 * h/3, 'select');
    	masc.setOrigin(0.5);
    	masc.setInteractive();
    	masc.on('pointerup', function (pointer) {
    	});
    	masc.tint = colors.button;
    	this.add.text(masc.x, masc.y, "masc", {fill: colors.headline, font: '50px Montserrat'}).setOrigin(0.5, 0.5);

    	const neutral = this.add.sprite(3 * w/4 + 50, 2 * h/3, 'select');
    	neutral.setOrigin(0.5);
    	neutral.setInteractive();
    	neutral.on('pointerup', function (pointer) {
    	});
    	neutral.tint = colors.button;
    	this.add.text(neutral.x, neutral.y, "neutral", {fill: colors.headline, font: '50px Montserrat'}).setOrigin(0.5, 0.5);

	}

	update() {
		// if (gameState.cursors.left.isDown) {
		// 	gameState.player.setVelocityX(-160);
		// } else if (gameState.cursors.right.isDown) {
		// 	gameState.player.setVelocityX(160);
		// } else {
		// 	gameState.player.setVelocityX(0);
		// }
	}
}
