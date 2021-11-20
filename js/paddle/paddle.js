// Initialize paddle properties
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;
const PADDLE_MARGIN_BOTTOM = 50; // difference from paddle to bottom of game screen
const SPEED = 7;

// Initialize right and left arrow to check user input
var rightArrow = false;
var leftArrow = false;

// Initialize paddle obj
const Paddle = {
  // Paddle x position, y position on xy-axis
  // Paddle width, height and speed
  x: cvs.width / 2 - PADDLE_WIDTH / 2,
  y: cvs.height - PADDLE_HEIGHT - PADDLE_MARGIN_BOTTOM,
  width: PADDLE_WIDTH,
  height: PADDLE_HEIGHT,
  speed: SPEED,

  //--------- draw the Paddle
  draw: () => {
    // Fill color inside rectangular paddle
    ctx.fillStyle = "#2e3548";
    ctx.fillRect(Paddle.x, Paddle.y, Paddle.width, Paddle.height);

    // Fill the border of the paddle
    ctx.lineWidth = 5; // make it thicker
    ctx.strokeStyle = "#ffcd05"; //color
    ctx.strokeRect(Paddle.x, Paddle.y, Paddle.width, Paddle.height); //make border around paddle
  },

  //-------update the position of the paddle
  updatePosition: () => {
    // whenever rightArrow true -> move the paddle to the right
    // handle case when paddle reach the right screen
    if (rightArrow && Paddle.x + PADDLE_WIDTH < cvs.width)
      Paddle.x += Paddle.speed;

    // whenever leftArrow true -> move the paddle to the left
    // handle case when paddle reach the left screen
    if (leftArrow && Paddle.x > 0) Paddle.x -= Paddle.speed;
  },
};

//-------- Control the paddle

// Key down when user push on the arrow on their keyboard
document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowRight":
      rightArrow = true;
      break;
    case "ArrowLeft":
      leftArrow = true;
      break;
  }
});

// Key up when user release the arrow on their keyboard
document.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "ArrowRight":
      rightArrow = false;
      break;
    case "ArrowLeft":
      leftArrow = false;
      break;
  }
});
