class ProfessionsScene extends Phaser.Scene {
	constructor() {
		super({ key: 'ProfessionsScene' })
	}

	create() {
		this.add.text( w/2, h/10, 'Which jobs are gendered?', {fill: colors.headline, font: '60px Montserrat'}).setOrigin(0.5, 0.5);
		this.add.text( w/2, 2*h/10, 'Click to change!', {fill: colors.headline, font: '30px Montserrat'}).setOrigin(0.5, 0.5);
		const medecin = this.add.text( w/2, 3*h/10, 'un medecin', {fill: colors.headline, font: '40px Montserrat'}).setOrigin(0.5, 0.5);
		
		var acteurM = true;
		const acteur = this.add.text( w/2, 4*h/10, 'un acteur', {fill: colors.headline, font: '40px Montserrat'}).setOrigin(0.5, 0.5);
		acteur.setInteractive();
		acteur.on('pointerdown', () => {
			if(acteurM) {
				acteur.setText('une actrice');
			}
			else {
				acteur.setText('un acteur')
			}
			acteurM = !acteurM;
		});
		const nounou = this.add.text( w/2, 5*h/10, 'une nounou', {fill: colors.headline, font: '40px Montserrat'}).setOrigin(0.5, 0.5);
		const maire = this.add.text( w/2, 6*h/10, 'un maire', {fill: colors.headline, font: '40px Montserrat'}).setOrigin(0.5, 0.5);
		const pres = this.add.text( w/2, 7*h/10, 'un président', {fill: colors.headline, font: '40px Montserrat'}).setOrigin(0.5, 0.5);
		const ecrivain = this.add.text( w/2, 8*h/10, 'un écrivain', {fill: colors.headline, font: '40px Montserrat'}).setOrigin(0.5, 0.5);


		const back = this.add.text(50, h - 100, "↩️", {
            fill: colors.headline,
            font: '70px Montserrat'
        });
        
        back.setInteractive();
        back.on('pointerdown', () => {
        	this.scene.stop('ProfessionsScene');
			this.scene.start('ResultsScene');
		})


	}
}