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

}

setInterval(draw, 2);