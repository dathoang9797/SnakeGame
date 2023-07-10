export class Snake {
    constructor(scene) {
        this.scene = scene;
        this.lastMoveTime = 0;
        this.moveInterval = 100;
        this.direction = Phaser.Math.Vector2.DOWN;
        this.titleSize = 16;
        this.body = [];
        this.body.push(
            this.scene.add
                .rectangle(this.scene.game.config.width / 2, this.scene.game.config.height / 2, this.titleSize, this.titleSize, 0xff0000)
                .setOrigin(0)
        );
        this.apple = this.scene.add.rectangle(0, 0, this.titleSize, this.titleSize, 0x00ff00).setOrigin(0);
        this.positionApple();
        scene.input.keyboard.on('keydown', (e) => this.keydown(e));
    }

    keydown(event) {
        switch (event.keyCode) {
            case 37: //Left
                if (this.direction !== Phaser.Math.Vector2.RIGHT)
                    this.direction = Phaser.Math.Vector2.LEFT;
                break;
            case 38: //Up
                if (this.direction !== Phaser.Math.Vector2.DOWN)
                    this.direction = Phaser.Math.Vector2.UP;
                break;
            case 39: //Right
                if (this.direction !== Phaser.Math.Vector2.LEFT)
                    this.direction = Phaser.Math.Vector2.RIGHT;
                break;
            case 40: //Bottom
                if (this.direction !== Phaser.Math.Vector2.UP)
                    this.direction = Phaser.Math.Vector2.DOWN;
                break;
        }
    }

    update(time) {
        if (time >= this.lastMoveTime + this.moveInterval) {
            this.lastMoveTime = time;
            this.move();
        }
    }

    move() {
        let x = this.body[0].x + this.direction.x * this.titleSize;
        let y = this.body[0].y + this.direction.y * this.titleSize;
        if (this.apple.x === x && this.apple.y === y) {
            //eaten the apple
            this.body.push(this.scene.add.rectangle(0, 0, this.titleSize, this.titleSize, 0xffffff).setOrigin(0));
            this.positionApple();
        }

        for (let index = this.body.length - 1; index > 0; index--) {
            this.body[index].x = this.body[index - 1].x;
            this.body[index].y = this.body[index - 1].y;
        }
        this.body[0].x = x;
        this.body[0].y = y;

        //Death by space
        if (
            this.body[0].x < 0 ||
            this.body[0].x >= this.scene.game.config.width ||
            this.body[0].y < 0 ||
            this.body[0].y >= this.scene.game.config.height
        ) {
            this.scene.scene.restart();
        }

        //Death by eating own tail except head === any of out tail
        let tail = this.body.slice(1);
        if (tail.some((s) => s.x === this.body[0].x && s.y === this.body[0].y))
            this.scene.scene.restart();
    }

    positionApple() {
        this.apple.x = Math.floor((Math.random() * this.scene.game.config.width) / this.titleSize) * this.titleSize;
        this.apple.y = Math.floor((Math.random() * this.scene.game.config.height) / this.titleSize) * this.titleSize;
    }
}
