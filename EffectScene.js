class EffectScene extends Phaser.Scene {
	constructor() {
		super({ key: 'EffectScene' })
	}

	create() {
		this.add.text( w/2, h/10, 'Does it matter?', {fill: colors.headline, font: '80px Montserrat'}).setOrigin(0.5, 0.5);
		
		const button = this.make.text({
        x: w/2,
        y: h/2 + 30,
        text: 'Saphir-Whorf Hypothesis: \n\n"People experience the world in distinct ways because of differences present in their languages, which act as filters on the world, highlighting and obscuring different physical phenomena like a special lens fitted to a camera."\n\n - Professor Andrew Simpson',
        origin: { x: 0.5, y: 0.5 },
        style: {
            font: '45px Montserrat',
            fill: 'black',
            wordWrap: { width: 3*w/4 }
        }
    });
        button.setInteractive();
        button.on('pointerdown', () => {
            this.scene.stop('EffectScene');
            this.scene.start('ExperimentScene');
        });

		const back = this.add.text(50, h - 100, "↩️", {
            fill: colors.headline,
            font: '70px Montserrat'
        });
        
        back.setInteractive();
        back.on('pointerdown', () => {
        	this.scene.stop('EffectScene');
			this.scene.start('ResultsScene');
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