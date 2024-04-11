document.addEventListener('DOMContentLoaded', function() {
  // Button to start the game
  const startBtn = document.getElementById('startButton');

  startBtn.addEventListener('click', function() {
    // Select the character class
    const selectedClass = document.getElementById('classSelect').value;
    console.log("Selected class:", selectedClass);

    // Get the player's name
    const playerName = document.getElementById('playerName').value;
    console.log("Player name:", playerName);

    // Create a new character with the selected class and player's name
    let playerCharacter;
    switch (selectedClass) {
      case 'Fighter':
        playerCharacter = new Fighter(playerName);
        break;
      case 'Paladin':
        playerCharacter = new Paladin(playerName);
        break;
      case 'Monk':
        playerCharacter = new Monk(playerName);
        break;
      case 'Berserker':
        playerCharacter = new Berserker(playerName);
        break;
      case 'Assassin':
        playerCharacter = new Assassin(playerName);
        break;
      case 'Wizard':
        playerCharacter = new Wizard(playerName);
        break;
      default:
        console.log("Invalid character class selected.");
        return;
    }

    // Launch game with the player character
    const game = new Game(playerCharacter);
    game.startGame();
  });
});
