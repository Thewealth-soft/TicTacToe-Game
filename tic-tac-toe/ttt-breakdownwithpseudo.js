f/* Function initializeBoard():
    Create a 3x3 grid (board) of empty cells (e.g., use '-' to represent empty cells) */

    // Function to initialize the Tic-Tac-Toe board
function initializeBoard() {
  board = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ];
}
/* 
Function displayBoard():
    For each row in the board:
        For each column in the row:
            Display the cell content (either 'X', 'O', or '-') with appropriate formatting
        End For
        Display a new line
    End For
 */

    // Function to display the Tic-Tac-Toe board
function displayBoard() {
  for (let i = 0; i < 3; i++) {
    console.log(board[i].join(' '));
  }
}

/* Function isGameOver():
    If any row has all 'X's or all 'O's, return true
    If any column has all 'X's or all 'O's, return true
    If either diagonal has all 'X's or all 'O's, return true
    If the board is full, return true
    Otherwise, the game is not over, return false
 */

    // Function to check if the game is over
function isGameOver() {
  // Check for a win in rows, columns, and diagonals
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '-') {
      gameOver = true;
      return;
    }
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '-') {
      gameOver = true;
      return;
    }
  }

  if (
    (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '-') ||
    (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '-')
  ) {
    gameOver = true;
    return;
  }

  // Check for a tie
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '-') {
        return;
      }
    }
  }

  gameOver = true;
}
/* Function isValidMove(row, col):
    If the cell at the specified row and column is empty, return true
    Otherwise, return false
 */

    // Function to check if a move is valid
function isValidMove(row, col) {
  return board[row][col] === '-';
}
/* Function makeMove(row, col, player):
    If the move is valid:
        Set the cell at the specified row and column to the player's symbol ('X' or 'O')
 */

        // Function to make a move
function makeMove(row, col) {
  if (isValidMove(row, col)) {
    board[row][col] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

/* Function getCurrentPlayer():
    If the number of 'X's on the board is equal to the number of 'O's, return 'X'
    Otherwise, return 'O'
 */

    // Function to get the current player's symbol ('X' or 'O')
function getCurrentPlayer() {
  return board.flat().filter(cell => cell === 'X').length === board.flat().filter(cell => cell === 'O').length ? 'X' : 'O';
}


/* Function playTicTacToe():
    Initialize the Tic-Tac-Toe board
    Display the board

    While the game is not over:
        Get the current player's symbol
        Display a message to prompt the current player to make a move
        Read the row and column input from the current player

        If the move is valid:
            Make the move for the current player
            Display the updated board
        Else:
            Display an error message indicating an invalid move

        If the game is over:
            If there is a winner, display a congratulatory message
            Else, display a message indicating a tie
 */

            // Main function to run the Tic-Tac-Toe game
function playTicTacToe() {
  initializeBoard();
  console.log('Welcome to Tic-Tac-Toe!');
  displayBoard();

  while (!gameOver) {
    const currentPlayer = getCurrentPlayer();
    console.log(`Player ${currentPlayer}'s turn.`);

    const readline = require('readline-sync');
    const row = readline.questionInt('Enter row (0, 1, or 2): ');
    const col = readline.questionInt('Enter column (0, 1, or 2): ');

    if (row >= 0 && row < 3 && col >= 0 && col < 3) {
      if (isValidMove(row, col)) {
        makeMove(row, col);
        displayBoard();
        isGameOver();
      } else {
        console.log('Invalid move. Try again.');
      }
    } else {
      console.log('Invalid input. Row and column must be between 0 and 2.');
    }
  }

  if (!gameOver) {
    console.log("It's a tie!");
  } else {
    console.log(`Player ${currentPlayer === 'X' ? 'O' : 'X'} wins!`);
  }
}

// Run the game
playTicTacToe();
