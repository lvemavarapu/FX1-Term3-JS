// let x=7000/0
// console.log(x)
// let x = 5
// console.log(x)

// let x = 10/2
// console.log(x)
// console.log(typeof(x))
// let a = "hello brisbane"
// console.log(typeof(a))

// let x = 6/0
// console.log(x)

// let x = 6/ "hello"
// console.log(x)

// let x =0;
try
{
    // throw an error by running some code
}
catch(ex)
{
    // code to be executed if an error occurs
}
finally{
    // code to be executed regardless of an error occurs or not

// const dividedBy =(num1, num2) => {
//     let division = 0
// try{
//     if(num2 == 0){
//         throw "error, division by zero"
//     }
//      division = num1/num2
// }catch(e){
//         console.log("exception caught",e)
//     }
    

// finally{
//     return division
// }
// }

// console.log(dividedBy(12, 4))
// console.log(dividedBy(20, 0))

const dividedBy =(num1, num2) => {
    let division = 0
try{
    if(isNaN(num1) || isNaN(num2)) {
        throw "error, parameters must be numbers"
    }else if(num2 == 0){
        throw "error, divide by zero"
    }
     division = num1/num2
}catch(e){
        console.log("exception caught",e)
    }
    

finally{
   }   return division
}
}

console.log(dividedBy(12, 4))
console.log(dividedBy(20, 0))
console.log(dividedBy(20,"hello"))
