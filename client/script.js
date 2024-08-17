const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

let drawing = false;
let shapes = [];

canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath();
});
canvas.addEventListener('mousemove', draw);

function draw(event) {
    if (!drawing) return;

    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);

    shapes.push({x, y});
}

document.getElementById('saveBtn').addEventListener('click', () => {
    console.log(shapes)
    saveDrawing(shapes);
})