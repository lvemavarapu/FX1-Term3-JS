function add(a,b){
    return a+b
}
function multiply(a,b){
    return a*b
}
console.log(add(4,5))// output 9

function mathOperations(num1, num2, callback){
    console.log(callback(num1,num2))
}
mathOperations(5,5,add)//output 10
mathOperations(6,5,multiply)// output 30

mathOperations(10,6,(a,b)=>{
    return a/b
})
mathOperations(12,2, function(a,b){
    return a-b
})




