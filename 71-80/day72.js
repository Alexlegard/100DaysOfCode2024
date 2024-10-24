const { indexToLetter } = require('./utils.js');
const { validateMoveSafety } = require("./validateMoveSafety");

const board = [
    ["r", "n", "b", "q", "k", "", "", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["", "", "", "", "", "n", "", ""],
    ["", "", "b", "", "p", "", "", "Q"],
    ["", "", "B", "", "P", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P", "P", "P", "P", "", "P", "P", "P"],
    ["R", "N", "B", "", "K", "", "N", "R"]
];
const originalSquare = [3, 7]; // h5 square
const destinationSquare = [1, 5]; // g7 square
const piece = "Q";
const activePlayer = "w";

// Convert file indices to file letters using indexToLetter
const convertedOriginalSquare = [originalSquare[0], indexToLetter(originalSquare[1])];  // h5
const convertedDestinationSquare = [destinationSquare[0], indexToLetter(destinationSquare[1])];  // g7

describe('validateMoveSafety', () => {
    test('should run without crashing', () => {
        // Call validateMoveSafety with the mock data
        expect(() => {
        validateMoveSafety(board, convertedOriginalSquare, convertedDestinationSquare, piece, activePlayer);
        }).not.toThrow(); // Ensure the function doesn't throw an error
    });
});