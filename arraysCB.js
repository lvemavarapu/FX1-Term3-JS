// let numbers = [2,13,4,45,66,7]

// // console.log(numbers.filter(number => number<10))

// // console.log(numbers.filter(function(number){
// //     return number<10
// // }))
// function lessThanTen(number){
//     return number<10
// }
// console.log(lessThanTen(18))
// console.log(lessThanTen(8))

// console.log(numbers.filter(lessThanTen))
// console.log(numbers.map(lessThanTen))

let words = ["hello","Brisbane","developers"]

// console.log(words.map((word)=>word + word))

// console.log(words.map(function(word){
//     return word+word
// }))

function doubleString(w){
    return w+w
}
console.log(words.map(doubleString))


