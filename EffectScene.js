class EffectScene extends Phaser.Scene {
	constructor() {
		super({ key: 'EffectScene' })
	}

	create() {
		console.log('effect scene');
		this.add.text( w/2, h/2, 'le genre ou le sexe', {fill: colors.headline, font: '80px Montserrat'}).setOrigin(0.5, 0.5);
		this.input.on('pointerdown', () => {
			// this.scene.stop('StartScene')
			// this.scene.start('GameScene')
		})
	}
}

(function () {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();