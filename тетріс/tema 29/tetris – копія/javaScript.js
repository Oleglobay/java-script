// /* Повертаємось до написанння JS коду 
//     Майже все є в темі №26
//     1 -  для початку в будь якій грі на необхідно створити якись фон
//     2 -  для цього Я рекомендую створити (обєкт)Клас фону  
//     клас -> Обєкт

// */

class BackgroudIMG {
    //конструктор класу викликається при створенні обєкту класу (в JS може бути тільки один)
    //в конструктор також ми можемо передавати параметри 
    constructor( /* параметри */ myImage) {
        //Функція Конструктора задавати початкові налаштуванння класу (Обєкта)
        //створюємо змінні (парметри) обєкта
        this.x = 0; //координата x початку зоображення 
        this.y = 0; //координата y початку зоображення
        //Додамо параметром нашого класу Зображення 
        //в JS є клас IMAGE
        this.image = new Image(); //Створення обєкту зображення 
        this.image.src = myImage;
    }
}


class Car {
    constructor(myImage, x, y, isPlayer) {
        this.x = x;
        this.y = y;
        this.loaded = false;
        this.dead = false;
        this.isPlayer = isPlayer;

        this.image = new Image();

        var obj = this;

        this.image.src = myImage;
    }


    Update() {
            if (!this.isPlayer) {
                this.y += speed / 5;
            }
        }
        //     if (this.y > canvas.height + 50) {
        //         this.dead = true;
        //     }
        // }

    // Collide(car) {
    //     var hit = false;

    //     if (this.y < car.y + car.image.height * scale && this.y + this.image.height * scale > car.y) //If there is collision by y
    //     {
    //         if (this.x + this.image.width * scale > car.x && this.x < car.x + car.image.width * scale) //If there is collision by x
    //         {
    //             hit = true;
    //         }
    //     }

    //     return hit;
    // }

    Move(v, d) {
        if (v == "x") //Moving on x
        {
            d *= 2;

            this.x += d; //Changing position

            //Rolling back the changes if the car left the screen
            if (this.x + this.image.width * scale > canvas.width) {
                this.x -= d;
            }

            if (this.x < 0) {
                this.x = 0;
            }
        } else //Moving on y
        {
            this.y += d;

            if (this.y + this.image.height * scale > canvas.height) {
                this.y -= d;
            }

            if (this.y < 0) {
                this.y = 0;
            }
        }

    }
}


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var scale = 0.2;
var speed = 5;
//сторвення обєкту(backgroudIMG) класу 
var backgroudIMG = new BackgroudIMG("image/Background_spase.jpg");
var player = new Car("image/car.jpg", canvas.width / 2, canvas.height / 2, true); //Player's object
//Обробник подій натискання на кнопки клавіатури
window.addEventListener("keydown", function(e) { KeyDown(e); });

var objects = []; //Game objects

start();

function start() {
    setInterval(updata, 1000 / 60)
}

function updata() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        backgroudIMG.image,
        0,
        0,
        backgroudIMG.image.width,
        backgroudIMG.image.height,
        backgroudIMG.x,
        backgroudIMG.y,
        canvas.width,
        canvas.height
    );
    obstacleMaker();

    for (var i = 0; i < objects.length; i++) {
        DrawCar(objects[i], 0.05);
        objects[i].Update();
    }

    DrawCar(player, 0.1);
}

function DrawCar(car, scale) {
    ctx.drawImage(
        car.image,
        0,
        0,
        car.image.width,
        car.image.height,
        car.x,
        car.y,
        car.image.width * scale,
        car.image.height * scale
    );
}


function KeyDown(e) {
    switch (e.keyCode) {
        case 37: //Left
            player.Move("x", -speed);
            break;

        case 39: //Right
            player.Move("x", speed);
            break;

        case 38: //Up
            player.Move("y", -speed);
            break;

        case 40: //Down
            player.Move("y", speed);
            break;

        case 27: //Esc
            if (timer == null) {
                Start();
            } else {
                Stop();
            }
            break;
    }
}


function obstacleMaker() {
    if (RandomInteger(0, 100) > 98) //Generating new car
    {
        console.log("123");
        objects.push(new Car("image/car.jpg",
            RandomInteger(30, canvas.width - 50),
            0,
            false));
    }
}


function RandomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}