// Game Loop
const gameLoop = () => {
  // Render the bg screen whenever the game animation restart and update
  // Clear the screen
  ctx.clearRect(0, 0, cvs.width, cvs.height);

  // Render bg image
  ctx.drawImage(BG_IMG, 0, 0); // img already fit screen so set dx dy to 0

  // Draw paddle
  Paddle.draw(PADDLE_IMG);

  // Update paddle position
  Paddle.updatePosition();

  // Create game loop
  requestAnimationFrame(gameLoop);
};

gameLoop();
