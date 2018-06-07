
// Height and width of canvas 
var canvasWidth = 650;
var canvasHeight = 350;

// Height and width of spritesheet
var spriteWidth = 696;
var spriteHeight = 210;

// The rows and colums of sprite sheet
var rows = 5;
var cols = 12; 

// Row 0 (first row in sprite sheet) for right movement
var trackRight = 0;

// Row 1 (second row in sprite sheet) for left movement
var trackLeft = 0;

// Divide the width of sprite by # of cols to get the width of single sprite
var width = spriteWidth/cols;

// Divide the height of sprite by # of rows to geth the height of single sprite
var height = spriteHeight/rows;

// Each row contains 8 frames so at start diplay first frame
var curFrame = 0;

// Set totla frame to 12
var frameCount = 12;

// Set x & y coordinates to render sprite
var x = 0;
var y = 0;

// Set x & y coord of canvas to get single frame
var srcX = 0;
var srcY = 0;

// Tracking movement left and right
var left = false;

// Move sprite to right side
var right = true;

// Set speed of movement
var speed = 5; 

// Get Id of canvas
var canvas = document.getElementById("canvas");

// Set canvas size
canvas.width = canvasWidth;
canvas.height = canvasHeight;
 


// Establishing a context of the canvas
var ctx = canvas.getContext("2d");

// Set Background
// var background = new Image();
// background.src = "./images/ufo1/pyramids.jpg"; 


// Creating an Image object for our character
var character = new Image();

// The source of the image file
character.src = "./images/ufo1/ufov2.png";

// FRAME INDEX FUNC - Function to update the frame index. Updates a frames each time to render a new sprite from 0-5.
function updateFrame() {
  // Updates the frame index
  curFrame = ++curFrame % frameCount;
  // Calculates the x coordinate for spritesheet
  srcX = curFrame * width;
  // Clear already drawn sprite before new sprite renders
  ctx.clearRect(x, y, width, height);
  // Full Screen Ping Pong Loop
  if (right && x < canvasWidth - width) {
    // srcY = trackRight * height;
    x += speed;
  
    // ctx.beginPath();
    // ctx.moveTo(100, 20);
    // ctx.lineTo(200, 160);
    // ctx.quadraticCurveTo(230, 200, 250, 120);
    // ctx.bezierCurveTo(290, -40, 300, 200, 400, 150);
    // ctxt.lineTo(500, 90);

    // Calculating y coordinate for spritesheet

  }
  else if (x >= 0) {
    right = false;
    left = true;
    x -= speed;

    if (x === 0) {
      right = true;
      left = false;
    }
    
  }
}

// SPRITE RENDER FUNC = function to render the sprite in canvas element
function draw() {
  // Calls function to update frame of sprite 
  updateFrame();
  
  // background.onload = function() {
  //   ctx.drawImage(background, 0, 0);
  // }
  // Draws current sprite to canvas
  ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);

}

function moveLeft() {
  left = true;
  right = false;
}

function moveRight() {
  left = false; 
  right = true;
}
setInterval(draw, 50);