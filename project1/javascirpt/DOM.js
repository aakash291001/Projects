
function init()
{
    canvas = document.getElementById('Canvas1');
    W=canvas.width = 500;
    H=canvas.height = 500;
    pen = canvas.getContext('2d');
    rect={
        
            x : 20,
            y : 20,
            w : 10,
            h : 10,
            speed:10,
            gameover:false,
    }
    
}
function draw()
{
    // console.log("draw");
    pen.clearRect(0,0,W,H);
    pen.fillRect(rect.x, rect.y,rect.w,rect.h);
    pen.fillStyle = "yellow";
}
function update()
{
	// console.log("Update");
    rect.x+=rect.speed;
    if(rect.x+rect.w>=W)
    rect.speed*=-1;
    if(rect.x<=0)
    rect.speed*=-1;
}
function gameloop()
{
    if(rect.gameover==true)
     clearInterval(f);
    console.log("In game loop");
    draw();
    update();
    
}
init();
setInterval(gameloop,100);