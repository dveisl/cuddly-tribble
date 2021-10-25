
// var drawings = false;
// var boxes = [];

// var boxSize = 10;

// var Box = function (options) {

//     this.x = options.x || 10;
//     this.y = options.y || 10;
//     this.width = options.width;
//     this.height = options.height;
//     this.color = options.color;

// }
// document.addEventListener('mousedown', function (e) {

//     drawings = true;

// });

// document.addEventListener('mouseup', function (e) {

//     drawings = false;
// });

// document.addEventListener('mousemove', function (e) {

//     if (drawings === true) {

//         boxes[boxes.length] = new Box({
//             x: e.clientX - canvas.offsetLeft,
//             y: e.clientY - canvas.offsetTop,
//             width: boxSize,
//             height: boxSize,
//             color: '#000000'
//         });
//     }
// });

// $(function loop() {

//     draw();
//     update();
//     requestAnimationFrame(loop);

// })

// $(function draw() {


//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     boxes.forEach(function (box, i) {

//         ctx.fillRect(box.x, box.y, box.width, box.height);
//         ctx.fillStyle = box.color;
//     });
// })

// function update() { }
// loop();