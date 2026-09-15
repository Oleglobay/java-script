let c = document.querySelector('#c1');//змінна canvas 
let ctx = c.getContext("2d");//змінна для 2D малювання 
let focus = false;//змінна фокусу мишки над канвасом 
let clicked = false;//змінна натиснення мишки над канвасом

let color = "#f00"; 
let type = "butt";
let size = 3;
//задаємо колір лінії 
function colorSet(a) {
	color = a.value;
}
//задаємо ширину лінії 
function sizeSet(a){
	size = a.value;
}
//задаємо тип лінії 
function typeSet(a){
	type = a.value;
}
//очищаємо кавас 
function clearCanvas(){
	ctx.clearRect(0,0,c.width,c.height);
}
//коли мишка переміщається над елементом 
function draw(e) {
	//якщо мишка над елемнтом і нажата 
	if (focus && clicked) {
		//поситанємо малювати 
		ctx.beginPath();
		//задаємно колір лінії 
		ctx.strokeStyle = color;
		//задаємо розмір лінії 
		ctx.lineWidth = size;
		//задаємо стиль лінії 
		ctx.lineCap = type;

		//беремо поточне значення мишки 
		//віднімаємо 
		//від нього різниці між попереднім і поточним значеням мишки 
		//в результаті отримуємо попередне єначення 
		ctx.moveTo(e.layerX-e.movementX, e.layerY-e.movementY);
		//визначаємо поточні координати миші 
		ctx.lineTo(e.layerX, e.layerY);
		//малюємо лінію від попередні до поточних значень мишки 
		ctx.stroke();
	}
}


//кнопка нажата 
function clicking() {
	clicked = true;
}
//кнопка відпущена 
function notClicking() {
	clicked = false;
}
//курсор мишки над canvas 
function inFocus() {
	focus = true;
}
//курсор миші виходить за межі canvas 
function notInFocus() {
	focus = false;
	clicked = false;
}





c.addEventListener('mouseup', notClicking);     
c.addEventListener('mousedown', clicking);    
c.addEventListener('mouseenter', inFocus);
c.addEventListener('mouseleave', notInFocus);
c.addEventListener('mousemove', draw);
