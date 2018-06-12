// Create the canvas and attaches to html
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.globalCompositeOperation = "lighter";
canvas.width = 650;
canvas.height = 350;

// Height and width of canvas 
var canvasWidth = 650;
var canvasHeight = 350;

var river = true;
var box = false;
var fork = false;
var homebase = true;

var player = new Sprite("./public/assets/images/sprites/hero.png", 640, 470, 5, 8, 0, 6, 0, 94, 0, 260, 3);
riverURL = new Image();
riverURL.src = backgrounds.riverBkgrd;
boxURL = new Image();
boxURL.src = backgrounds.boxBkgrd;
forkURL = new Image();
forkURL.src = backgrounds.forkBkgrd;
homebaseURL = new Image();
homebaseURL.src = backgrounds.homebaseBkgrd;

function riverInit() {
  playerURL.src = player.url;
  riverURL;
  boxURL;
  forkURL;
  homebaseURL;

  window.requestAnimationFrame(riverStart);
}

function riverStart() {
  if (river) {
    frameRateId = setInterval(riverDraw, 100);
  }
  else if (box) {
    frameRateId = setInterval(riverDraw, 50);
  }
  else if (fork) {
    frameRateId = setInterval(riverDraw, 50);
  }
  else if (homebase) {
    frameRateId = setInterval(riverDraw, 50);
  }
}

function riverDraw() {
  updateFrame();
  if (river) { 
    player.dy = 80; 
    ctx.drawImage(riverURL, 0, 0, 650, 350);
    ctx.drawImage(playerURL, player.srcx, player.srcy, player.srcWidth, player.srcHeight, player.dx, player.dy, player.srcWidth, player.srcHeight);
  }
  else if (box) {
    player.dy = 220;
    ctx.drawImage(boxURL, 0, 0, 650, 350);
    ctx.drawImage(playerURL, player.srcx, player.srcy, player.srcWidth, player.srcHeight, player.dx, player.dy, player.srcWidth, player.srcHeight);
  }
  else if (fork) {
    // player.dy = 100;
    ctx.drawImage(forkURL, 0, 0, 650, 350);
    ctx.drawImage(playerURL, player.srcx, player.srcy, player.srcWidth, player.srcHeight, player.dx, player.dy, player.srcWidth, player.srcHeight);
  }
  else if (homebase) {
    player.dy = 235;
    ctx.drawImage(homebaseURL, 0, 0, 650, 350);
    ctx.drawImage(playerURL, player.srcx, player.srcy, player.srcWidth, player.srcHeight, player.dx, player.dy, player.srcWidth, player.srcHeight);
  }
}

