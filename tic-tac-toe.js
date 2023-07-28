let prompt = require("prompt-sync")({ sigint: true });

// Global variables
let board = [];
let currentPlayer = "X";
let gameOver = false;

// Function to initialize the Tic-Tac-Toe board
function initializeBoard() {
  board = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ];
}

// Function to display the Tic-Tac-Toe board
function displayBoard() {
  for (let i = 0; i < 3; i++) {
    console.log(board[i].join(" "));
  }
}

// Function to check if the game is over
function isGameOver() {
  // Check for a win in rows, columns, and diagonals
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2] &&
      board[i][0] !== "-"
    ) {
      gameOver = true;
      return;
    }
    if (
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i] &&
      board[0][i] !== "-"
    ) {
      gameOver = true;
      return;
    }
  }

  if (
    (board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== "-") ||
    (board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[0][2] !== "-")
  ) {
    gameOver = true;
    return;
  }

  // Check for a tie
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "-") {
        return;
      }
    }
  }

  gameOver = true;
}

// Function to check if a move is valid
function isValidMove(row, col) {
  return board[row][col] === "-";
}

// Function to make a move
function makeMove(row, col) {
  if (isValidMove(row, col)) {
    board[row][col] = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

// Main function to run the Tic-Tac-Toe game
function playTicTacToe() {
  initializeBoard();
  console.log("Welcome to Tic-Tac-Toe!");
  displayBoard();

  while (!gameOver) {
    console.log(`Player ${currentPlayer}'s turn.`);
    const row = parseInt(prompt("Enter row (0, 1, or 2): "));
    const col = parseInt(prompt("Enter column (0, 1, or 2): "));;

    if (row >= 0 && row < 3 && col >= 0 && col < 3) {
      if (isValidMove(row, col)) {
        makeMove(row, col);
        displayBoard();
        isGameOver();
      } else {
        console.log("Invalid move. Try again.");
      }
    } else {
      console.log("Invalid input. Row and column must be between 0 and 2.");
    }
  }

  if (!gameOver) {
    console.log("It's a tie!");
  } else {
    console.log(`Player ${currentPlayer === "X" ? "O" : "X"} wins!`);
  }
}

// Run the game
playTicTacToe();
