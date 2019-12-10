class EndScene extends Phaser.Scene {
	constructor() {
		super({ key: 'EndScene' })
	}

	create() {
		this.add.text( 150, 250, 'Click to start!', {fill: '#000000', fontSize: '20px'})
		this.input.on('pointerdown', () => {
			// this.scene.stop('EndScene')
			// this.scene.start('GameScene')
		})
	}
}
