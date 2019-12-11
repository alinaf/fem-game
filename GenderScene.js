class GenderScene extends Phaser.Scene {
	constructor() {
		super({ key: 'GenderScene' })
	}

	create() {
		this.add.text( w/2, h/2, 'Gender', {fill: colors.headline, font: '80px Montserrat'}).setOrigin(0.5, 0.5);
		this.input.on('pointerdown', () => {
			this.scene.stop('GenderScene')
			this.scene.start('GameScene')
		})
	}
}