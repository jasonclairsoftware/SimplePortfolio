
// Helper class
class Firework {

    // Properties
    posX = 0;
    posY = 0;
    detonationlocation = 0;
    startvelocity = [];
    velocity = [];
    gravity = 0.05;

    // CTOR
    constructor(posX, posY, detloc) {
        this.posX = posX;
        this.posY = posY;
        this.detonationlocation = detloc;
        this.startvelocity[0] = 0;
        this.startvelocity[1] = -(((7.5-5.5)*Math.random())+5); // between 5 and 7.5 seems good
        this.velocity[0] = this.startvelocity[0];
        this.velocity[1] = this.startvelocity[1];
    }

    // Methods
    update(ctx) {
        // Kaboom
        if (this.posY < this.detonationlocation || this.velocity[1] > 0) {
            this.detonate(ctx);
            return;
        }
        this.velocity[1] += this.gravity;
        this.posY += this.velocity[1];
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(this.posX, this.posY, 1, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
    }

    resetLocation() {
        this.posX = Math.random() * canvas.width;
        this.posY = canvas.height;
        this.detonationlocation = (canvas.height * 0.5) * Math.random();
        this.velocity[0] = this.startvelocity[0];
        this.velocity[1] = this.startvelocity[1];
    }

    detonate(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(this.posX, this.posY, 10, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
        this.resetLocation();
    }


}




{
    // Getting the canvas context
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');

    // Properties
    let fireworksnumber = 10;

    let fireworks = []

    for (let i = 0; i < fireworksnumber; i++) {
        fireworks[i] = new Firework(Math.random() * canvas.width, canvas.height, (canvas.height * 0.5) * Math.random());
    }

    animationLoop();
    function animationLoop() {

        for (let i = 0; i < fireworksnumber; i++) {

            fireworks[i].update(ctx);
            fireworks[i].draw(ctx);
        }

        // Callback
        window.requestAnimationFrame(animationLoop);
    }


}

