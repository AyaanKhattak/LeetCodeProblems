//“Number of Islands” problem using Depth-First Search (DFS) with a stack instead of recursion, which is great because it avoids call stack overflows on large grids.

// Helper function to get all valid adjacent unvisited neighbors (up, down, left, right)
const getAdjNeighbors = (i, j, grid, visited) => {
    const adjNeighbors = [];

    // Check UP
    if (i > 0 && !visited[i - 1][j]) adjNeighbors.push([i - 1, j]);
    // Check DOWN
    if (i < grid.length - 1 && !visited[i + 1][j]) adjNeighbors.push([i + 1, j]);
    // Check LEFT
    if (j > 0 && !visited[i][j - 1]) adjNeighbors.push([i, j - 1]);
    // Check RIGHT
    if (j < grid[0].length - 1 && !visited[i][j + 1]) adjNeighbors.push([i, j + 1]);

    return adjNeighbors;
};

// Depth-First Search using stack to avoid recursion
const dFS = (i, j, grid, visited) => {
    const stack = [[i, j]];
    let isIsland = false;

    while (stack.length > 0) {
        const [x, y] = stack.pop();  // Destructuring assignment

        if (visited[x][y]) continue;  // Skip already visited nodes

        visited[x][y] = true;

        // If it's water, skip it
        if (grid[x][y] === '0') continue;

        isIsland = true;  // Found land

        // Add all valid neighbors to stack
        const neighbors = getAdjNeighbors(x, y, grid, visited);
        stack.push(...neighbors);  // Spread syntax to push multiple elements
    }

    return isIsland;
};

// Main function to count islands
var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;

    const visited = Array.from({ length: grid.length }, () =>
        Array(grid[0].length).fill(false)
    );

    let islandCount = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (dFS(i, j, grid, visited)) {
                islandCount++;
            }
        }
    }

    return islandCount;
};

const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];

console.log(numIslands(grid));