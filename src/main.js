function preload() {
    //this.load.image('ship', '../assets/ship.png');
}

function create() {

}

function update() {

}

console.log('Hello World! testing live reload');
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);
