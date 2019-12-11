class EffectScene extends Phaser.Scene {
	constructor() {
		super({ key: 'EffectScene' })
	}

	create() {
		console.log('effect scene');
		this.add.text( w/2, h/2, 'effect scene', {fill: colors.headline, font: '80px Montserrat'}).setOrigin(0.5, 0.5);
		const back = this.add.text(50, h - 100, "↩️", {
            fill: colors.headline,
            font: '70px Montserrat'
        });
        
        back.setInteractive();
        back.on('pointerdown', () => {
        	context.scene.stop('EffectScene');
			context.scene.start('ResultsScene');
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