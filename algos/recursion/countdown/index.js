// // program to count down numbers to 1
// function countdown(number) {

//     // display the number
//     console.log(number);

//     // decrease the number value
//     const newNumber = number - 1;

//     // base case
//     if (newNumber > 0) {
//         countdown(newNumber);
//     }
// }

// countdown(4);

function countdown(n) {
    let countdownString = '';
    if (n <= 0) {
        return countdownString + 'BlastOff!';
    } else {
        countdownString += `${n}, `;
    }
    return countdownString += countdown(n - 1)
}
//  countdown(4)
module.exports = countdown