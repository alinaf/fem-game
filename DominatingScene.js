class DominatingScene extends Phaser.Scene {
	constructor() {
		super({ key: 'DominatingScene' })
	}

	create() {
		this.add.text( w/2, h/2, 'Dominating', {fill: colors.headline, font: '80px Montserrat'}).setOrigin(0.5, 0.5);
		this.on('pointerdown', () => {
			context.scene.stop('DominatingScene');
			context.scene.start('ResultsScene');
		})
	}
}