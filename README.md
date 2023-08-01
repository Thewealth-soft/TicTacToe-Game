## Tic-Tac-Toe Game
This is a simple command-line implementation of the classic Tic-Tac-Toe game written in JavaScript. It allows two players to take turns marking X and O on a 3x3 grid until one player wins or the game ends in a tie.

| How to Play | Rules |
|----------|----------|
|1. Clone or download the repository to your local machine.|1. The game is played on a 3x3 grid.|
|2. Open a terminal or command prompt and navigate to the project directory.|2. Players take turns to mark an empty cell with their respective symbol (X or O).|
|3. Make sure you have Node.js installed on your machine.|3. The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins the game.|
|4. Run the game using the following command: ```node ticTacToe.js```|4. If all cells are filled and no player has won, the game ends in a tie.|
|5. The game will display an empty Tic-Tac-Toe board with cells represented by numbers from 0 to 2 for rows and columns.|        
|6. Players take turns entering the row and column of their desired move when prompted.|
|7. The game will notify if the move is valid or ask you to try again.|
|8. The game continues until one player wins or the game ends in a tie.|  


 `Enter row (0, 1, or 2):`: Enter the row number (0, 1, or 2) for your move.  
 `Enter column (0, 1, or 2):`: Enter the column number (0, 1, or 2) for your move.

## Example Gameplay

```node
Welcome to Tic-Tac-Toe!
- - -
- - -
- - -
Player X's turn.
Enter row (0, 1, or 2): 1
Enter column (0, 1, or 2): 1
- - -
- X -
- - -
Player O's turn.
Enter row (0, 1, or 2): 0
Enter column (0, 1, or 2): 1
- O -
- X -
- - -
...

Player X wins!
```

Have fun playing the Tic-Tac-Toe game!

