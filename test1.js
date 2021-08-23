// // let name ="Lavanya"

// // console.log(`the name is ${name}`)

// function subtract(x, y) {
//     x - y;
// }

// console.log(subtract(2,1));
// // //remove the function keyword

// (x, y) =>{
//     return x - y;
// }
// console.log((2,1));

// function tripleNumber(value) {
//     return value * 3
// }

// const tripleNumber = (value) => value * 3

// // function fizzBuzz(start, end) {
// //     while (start < end) {
// //         if (start % 3 === 0 && start % 5 === 0) {
// //             console.log('fizzbuzz')
// //             return true
// //         } else if (start % 3 === 0) {
// //             console.log('fizz')
// //         } else if (start % 5 === 0) {
// //             console.log('buzz')
// //         } else {
// //             console.log(start)
// //         }
// //         start += 1
// //     } 
// //     return false
// // }

// // console.log(fizzBuzz(1, 20))

// function loopOverArray(directions) {
//     let object = {}

//     for (direction of directions) {
//         if (object[direction] > 0) {
//             object[direction] += 1
//         }
//         else {
//             object[direction] = 1
//         }
//     }

//     return object
// }
// console.log(loopOverArray(["n", "s", "e", "e"]) )

// traditional function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callThisFunction() {
    console.log('This is  a callback function');
}

// here callThisFunction is passed as an argument
greet('Peter', callMe);