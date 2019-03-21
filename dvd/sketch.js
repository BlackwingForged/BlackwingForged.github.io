let dx = 2;
let dy = 2;
let red, blue, green;
let x = 500;
let y = 300;
let images = [];
let image;

function preload(){
    red = loadImage("assets/logo_red");
    blue = loadImage("assets/logo_blue");
    green = loadImage("assets/logo_green");
    images.push(red, green, blue);
    shuffle(images, true);
    createCanvas(1000, 600);
}

function draw(){
    background(0);
    image(image, x, y);
    x -= dx;
    y -= dy;
    if(x == 0){
        dx = -dx;
        shuffle(images, true);
        image = images[0];
    }
    if((x + 255) == 600){
        dx = -dx;
        shuffle(images, true);
        image = images[0];
    }
    if(y == 0){
        dy = -dy;
        shuffle(images, true);
        image = images[0];
    }
    if((y+255) == 1000){
        dy = -dy;
        shuffle(images, true);
        image = images[0];
    }
}