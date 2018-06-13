// // Create the canvas and attaches to html
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// ctx.globalCompositeOperation = "lighter";
// canvas.width = 650;
// canvas.height = 350;

// // Height and width of canvas 
// var canvasWidth = 650;
// var canvasHeight = 350;

var river = false;
var box = false;
var fork = false;
var homebase = false;

// var player = new Sprite("./public/assets/images/sprites/hero.png", 640, 470, 5, 8, 0, 6, 0, 94, 0, 260, 3);
riverURL = new Image();
riverURL.src = backgrounds.riverBkgrd;
boxURL = new Image();
boxURL.src = backgrounds.boxBkgrd;
forkURL = new Image();
forkURL.src = backgrounds.forkBkgrd;
homebaseURL = new Image();
homebaseURL.src = backgrounds.homebaseBkgrd;


bridgeURL = new Image();
bridgeURL.src = backgrounds.bridgeBkgrd;
trollURL = new Image();
trollURL.src = props.troll;
treasureChestURL = new Image();
treasureChestURL.src = props.treasureChest;

darkForestURL = new Image();
darkForestURL.src = backgrounds.darkForestBkgrd;

destructForestURL = new Image();
destructForestURL.src = backgrounds.destructForestBkgrd;
supplyCrateURL = new Image();
supplyCrateURL.src = props.supplyCrate;



function trollSceneInit() {
  playerURL.src = player.url;
  trollURL;
  bridgeURL;
  window.requestAnimationFrame(drawTrollScene);
}

function drawTrollScene() {
  ctx.drawImage(bridgeURL, 0, 0, 650, 350);
  ctx.drawImage(playerURL, 80, 282, player.srcWidth, player.srcHeight, 120, 135, player.srcWidth, player.srcHeight);
  ctx.drawImage(trollURL, 0, 0, 200, 172, 335, 35, 200, 172);
}

// trollSceneInit();

function noTrollSceneInit() {
  playerURL.src = player.url;
  bridgeURL;
  window.requestAnimationFrame(drawNoTrollScene);
}

function drawNoTrollScene() {
  ctx.drawImage(bridgeURL, 0, 0, 650, 350);
  ctx.drawImage(playerURL, 240, 282, player.srcWidth, player.srcHeight, 220, 200, player.srcWidth, player.srcHeight);
}

// noTrollSceneInit();

function openBoxSceneInit() {
  playerURL.src = player.url;
  treasureChestURL;
  boxURL;
  window.requestAnimationFrame(drawOpenBoxScene);
}

function drawOpenBoxScene() {
  ctx.drawImage(boxURL, 0, 0, 650, 350);
  ctx.drawImage(treasureChestURL, 400, 300, 100, 100, 300, 215, 100, 100);
  ctx.drawImage(playerURL, 320, 94, player.srcWidth, player.srcHeight, 220, 200, player.srcWidth, player.srcHeight);
}

// openBoxSceneInit();

function leaveBoxSceneInit() {
  playerURL.src = player.url;
  treasureChestURL;
  boxURL;
  window.requestAnimationFrame(drawLeaveBoxScene);
}

function drawLeaveBoxScene() {
  ctx.drawImage(boxURL, 0, 0, 650, 350);
  ctx.drawImage(playerURL, 320, 94, player.srcWidth, player.srcHeight, 400, 200, player.srcWidth, player.srcHeight);
  ctx.drawImage(treasureChestURL, 500, 300, 100, 100, 300, 215, 100, 100);
}

// leaveBoxSceneInit();







function darkForestSceneInit() {
  playerURL.src = player.url;
  darkForestURL;
  window.requestAnimationFrame(drawDarkForestScene);
}

function drawDarkForestScene() {
  ctx.drawImage(darkForestURL, 0, 0, 650, 350);
  ctx.drawImage(playerURL, 320, 94, player.srcWidth, player.srcHeight, 220, 240, player.srcWidth, player.srcHeight);
}

// darkForestSceneInit();

function destructForestSceneInit() {
  playerURL.src = player.url;
  destructForestURL;
  window.requestAnimationFrame(drawDestructForestScene);
}

function drawDestructForestScene() {
  ctx.drawImage(destructForestURL, 0, 0, 650, 350);
  ctx.drawImage(playerURL, 320, 94, player.srcWidth, player.srcHeight, 120, 140, player.srcWidth, player.srcHeight);

}
// destructForestSceneInit();

function forestFallSceneInit() {
  playerURL.src = player.url;
  darkForestURL;
  window.requestAnimationFrame(drawForestFallScene);
}

function drawForestFallScene() {
  ctx.drawImage(darkForestURL, 0, 0, 650, 350);

}

//forestFallSceneInit();

function emergeFromForestSceneInit() {
  playerURL.src = player.url;
  boxURL;
  window.requestAnimationFrame(drawEmergeFromForestScene);
}

function drawEmergeFromForestScene() {
  ctx.drawImage(boxURL, 0, 0, 650, 350);
  ctx.drawImage(playerURL, 320, 94, player.srcWidth, player.srcHeight, 400, 200, player.srcWidth, player.srcHeight);
}

//emergeFromForestSceneInit();

function resupplySceneInit() {
  playerURL.src = player.url;
  homebaseURL;
  supplyCrateURL;
  window.requestAnimationFrame(drawResupplyScene);
}

function drawResupplyScene() {
  ctx.drawImage(homebaseURL, 0, 0, 650, 350);
  ctx.drawImage(playerURL, 320, 94, player.srcWidth, player.srcHeight, 220, 200, player.srcWidth, player.srcHeight);
}

//resupplySceneInit();

function noSupplySceneInit() {
  playerURL.src = player.url;
  homebaseURL;
  window.requestAnimationFrame(drawNoSupplyScene);
}

function drawNoSupplyScene() {
  ctx.drawImage(homebaseURL, 0, 0, 650, 350);
  ctx.drawImage(playerURL, 320, 94, player.srcWidth, player.srcHeight, 220, 200, player.srcWidth, player.srcHeight);
}















// function roundInit() {
//   playerURL.src = player.url;
//   riverURL;
//   boxURL;
//   forkURL;
//   homebaseURL;

//   window.requestAnimationFrame(resetPlayer);
// }

// function resetPlayer () {
//   player.spriteSheetW = 640;
//   player.spriteSheetH = 470; 
//   player.spriteSheetRows = 5; 
//   player.spriteSheetCols = 8; 
//   player.scrCurFrame = 0; 
//   player.srcTotFrame = 6; 
//   player.srcx = 0; 
//   player.srcy = 94; 
//   player.dx = 0;
//   // player.dy = 260;
//   player.speed = 3;
//   player.dirRight = true;
//   roundStart();
// }

// function roundStart() {
//   if (river) {
//     frameRateId = setInterval(roundDraw, 45);
//   }
//   else if (box) {
//     // resetPlayer();
//     frameRateId = setInterval(roundDraw, 50);
//   }
//   else if (fork) {
//     frameRateId = setInterval(roundDraw, 50);
//   }
//   else if (homebase) {
//     frameRateId = setInterval(roundDraw, 50);
//   }
// }

// function roundDraw() {
//   if (river) { 
//     roundUpdatePlayer();
//     player.dy = 80; 
//     ctx.drawImage(riverURL, 0, 0, 650, 350);
//     ctx.drawImage(playerURL, player.srcx, player.srcy, player.srcWidth, player.srcHeight, player.dx, player.dy, player.srcWidth, player.srcHeight);
//   }
//   else if (box) {
//     roundUpdatePlayer();
//     player.dy = 220;
//     ctx.drawImage(boxURL, 0, 0, 650, 350);
//     ctx.drawImage(playerURL, player.srcx, player.srcy, player.srcWidth, player.srcHeight, player.dx, player.dy, player.srcWidth, player.srcHeight);
//   }
//   else if (fork) {
//     roundUpdatePlayer();
//     player.dy = 255;
//     ctx.drawImage(forkURL, 0, 0, 650, 350);
//     ctx.drawImage(playerURL, player.srcx, player.srcy, player.srcWidth, player.srcHeight, player.dx, player.dy, player.srcWidth, player.srcHeight);
//   }
//   else if (homebase) {
//     roundUpdatePlayer();
//     player.dy = 235;
//     ctx.drawImage(homebaseURL, 0, 0, 650, 350);
//     ctx.drawImage(playerURL, player.srcx, player.srcy, player.srcWidth, player.srcHeight, player.dx, player.dy, player.srcWidth, player.srcHeight);
//   }
// }