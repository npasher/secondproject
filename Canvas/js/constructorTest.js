// var requestAnimFrame = (function(){
//   return window.requestAnimationFrame       ||
//       window.webkitRequestAnimationFrame ||
//       window.mozRequestAnimationFrame    ||
//       window.oRequestAnimationFrame      ||
//       window.msRequestAnimationFrame     ||
//       function(callback){
//           window.setTimeout(callback, 1000 / 60);
//       };
// })();

// Create the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 650;
canvas.height = 350;

// Requiring the Sprite constructor function exported from sprite.js
// var Sprite = require("./sprite.js");

// Height and width of canvas 
var canvasWidth = 650;
var canvasHeight = 350;

// Creation of game characters
var player = new Sprite("./images/hero.png", 640, 470, 5, 8, 0, 6, 0, 94, 0, 240, 3);
console.log(player);
playerURL = new Image();

var ufo = new Sprite("./images/ufo1/ufov2.png", 696, 210, 5, 12, 0, 12, 0, 0, 0, 10, 5);
console.log(ufo);
ufoURL = new Image();

// // Get Id of canvas
// var canvas = document.getElementById("canvas");
// // Establishing a context of the canvas
// var ctx = canvas.getContext("2d");

// // Set canvas size
// canvas.width = canvasWidth;
// canvas.height = canvasHeight;

function init() {
  playerURL.src = player.url; 
  ufoURL.src = ufo.url;
  window.requestAnimationFrame(draw);
}

function draw() {
  updateFrame();
  // playerURL.onload = function() {
  ctx.drawImage(playerURL, player.srcx, player.srcy, player.srcWidth, player.srcHeight, player.dx, player.dy, player.dWidth, player.dHeight);
  ctx.drawImage(ufoURL, ufo.srcx, ufo.srcy, ufo.srcWidth, ufo.srcHeight, ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
  // }
}

init();




// FRAME INDEX FUNC - Function to update the frame index. Updates a frames each time to render a new sprite from 0-5.
function updateFrame() {
  updateUFO();
  updatePlayer();
  // console.log(pheight);
}

// function moveLeft() {
//   left = true;
//   right = false;
// }

// function moveRight() {
//   left = false; 
//   right = true;
// }

// function updateUFO() {
//   // Updates the frame index
//   curFrame = ++curFrame % frameCount;
//   // Calculates the x coordinate for spritesheet
//   srcX = curFrame * ufo.srcWidth;
//   // Clear already drawn sprite before new sprite renders
//   ctx.clearRect(x, y, ufo.srcWidth, ufo.srcHeight);
//   // Full Screen Ping Pong Loop
//   if (right && x < canvasWidth - ufo.srcWidth) {
//     // srcY = trackRight * ufo.srcHeight;
//     x += speed;
//   }
//   else if (x >= 0) {
//     right = false;
//     left = true;
//     x -= speed;

//     if (x === 0) {
//       right = true;
//       left = false;
//     }
//   }
// }

// function updatePlayer() {
//   // Updates the frame index
//   pcurFrame = ++pcurFrame % pframeCount;
//   // Calculates the x coordinate for spritesheet
//   psrcX = pcurFrame * pwidth;
//   // Clear already drawn sprite before new sprite renders
//   ctx.clearRect(px, py, pwidth, pheight);
//   // Full Screen Ping Pong Loop
//   if (pright && px < (canvasWidth - pwidth) / 2) {
//     px += pspeed;
//     if (px === ((canvasWidth - pwidth) / 2)) {
//       px = (canvasWidth - pwidth) / 2;
//       // setInterval();
//       pright = false;
//       pcurFrame = 0;
//       psrcX = 0;
//       psrcY = 0;
//       pframeCount = 1;
//     }
//   }
// }

// setInterval(draw, 50);