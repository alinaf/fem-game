class EndScene extends Phaser.Scene {
	constructor() {
		super({ key: 'EndScene' })
	}

	create() {
		this.add.text( 150, 250, 'The End!', {fill: '#000000', fontSize: '20px'})
		this.input.on('pointerdown', () => {
			// this.scene.stop('EndScene')
			// this.scene.start('GameScene')
		})
	}
}
