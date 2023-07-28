// Function to initialize the Tic-Tac-Toe board
Function initializeBoard():
    Create a 3x3 grid (board) of empty cells (e.g., use '-' to represent empty cells)

// Function to display the Tic-Tac-Toe board
Function displayBoard():
    For each row in the board:
        For each column in the row:
            Display the cell content (either 'X', 'O', or '-') with appropriate formatting
        End For
        Display a new line
    End For

// Function to check if the game is over
Function isGameOver():
    // Check for a win in rows, columns, and diagonals
    If any row has all 'X's or all 'O's, return true
    If any column has all 'X's or all 'O's, return true
    If either diagonal has all 'X's or all 'O's, return true

    // Check for a tie
    If the board is full, return true

    // Otherwise, the game is not over
    Return false

// Function to check if a move is valid
Function isValidMove(row, col):
    If the cell at the specified row and column is empty, return true
    Otherwise, return false

// Function to make a move
Function makeMove(row, col, player):
    If the move is valid:
        Set the cell at the specified row and column to the players symbol ('X' or 'O')

// Function to get the current players symbol ('X' or 'O')
Function getCurrentPlayer():
    If the number of 'X's on the board is equal to the number of 'O's, return 'X'
    Otherwise, return 'O'

// Main function to run the Tic-Tac-Toe game
Function playTicTacToe():
    Initialize the Tic-Tac-Toe board
    Display the board

    While the game is not over:
        Get the current players symbol
        Display a message to prompt the current player to make a move
        Read the row and column input from the current player

        If the move is valid:
            Make the move for the current player
            Display the updated board
        Else:
            Display an error message indicating an invalid move
        End If

        If the game is over:
            If there is a winner, display a congratulatory message
            Else, display a message indicating a tie
        End If
    End While
End Function
