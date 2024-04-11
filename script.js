document.addEventListener('DOMContentLoaded', function() {
  const startBtn = document.getElementById('startButton');

  startBtn.addEventListener('click', function() {
    const game = new Game();
    game.startGame();
  });
});