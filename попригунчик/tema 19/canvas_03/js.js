/*Отримуємо доступ до Canvas */
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
/*задаємо початкові координати*/
var x = canvas.width/2;
var y = canvas.height-30;
/*задаємо швидкість руху по осях*/
var dx = 1;
var dy = -1;
/*радіус кругу*/
var ballRadius = 5;



var paddleHeight = 10;//висота площатки 
var paddleWidth = 75;//ширина площадки
var heightAboveTheGround = 10;//висота над рівнем землі 
var paddleX = (canvas.width-paddleWidth)/2;//координати розміщення площадки по ширині

var rightPressed = false;
var leftPressed = false;


/*події опрцювання натиснення на кнопку */
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//якщо нажато на кнопку (->) або (<-)
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

//якщо відпущено на кнопку (->) або (<-)
function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}



/*малюємо площадку для відбиття*/
function drawPaddle() {
    ctx.fillStyle = "#0095DD";
    ctx.fillRect(paddleX, 
    			canvas.height-paddleHeight-heightAboveTheGround,
    			paddleWidth,
    			paddleHeight);
}

/*малюємо круг*/
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius*2, 0, Math.PI*2);//малюєио
    ctx.fillStyle = "#FC0110";
    ctx.fill();
    ctx.closePath();
}


function draw() {
	/*очищаємо поле */
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();/*малюємо мячик*/
    drawPaddle();

    /*змінити кооординату мячика на */
    x += dx;
    y += dy;

    /*якщо мяч виходить за межі поля 
    	тоді надати швидкість по чій координаті в протилежному напрямку*/
    if(x + ballRadius >= canvas.width || x < ballRadius) {
        dx = -dx;

    }
    if(y +  ballRadius>= canvas.height || y < ballRadius) {
        dy = -dy;
    }
    
    /*якщо натиснео (->) та елемент не виходить за межі поля 
    перемістити площадку на 7 пікселів в право */
    if(rightPressed && !(paddleX + paddleWidth > canvas.width)) {
        paddleX += 3;
    }
    /*якщо натиснео (<-) та елемент не виходить за межі поля 
    перемістити площадку на 7 пікселів в ліво */
    else if(leftPressed && !(paddleX < 0)) {
        paddleX -= 3;
    }
    
}

setInterval(draw, 2);
