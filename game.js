// colors
const colors = {
	background: "#e3f6f5",
	headline: "#272343",
	button: 0xffd803, // idk why it doesn't take #
};

// fonts
WebFontConfig = {
    google: {
        families: ["Montserrat", "Domine", "Merriweather"]
    }
};

const gameState = {
	score: 0
};

const w = window.innerWidth - 20;
const h = window.innerHeight - 20;

const config = {
    type: Phaser.AUTO,
	width: w,
    height: h,
	backgroundColor: colors.background,
	scene: [StartScene, GameScene, ResultsScene, EffectScene, ProfessionsScene, DominatingScene, GenderScene],
};

const game = new Phaser.Game(config);