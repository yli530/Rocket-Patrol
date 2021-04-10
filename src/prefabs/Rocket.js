class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // add object
        scene.add.existing(this);
        this.isFiring = false; // rocket firing status
        this.movementSpeed = 2;
    }

    update() {
        if(!this.isFiring) {
            if(keyLeft.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.movementSpeed;
            } else if(keyRight.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.movementSpeed;
            }
        }

        if(Phaser.Input.Keyboard.JustDown(keyF)) {
            this.isFiring = true;
        }

        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.movementSpeed;
        }

        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }

    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}