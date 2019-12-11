class ProfessionsScene extends Phaser.Scene {
	constructor() {
		super({ key: 'ProfessionsScene' })
	}

	create() {
		console.log('proffesionss scnene');
		this.add.text( w/2, h/2, 'professions', {fill: colors.headline}).setOrigin(0.5, 0.5);
		this.input.on('pointerdown', () => {
			this.scene.stop('ProfessionsScene')
			this.scene.start('GameScene')
		})
	}
}