function init()
{
    canvas = document.getElementById('Canvas1');
    canvas.width = 500;
    canvas.height = 500;
    pen = canvas.getContext('2d');
    class rect {
        constructor() {
            this.x = 20;
            this.y = 20;
            this.w = 10;
            this.h = 10;
        }
    }
    rect1 = new rect();
    pen.fillStyle = "yellow";
pen.fillRect(rect1.x, rect1.y,rect1.w,rect1.h);
}
function draw()
{
    console.log("draw");
}
function update()
{
	console.log("Update");
}
function gameloop()
{
    draw();
    update();
}
init();
setInterval(gameloop,100);