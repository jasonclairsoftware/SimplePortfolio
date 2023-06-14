// Getting the canvas and the context
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

// Setting the canvas to fit the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Init screen to black
ctx.beginPath();
ctx.fillStyle = "black";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.closePath();

// Making the canvas responsive
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.closePath();
});