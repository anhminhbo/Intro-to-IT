var gameOver = false;
var point = 0;

const Point = document.getElementById("point");

// Game Loop
const gameLoop = () => {
  // Render the bg screen whenever the game animation restart and update
  // Clear the screen
  ctx.clearRect(0, 0, cvs.width, cvs.height);

  // Render bg image
  ctx.drawImage(BG_IMG, 0, 0); // img already fit screen so set dx dy to 0

  //  draw Obj
  drawObj();

  // update Obj Position
  gameUpdateObjPosition();

  // update game level
  updateGameLevel();

  // Create game loop if the game is not over
  if (!gameOver) requestAnimationFrame(gameLoop);
  else {
    alert(`You lost. Total Bouncing Point you get is ${point}.`);
    location.reload(); // reload the page after lost
  }
};

// Create function to draw Obj
const drawObj = () => {
  // draw Paddle
  Paddle.draw(PADDLE_IMG);

  // draw Ball
  Ball.draw(BALL_IMG);
};

// create gameUpdateObjPosition
const gameUpdateObjPosition = () => {
  // Update paddle position
  Paddle.updatePosition();

  // move Ball
  Ball.move();

  //Check ball Collison to update ball movement
  ballCollisonWall();

  ballCollisonPaddle();
};

// create function update Point
const updatePoint = () => {
  point++;
  Point.textContent = `Point : ${point}`;
};

// update game level: 6 levels
const updateGameLevel = () => {
  // Level 1
  if (point >= 10 && point <= 20) {
    Paddle.speed = 17;
    Ball.speed = 7;
  }

  // Level 2
  if (point > 20 && point <= 30) {
    Paddle.speed = 14;
    Ball.speed = 9;
  }

  // Level 3
  if (point > 30 && point <= 40) {
    Paddle.speed = 11;
    Ball.speed = 11;
  }

  // Level 4
  if (point > 40 && point <= 50) {
    Paddle.speed = 8;
    Ball.speed = 13;
  }

  // Level 5
  if (point > 50 && point <= 60) {
    Paddle.speed = 5;
    Ball.speed = 15;
  }

  // Level 6
  if (point > 60) {
    Paddle.speed = 2;
    Ball.speed = 17;
  }
};

gameLoop();
