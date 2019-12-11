class DominatingScene extends Phaser.Scene {
	constructor() {
		super({ key: 'DominatingScene' })
	}

	create() {
		var numWomen = 0;
		var numMen = 0;

		const women = 
		this.add.text(w/3, 150, '0 women', {fill: colors.headline, font: '80px Montserrat'}).setOrigin(0.5, 0.5);
		const wPlus = 
		this.add.text(women.x - 100, women.y + 50, '+', {fill: colors.headline, font: '80px Montserrat'});
		wPlus.setInteractive();
		wPlus.on('pointerdown', () => {
			numWomen++;
			const ending = (numWomen == 1) ? ' woman' : ' women';
			women.setText(numWomen + ending);
			if(numMen == 0) {
				value.setText("Feminine");
			}
		});
		const wMinus = 
		this.add.text(women.x + 100, women.y + 50, '-', {fill: colors.headline, font: '80px Montserrat'});
		wMinus.setInteractive();
		wMinus.on('pointerdown', () => {
			if (numWomen > 0) numWomen--;
			const ending = (numWomen == 1) ? ' woman' : ' women';
			women.setText(numWomen + ending);
			if(numWomen == 0 && numMen == 0) {
				value.setText("Empty");
			}
		});

		const men = 
		this.add.text(2*w/3, 150, '0 men', {fill: colors.headline, font: '80px Montserrat'}).setOrigin(0.5, 0.5);
		const mPlus = 
		this.add.text(men.x - 100, men.y + 50, '+', {fill: colors.headline, font: '80px Montserrat'});
		mPlus.setInteractive();
		mPlus.on('pointerdown', () => {
			numMen++;
			const ending = (numMen == 1) ? ' man' : ' men';
			men.setText(numMen + ending);
			value.setText("Masculine");

		});
		const mMinus = 
		this.add.text(men.x + 100, men.y + 50, '-', {fill: colors.headline, font: '80px Montserrat'});
		mMinus.setInteractive();
		mMinus.on('pointerdown', () => {
			if (numMen > 0 ) numMen--;
			const ending = (numMen == 1) ? ' man' : ' men';
			men.setText(numMen + ending);
			if(numWomen == 0 && numMen == 0) {
				value.setText("Empty");
			}
			if(numMen == 0 && numWomen != 0) {
				value.setText("Feminine");
			}

		});

		const value = 
		this.add.text( w/2, h - 150, 'Empty', {fill: colors.headline, font: '80px Montserrat'}).setOrigin(0.5, 0.5);
		const back = this.add.text(50, h - 100, "↩️", {
            fill: colors.headline,
            font: '70px Montserrat'
        });
        
        back.setInteractive();
        back.on('pointerdown', () => {
        	context.scene.stop('DominatingScene');
			context.scene.start('ResultsScene');
		})
	}
}