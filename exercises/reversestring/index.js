// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;

// Solution #1
// Turn 'str' into an arrar
// Call 'reverse' method on the array
// Join the array back into a string
// Return the result

// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('')
// }

// Solution #2
// Create an empty string called 'reversed'
// for each character in the provide string
// Take the character and add it to the start of 'reversed'
// Return the variable 'reversed'

// function reverse(str) {
//     let reversed = ''

//     for (const character of str) {
//         reversed = character + reversed
//     }

//     return reversed
// }

// Solution #3
// function reverse(str) {
//     return str.split('').reduce((reversed, character) => character + reversed, '')
// }