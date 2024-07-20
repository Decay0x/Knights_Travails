function knightMoves(start, end) {
  // Validate input: Both start and end must be arrays of length 2 (representing [x, y] coordinates)
  if (
    !Array.isArray(start) ||
    !Array.isArray(end) ||
    start.length !== 2 ||
    end.length !== 2
  ) {
    console.error('Invalid input: start and end must be arrays of length 2');
    return;
  }

  // Define the size of the chessboard and the possible moves for a knight
  const boardSize = 8;
  const moves = [
    [-2, -1], // Move up-left
    [-2, 1], // Move up-right
    [-1, -2], // Move left-up
    [-1, 2], // Move right-up
    [1, -2], // Move left-down
    [1, 2], // Move right-down
    [2, -1], // Move down-left
    [2, 1], // Move down-right
  ];

  // Initialize the queue with the starting position and a set to keep track of visited positions
  const queue = [[start]]; // Queue to store paths
  const visited = new Set([start.toString()]); // Set to store visited positions

  // Main loop to explore all possible paths
  while (queue.length > 0) {
    // Dequeue a path from the queue
    const path = queue.shift();
    // Extract the last position in the path
    const [x, y] = path[path.length - 1];

    // Check if the last position is the target
    if (x === end[0] && y === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      // Print the path taken to reach the target
      path.forEach(([x, y]) => console.log(`[${x}, ${y}]`));
      return;
    }

    // Iterate over all possible moves
    for (const [dx, dy] of moves) {
      // Calculate the new position
      const [newX, newY] = [x + dx, y + dy];

      // Check if the new position is within the board boundaries and has not been visited
      if (
        newX >= 0 &&
        newX < boardSize &&
        newY >= 0 &&
        newY < boardSize &&
        !visited.has([newX, newY].toString())
      ) {
        // Add the new position to the current path and enqueue it
        queue.push([...path, [newX, newY]]);
        // Mark the new position as visited
        visited.add([newX, newY].toString());
      }
    }
  }

  console.log('No path found!');
}

// Example usage:
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
knightMoves([3, 3], [4, 3]);
