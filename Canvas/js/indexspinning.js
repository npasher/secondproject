
// function Sprite(url, pos, size, speed, frames, dir) {
//   this.pos = pos;
//   this.size = size;
//   this.speed = 0;
//   this.frames = frames;
//   this._index = 0;
//   this.url = url;
//   this.dir = dir || "right";
// }; 

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
// __________________________________________________________________

// Height and width of spritesheet
var pspriteWidth = 640; 
var pspriteHeight = 470;

// The rows and colums of sprite sheet
var prows = 5;
var pcols = 8; 

// Row 0 (first row in sprite sheet) for right movement
var ptrackRight = 1;

// Row 1 (second row in sprite sheet) for left movement
var ptrackLeft = 1;

// Divide the width of sprite by # of cols to get the width of single sprite
var pwidth = pspriteWidth/pcols;

// Divide the height of sprite by # of rows to geth the height of single sprite
var pheight = pspriteHeight/prows;

// Each row contains 8 frames so at start diplay first frame
var pcurFrame = 0;

// Set totla frame to 12
var pframeCount = 6;

// Set x & y coordinates to render sprite
var px = 0;
var py = 200;

// Set x & y coord of canvas to get single frame
var psrcX = 0;
var psrcY = 0;

// Tracking movement left and right
var pleft = false;

// Move sprite to right side
var pright = true;

// Set speed of movement
var pspeed = 5; 


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

var player = new Image();
player.src = "./images/hero.png";

// FRAME INDEX FUNC - Function to update the frame index. Updates a frames each time to render a new sprite from 0-5.
function updateFrame() {
  updateUFO();
  updatePlayer();
}

// SPRITE RENDER FUNC = function to render the sprite in canvas element
function draw() {
  updateFrame();
  ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
  ctx.drawImage(player, psrcX, psrcY, pwidth, pheight, px, py, pwidth, pheight);
};

function moveLeft() {
  left = true;
  right = false;
}

function moveRight() {
  left = false; 
  right = true;
}

function updateUFO() {
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

function updatePlayer() {
  // Updates the frame index
  pcurFrame = ++pcurFrame % pframeCount;
  // Calculates the x coordinate for spritesheet
  psrcX = pcurFrame * pwidth;
  // Clear already drawn sprite before new sprite renders
  ctx.clearRect(px, py, pwidth, pheight);
  // Full Screen Ping Pong Loop
  if (right && px < canvasWidth - pwidth) {
    // srcY = trackRight * height;
    px += pspeed;
  }
  else if (px >= 0) {
    right = false;
    left = true;
    px -= speed;

    if (px === 0) {
      right = true;
      left = false;
    }
  }
}


// setInterval(draw, 50);