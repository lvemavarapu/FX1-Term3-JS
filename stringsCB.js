function stringModifier(string, callback){
    callback(string)
}

function addStars(string){
    console.log(string + "***")
    console.log(`${string}***`)
}
function showFirstFiveCharacters(string){
    console.log(string.slice(0,5))
}
function reverse(string){
    console.log(string.split("").reverse().join(""))
    
}
function turnVowelstoA(string){
    console.log(string.replace(/[aeiou]/g,"A"))
}

console.log(addStars("callbacks lesson"))
console.log(showFirstFiveCharacters("welcome to term3"))
console.log(reverse("helloworld"))
console.log(turnVowelstoA("hello"))

stringModifier("JavaScript",addStars)
stringModifier("JavaScript",turnVowelstoA)
stringModifier("callback lesson",reverse)

