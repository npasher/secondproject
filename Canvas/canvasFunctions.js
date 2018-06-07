// Sprite Right to 1/2 hover
function halfToHover() {
  if (right && x < (canvasWidth - width) / 2) {
    x += speed;
    if (x === ((canvasWidth - width) / 2)) {
      x = 0;
      // x -= speed;
    }
  }
};

// Sprite Full Screen PingPong Loop
function pingPong() {
  if (right && x < canvasWidth - width) {
    x += speed;
  }
  else if (x >= 0) {
    right = false;
    left = true;
    x -= speed;
    // Decrease the x coord
    if (x === 0) {
      right = true;
      left = false;
    }
  }
};