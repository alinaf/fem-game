class ExperimentScene extends Phaser.Scene {
	constructor() {
		super({ key: 'ExperimentScene' })
	}

    preload() {
      this.load.image('stick1', 'assets/stick1.png');
      this.load.image('cyl', 'assets/cyl.png');
      this.load.image('stick2', 'assets/stick2.png');
    }

	create() {
        const shapes = ['stick1', 'cyl', 'stick2'];
		this.add.text( w/2, h/11, 'Importance of shape in Navajo', {fill: colors.headline, font: '60px Montserrat'}).setOrigin(0.5, 0.5);
		const nounou = this.add.text(w/2, 2*h/10, '"hand/pass" (v)', {fill: colors.headline, font: '50px Montserrat'}).setOrigin(0.5, 0.5);
        const maire = this.add.text(w/2, 3*h/10, 'long/rigid: santiih', {fill: colors.headline, font: '40px Montserrat'}).setOrigin(0.5, 0.5);
        const pres = this.add.text(w/2, 4*h/10, 'long/flexible: sanleh', {fill: colors.headline, font: '40px Montserrat'}).setOrigin(0.5, 0.5);
        const ecrivain = this.add.text(w/2, 5*h/10, 'flat/flexible: santlcoos', {fill: colors.headline, font: '40px Montserrat'}).setOrigin(0.5, 0.5);

		this.make.text({
        x: w/2,
        y: h/2 + 150,
        text: "A 1958 study revealed that children who spoke Navajo sorted the objects 'yellow stick, blue cylinder, and blue stick' by shape, rather than by color, while English speaking children sorted them by shape.",
        origin: { x: 0.5, y: 0.5 },
        style: {
            font: '35px Montserrat',
            fill: 'black',
            wordWrap: { width: 3*w/4 }
        }
    });

        // shapes
       const drops = this.physics.add.group();
       function dropGen () {
        const xCoord = Math.random() * w;
        const xVelocity = Phaser.Math.Between(-300, 300);
        drops.create(xCoord, 40, Phaser.Math.RND.pick(shapes)).setVelocityX(xVelocity).setVelocityY(0).setAlpha(.8);
      }
      const dropGenLoop = this.time.addEvent({
        delay: 900,
        callback: dropGen,
        callbackScope: this,
        loop: true,
      });

		const back = this.add.text(50, h - 100, "↩️", {
            fill: colors.headline,
            font: '70px Montserrat'
        });
        
        back.setInteractive();
        back.on('pointerdown', () => {
        	this.scene.stop('ExperimentScene');
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