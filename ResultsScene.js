var context;
class ResultsScene extends Phaser.Scene {
	constructor() {
		super({ key: 'ResultsScene' })
	}

	create() {
		var slideMap = new Map();
		context = this;
		this.add.text(w / 2, 60, "Your Results", {
            fill: colors.headline,
            font: 'bold 60px Montserrat'
        }).setOrigin(0.5, 0.5);
		this.input.on('pointerdown', () => {
		})

		var height = 100;
		var width = w/8;
		for(var i = 0; i < answers.length; i++) {
			if(i == Math.ceil(answers.length / 2)) {
				height = 100;
				width = 3*w/5 + 50;
			}
			height += 60;
			var extra = "";
			if(answers[i].key != response[i]) { // wrong
				this.add.text(width - 50, height, "🚫", {
            	fill: "#e16162",
            	font: 'bold 40px Montserrat'
       			});
				extra = " --> " + answers[i].key;
			}
			else { // right
				this.add.text(width - 50, height, "✅", {
            	fill: "#004643",
            	font: 'bold 40px Montserrat'
       			});
			}
			const reveal = this.add.text(width, height, answers[i].word + " " + response[i] + extra, {
            	fill: colors.headline,
            	font: 'bold 35px Montserrat'
       		});
			reveal.setInteractive();
			slideMap.set(reveal, answers[i].slide)
        	reveal.on('pointerup', function(pointer) {
            	context.scene.stop('ResultsScene');
				context.scene.start(slideMap.get(this));
        	});

        		const back = this.add.text(w/2, h - 50, "Restart", {
            fill: colors.headline,
            font: '40px Montserrat'
        }).setOrigin(0.5, 0.5);
        
        back.setInteractive();
        back.on('pointerdown', () => {
        	this.scene.stop('ResultsScene');
			this.scene.start('StartScene');
		})

		}
	}
}
