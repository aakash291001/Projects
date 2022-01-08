function init() {
    canvas = document.getElementById('Canvas1');
    W = H = canvas.width = canvas.height = 480;
    pen = canvas.getContext('2d');
    cellSize = 24;
    score = 5;
    gameOver=false;
    foodImg = new Image();
    foodImg.src="../images/apple.png";
    trophyImg = new Image();
    trophyImg.src = "../images/trophy.png";
    function getRandomFood()
{
    var foodX= Math.round(Math.random()*(W-cellSize)/(cellSize));
    var foodY= Math.round(Math.random()*(H-cellSize)/(cellSize));
    food={
        x:foodX,
        y:foodY,
        color:"red",
    }
}
getRandomFood(); 
    snake = {
        initLength: 5,
        color: "blue",
        cells: [],
        direction: "right",
        createSnake: function () {
            for (var i = this.initLength; i > 0; i--) {
                this.cells.push({ x: i, y: 0 });
            }
        },
        drawSnake: function () {
            for (i = 0; i < this.initLength; i++) {
                pen.fillRect(this.cells[i].x * cellSize, this.cells[i].y * cellSize, cellSize - 2, cellSize - 2);
            }
        },
        updateSnake: function () {
            
            var headX = this.cells[0].x;
            var headY = this.cells[0].y;
            if(headX==food.x&&headY==food.y)
            {
                getRandomFood();
                this.initLength=this.initLength+1;
                this.cells.push({ x: this.initLength-1, y: 0 });; 
                score = score +5;  

            }else
            {
                this.cells.pop();
            }
            var nextX,nextY;
            if(this.direction=="right")
            {
                nextX = headX+1;
                nextY=headY;
            }
            else if(this.direction=="left")
            {
                nextX=headX-1;
                nextY=headY;
            }
            else if(this.direction=="down")
            {
                nextX=headX;
                nextY=headY+1;
            }
            else
            {
                nextX=headX;
                nextY=headY-1;
            }
            this.cells.unshift({x:nextX,y:nextY});
            var lastX = Math.round(W/cellSize);
            var lastY = Math.round(H/cellSize);
            if(this.cells[0].y<0||this.cells[0].x<0||this.cells[0].x>lastX||this.cells[0].y>lastY)
            gameOver=true;
            
        }
    };
    snake.createSnake();
    //Add a event listener
    function keyPressed(e)
    {
        console.log(snake.direction);
        if(e.key=="ArrowRight"||e.key=="KeyD")
        {
            console.log(snake.direction);
            snake.direction="right";
        }
        else if(e.key=="ArrowLeft"||e.key=="KeyA")
        {
            console.log(snake.direction);
            snake.direction="left";
        }
        else if(e.key=="ArrowDown"||e.key=="KeyS")
        {
            console.log(snake.direction);
            snake.direction="down";
        }
        else if(e.key=="ArrowUp"||e.key=="KeyW")
        {
            console.log(snake.direction);
            snake.direction="up";
        }
    }
    // canvas.addEventListener('keydown',keyPressed());
    document.addEventListener('keydown',keyPressed);
    //click for mouse
    //keydown for keyboard
}
function draw() {
    pen.clearRect(0,0,W,H);
    snake.drawSnake();
    pen.fillStyle="red";
    pen.drawImage(foodImg,food.x*cellSize,food.y*cellSize,cellSize,cellSize);
    pen.drawImage(trophyImg,0,0,80,60);
    pen.fillStyle="Blue";
    pen.font = "20px Roboto";
    if(score<10)
    {
        pen.fillText(score,40,25);
    }
    else
    {
        pen.fillText(score,34,25);
    }
    
    // pen.fillRect(food.x*cellSize,food.y*cellSize,cellSize,cellSize);
}
function update() {
    snake.updateSnake()
}

function gameLoop() {
    if(gameOver==true)
    {
        clearInterval(f);
        alert("You Sucks")
    }
    draw();
    update();
    console.log("Game Loop");
}
init();
var f = setInterval(gameLoop, 100);
// init();
// function init()
// {
//     canvas = document.getElementById('Canvas1');
//     W=canvas.width = 500;
//     H=canvas.height = 500;
//     pen = canvas.getContext('2d');
//     rect={

//             x : 20,
//             y : 20,
//             w : 10,
//             h : 10,
//             speed:10,
//             gameover:false,
//     }

// }
// function draw()
// {
//     // console.log("draw");
//     pen.clearRect(0,0,W,H);
//     pen.fillRect(rect.x, rect.y,rect.w,rect.h);
//     pen.fillStyle = "yellow";
// }
// function update()
// {
// 	// console.log("Update");
//     rect.x+=rect.speed;
//     if(rect.x+rect.w>=W)
//     rect.speed*=-1;
//     if(rect.x<=0)
//     rect.speed*=-1;
// }
// function gameloop()
// {
//     if(rect.gameover==true)
//      clearInterval(f);
//     console.log("In game loop");
//     draw();
//     update();

// }
// init();
// setInterval(gameloop,1000);