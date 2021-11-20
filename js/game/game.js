// Game Loop
const gameLoop = () => {
  // Render the bg screen whenever the game animation restart and update
  ctx.drawImage(BG_IMG, 0, 0); // img already fit screen so set dx dy to 0

  // Draw paddle
  Paddle.draw();

  // Update paddle position
  Paddle.updatePosition();

  // Create game loop
  requestAnimationFrame(gameLoop);
};

gameLoop();
