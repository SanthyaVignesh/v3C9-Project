var btn_red;
var btn_green;

var r = 255;
var g = 255;
var b = 255;

function redBg(){
  r = 255;
  g = 0 ;
  b=0;
}

function greenBg(){
  r = 0;
  g = 255 ;
  b=0;
}

function setup() {
  createCanvas(400, 400);  

  button1 = createButton("Red");
  button1.position(100,300);
  button1.mousePressed(redBg);

  button2 = createButton("Green")
  button2.position(200,300);
  button2.mousePressed(greenBg);
}

function draw() {

  background(r,g,b);

  text("Click on the button to change the color", width/2 - 100,height/2);
}

