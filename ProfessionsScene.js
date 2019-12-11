class ProfessionsScene extends Phaser.Scene {
	constructor() {
		super({ key: 'ProfessionsScene' })
	}

	create() {
		this.add.text( w/2, h/2, 'professions', {fill: colors.headline}).setOrigin(0.5, 0.5);
		this.input.on('pointerdown', () => {
		})

		const back = this.add.text(50, h - 100, "↩️", {
            fill: colors.headline,
            font: '70px Montserrat'
        });
        
        back.setInteractive();
        back.on('pointerdown', () => {
        	context.scene.stop('ProfessionsScene');
			context.scene.start('ResultsScene');
		})


	}
}