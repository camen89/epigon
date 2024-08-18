const socket = io();

canvas.addEventListener('mousemove', (event) => {
    if(drawing) {
        const x = event.clientX - canvas.offsetLeft;
        const y = event.clientY - canvas.offsetTop;
        const shapeData = {x, y};
        socket.emit('draw', shapeData);
    }
});

socket.on('draw', (data) => {
    ctx.lineTo(data.x, data.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(data.x, data.y);
});