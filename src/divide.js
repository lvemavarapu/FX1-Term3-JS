const divide =(num1, num2) => {
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
module.exports = {divide}