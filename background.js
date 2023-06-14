
// Getting the canvas and the context
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

// Setting the canvas to fit the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Init screen to black
ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.closePath();


/*

THIS IS A TEST CIRCLE. DELETE WHEN FINISHED.


ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(200, 200, 80, 0, Math.PI*2, false);
ctx.fill();
ctx.closePath();
*/
// Making the canvas responsive
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
});


backgroundLoop();
function backgroundLoop() {

    ctx.beginPath();
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.closePath();

    // Callback
    requestAnimationFrame(backgroundLoop);
};