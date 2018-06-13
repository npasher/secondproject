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

alienSpottedInit();

function noAlienInit() {

}

function drawNoAlien() {

}

// noAlienInit();

function alienEvidenceInit() {

}

function drawAlienEvidence() {

}

// alienEvidenceInit();

function sneakAroundInit() {

}

function drawSneakAround() {

}

// sneakAroundInit();

function spottedInit() {

}

function drawSpottedInit() {

}

// spottedInit();

function fightInit() {

}

function drawFightInit() {

}

// fightInit();

function exploreInit() {

}

function drawExplore() {

}

// exploreInit();

function injuredInit() {

}

function drawInjured() {

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
