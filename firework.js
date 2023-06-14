export class Firework {

    // Properties
    posX = 0;
    posY = 0;
    detonationlocation = 0;
    velocity = [0, 2]; // X, Y Velocity
    hasdetonated = false;
    particles = [];

    // CTOR
    constructor(posX, posY,detloc) {
        this.posX = posX;
        this.posY = posY;
        this.detonationlocation = detloc;
    }


    // Methods
    update() {

        // Detonate

        if (this.hasdetonated) {
            // TODO:: Update the particles
        } else if (this.posY >= this.detonationlocation && this.hasdetonated == false) {
            // Kaboom!
            // TODO:: Hide self and render particles
            this.hasdetonated = true;
        } else {
            // Update shell location
            this.posX += this.velocity[0];
            this.posY -= this.velocity[1]; // Negative to go up.
        }
    }

    draw(ctx) {
        if (this.hasdetonated) {
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(this.posX, this.posY, 1, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.closePath();
        } else {
            // TODO:: Render the particles
        }
    }
}