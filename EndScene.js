class EndScene extends Phaser.Scene {
	constructor() {
		super({ key: 'EndScene' })
	}

	create() {
		this.add.text(w / 2, 40, "Your Results", {
            fill: colors.headline,
            font: 'bold 40px Montserrat'
        }).setOrigin(0.5, 0.5);
		console.log(response);
		this.input.on('pointerdown', () => {
			// this.scene.stop('EndScene')
			// this.scene.start('GameScene')
		})

		var height = 100;
		var width = w/8;
		for(var i = 0; i < answers.length; i++) {
			if(i == Math.floor(answers.length / 2)) {
				console.log('hi');
				height = 100;
				width = 3*w/5;
			}
			height += 60;
			var extra = "";
			if(answers[i].key != response[i]) { // wrong
				this.add.text(width - 50, height + 5, "🚫", {
            	fill: "#e16162",
            	font: 'bold 40px Montserrat'
       			});
				extra = " --> " + answers[i].key;
			}
			else { // right
				this.add.text(width - 50, height + 5, "✅", {
            	fill: "#004643",
            	font: 'bold 40px Montserrat'
       			});
			}
			this.add.text(width, height, answers[i].word + " " + response[i] + extra, {
            	fill: colors.headline,
            	font: 'bold 40px Montserrat'
       		});
		}
	}
}
