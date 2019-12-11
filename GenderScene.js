class GenderScene extends Phaser.Scene {
	constructor() {
		super({ key: 'GenderScene' })
	}

	create() {
		this.add.text( w/2, h/2, 'Gender', {fill: colors.headline, font: '80px Montserrat'}).setOrigin(0.5, 0.5);
		const back = this.add.text(50, h - 100, "↩️", {
            fill: colors.headline,
            font: '70px Montserrat'
        });
        
        back.setInteractive();
        back.on('pointerdown', () => {
        	context.scene.stop('GenderScene');
			context.scene.start('ResultsScene');
		})
	}
}