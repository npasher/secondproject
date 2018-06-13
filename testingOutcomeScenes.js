function alienSpottedInit() {
  playerURL;
  ufoURL;
  window.requestAnimationFrame(alienSpottedStart);
}
function alienSpottedStart() {
  frameRateId = setInterval(drawAlienSpotted, 50);
}

function drawAlienSpotted() {
  // updateUFO();
  ufo.speed = 10;
  ufo.dx = 500;
  ufo.dy = 20;
  spinningUFO();
  ctx.drawImage(ufoURL, ufo.srcx, ufo.srcy, ufo.srcWidth, ufo.srcHeight, ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
  ctx.drawImage(playerURL, 90, 376, player.srcWidth, player.srcHeight, 50, 260, player.srcWidth, player.srcHeight);
 
}

function spinningUFO() {
  ufo.srcCurFrame = ++ufo.srcCurFrame % ufo.srcTotFrame;
  // Calculates the x coordinate for spritesheet
  ufo.srcx = ufo.srcCurFrame * ufo.srcWidth;
  // Clear already drawn sprite before new sprite renders
  ctx.clearRect(ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
}

// alienSpottedInit();

function noAlienInit() {

}

function drawNoAlien() {

}

// noAlienInit();

function alienEvidenceInit() {
  playerURL;
  ufoURL;
  cropCircleURL;
  window.requestAnimationFrame(alienEvidenceStart);
}

function alienEvidenceStart() {
  frameRateId = setInterval(drawAlienEvidence, 50);
}

function drawAlienEvidence() {
  updatePlayer();
  ctx.drawImage(cropCircleURL, 0, 0, 650, 350);
  ctx.drawImage(playerURL, player.srcx, player.srcy, player.srcWidth, player.srcHeight, player.dx, player.dy, player.srcWidth, player.srcHeight);
}

// alienEvidenceInit();

function sneakAroundInit() {
  playerURL;
  ufoURL;
  window.requestAnimationFrame(sneakAroundStart);
}

function sneakAroundStart() {
  frameRateId = setInterval(drawSneakAround, 50);
}

function drawSneakAround() {
  // player.speed = 1;
  ufo.speed = 10;
  updateUFO();
  updatePlayer();
  ctx.drawImage(ufoURL, ufo.srcx, ufo.srcy, ufo.srcWidth, ufo.srcHeight, ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
  ctx.drawImage(playerURL, player.srcx, player.srcy, player.srcWidth, player.srcHeight, player.dx, player.dy, player.srcWidth, player.srcHeight);
}

// sneakAroundInit();

// function ufoSpotBeam () {
//   ctx.drawImage 
// }

function spottedInit() {

}

function drawSpottedInit() {

}

// spottedInit();

function fightInit() {
  playerShootingURL;
  ufoURL;
  window.requestAnimationFrame(fightStart);
}

function fightStart() {
  frameRateId = setInterval(drawFight, 50);
}

function drawFight() {
  ufo.speed = 10;
  ufo.dx = 500;
  ufo.dy = 220;
  spinningUFO();
  playerFighting();
  ctx.drawImage(ufoURL, ufo.srcx, ufo.srcy, ufo.srcWidth, ufo.srcHeight, ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
  ctx.drawImage(playerShootingURL, playerShooting.srcx, playerShooting.srcy, playerShooting.srcWidth, playerShooting.srcHeight, playerShooting.dx, playerShooting.dy, playerShooting.srcWidth, playerShooting.srcHeight);
}

function playerFighting() {
  playerShooting.srcCurFrame = ++playerShooting.srcCurFrame %playerShooting.srcTotFrame;
  // Calculates the x coordinate for spritesheet
  playerShooting.srcx =playerShooting.srcCurFrame *playerShooting.srcWidth;
  // Clear already drawn sprite before new sprite renders
  ctx.clearRect(playerShooting.dx, playerShooting.dy, playerShooting.dWidth, playerShooting.dHeight);
}

// fightInit();

function exploreInit() {

}

function drawExplore() {

}

// exploreInit();

function injuredInit() {
  playerInjuredURL;
  ufoURL;
  window.requestAnimationFrame(injuredStart);
}

function injuredStart() {
  frameRateId = setInterval(drawInjured, 500);
}

function drawInjured() {
  console.log(playerInjured);
  ufo.speed = 10;
  ufo.dx = 500;
  ufo.dy = 220;
  playerInjured.srcWidth = 80;
  playerInjured.srcx = 240;
  spinningUFO();
  playerInjury();
  ctx.drawImage(ufoURL, ufo.srcx, ufo.srcy, ufo.srcWidth, ufo.srcHeight, ufo.dx, ufo.dy, ufo.dWidth, ufo.dHeight);
  ctx.drawImage(playerInjuredURL, playerInjured.srcx, playerInjured.srcy, playerInjured.srcWidth, playerInjured.srcHeight, playerInjured.dx, playerInjured.dy, playerInjured.srcWidth, playerInjured.srcHeight);
}

function playerInjury() {
  // playerInjured.srcWidth = playerInjured.srcWidth + 15;
  playerInjured.srcCurFrame = ++playerInjured.srcCurFrame % playerInjured.srcTotFrame;
  // Calculates the x coordinate for spritesheet
  playerInjured.srcx = playerInjured.srcCurFrame * playerInjured.srcWidth;
  // Clear already drawn sprite before new sprite renders
  ctx.clearRect(playerInjured.dx, playerInjured.dy, playerInjured.dWidth, playerInjured.dHeight);
  console.log(playerInjured.srcCurFrame);
  if (playerInjured.srcCurFrame >= 4) {
    playerInjured.srcx = 500;
    playerInjured.srcy = 282;
    playerInjured.srcWidth = 100;
    stopInterval();
  }
}

// injuredInit();

function negotiateInit() {
  
}

function drawNegotiate() {

}

// negotiationInit();

function charmedInit() {

}

function drawCharmed() {

}

// charmedInit();

function abductInit() {

}

function drawAbduct() {

}

// abductInit();
