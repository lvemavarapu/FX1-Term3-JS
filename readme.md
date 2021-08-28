# NOTES for 30 August 2021

- Following program prints the numbers less than 50
- We can write the program in several ways,  let us try with the standard for loop
- we can use a for loop
  
  ```javascript
  
           let numbers = [4,67,89,90,88,43,21]
            for(item of numbers){
            if(item<50){
              numbersLessThan50.push(item)
            }
            }
            console.log(numbersLessThan50)```

- In JavaScript we can use the array.filter method to rewrite the above code in a much
- more efficient way. Refer to the link below
(<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter>)
- Let us rewrite the above function  to print the  numbers less than 50 uisng the filter function
  
```javascript
        let numbers = [4,67,89,90,88,43,21]
        let numbersLessThan50 = numbers.filter(item => item<30)
        console.log(numbersLessThan50)
```

```javascript
            let quotes = [
                {
                  quote:"Hard work beats talent when talent doesn’t work hard.",
                  source:"Tim Notke",
                },
                {
                  quote:"It’s hard to beat a person who never gives up.",
                  source:"Babe Ruth",
                  year:1930,
                  sport:"Baseball player"
                },
                {
                  quote:"The harder the battle, the sweeter the victory.",
                  source:"Les Brown",
                  sport:"Boxer"
              
                },
                {
                  quote:"Never say never because limits, like fears, are often just an illusion.",
                  source:"Michael Jordan",
                  citation:"Chicago Tribune",
                  sport:"Basketball player"
                },
                {
                  quote:"You miss 100% of the shots you don’t take",
                  source:"Wayne Gretzky"
                },
                {
                  quote:"Today, you have 100% of your life left.",
                  source:"Tom Landry",
                },
                {
                  quote:"You have to expect things of yourself beforeet",
                
                },
                {
                  quote:"Hard work beats talent when talent doesn’t work hard.",
                  source:"Tim Notke",
                },
                {
                  quote:"It’s hard to beat a person who never gives up.",
                  source:"Babe Ruth",
                  year:1930,
                  sport:"Baseball player"
                },
                {
                  quote:"The harder the battle, the sweeter the victory.",
                  source:"Les Brown",
                  sport:"Boxer"
              
                },
                {
                  quote:"Never say never because limits, like fears, are often just an illusion.",
                  source:"Michael Jordan",
                  citation:"Chicago Tribune",
                  sport:"Basketball player"
                },
                {
                  quote:"You miss 100% of the shots you don’t take",
                  source:"Wayne Gretzky"
                },
                {
                  quote:"Today, you have 100% of your life left.",
                  source:"Tom Landry",
                },
                {
                  quote:"You have to expect things of yourself before you can do them.",
                  source:"Michael Jordan",
                  citation:"Chicago",
                  sport:"Basketball player"
                },
                {
                  quote:"Winning isn’t everything, but wanting to win is.",
                  source:"Vince Lombardi"
                },
                {
                  quote:"There may be people that have more talent than you, but there’s no excuse for anyone to work harder than you do.",
                  source:"Derek Jeter"
                },
                {
                  quote:"I became a good pitcher when I stopped trying to make them miss the ball and started trying to make them hit it.",
                  source:"Sandy Koufax",
                  year: 1950
                }];
```

```javascript
let mjQoutes = console.log(quotes.filter(quote => quote.source == 'Michael Jordan'))
console.log(mjQoutes)
```

- Following code converts the quote to upper case

```javascript
let uppers = quotes.map(q => q.quote.toUpperCase())
              console.log(uppers)
```

- In the following code snippet we use arraymap method to change the values in the array to 1

```javascript
            let numbers = [4,67,89,90,88,43,21]
            for(item of numbers){
            numbers1.push(1)
             }
            console.log(numbers1)
```

- In the following code we increment the values of array by 1

```javascript
            let numbers = [4,67,89,90,88,43,21]
            for(item of numbers){
            numbers1.push(item +1)
            }
            console.log(numbers1)
```

- Following snippet shows  map method to square the each value in the array

```javascript
            let numbers = [4,67,89,90,88,43,21]
            let  numberSquare  = numbers.map(item => item * item)
            console.log(numberSquare)

```

* Now let us go back to the quotes example
* let use the map function to print quotes in
  
```javascript
        let uppers = quotes.map(q => q.quote.toUpperCase())
        console.log(uppers)
```

- Using the filter method to  print the quotes  by Michael Jordan

```javascript
    let mjQoutes = console.log(quotes.filter(quote => quote.source == 'Michael Jordan'))
    console.log(mjQuotes)
```

- we can combine filter and map methods to acheive the result in

```javascript
    let mjQuotes = quotes.filter(quote => quote["source"]=="Michael Jordan")
               .map(quote => quote.quote.toUpperCase());

```

## Excception Handling

- Excception is a way to handle the errors in the code.
- general syntax
  
```javascript
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
}
```
  
- Here is an example:
- A function which performs a division on two numbers and
- returns the division

  ```javascript
  const dividedBy =(num1, num2) => {
    let division = 0
    try{
    if(num2 == 0){
        throw "error, division by zero"
    }
     division = num1/num2
    }catch(e){
        console.log("exception caught",e)
    }
    finally{
            return division
           }
  }
    console.log(dividedBy(12, 4))
    console.log(dividedBy(20, 0))
```


 - Now let us add one more error handling which checks if the
- function's arguments are valid numbers   
  
    ```javascript
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
    ```

  - Here is another example:
  
  ```javascript
        let employee = JSON.parse(json); // convert the text representation to JS object
 
    // Now user is an object with properties from the string
    // There is no exception handling hence when the alert(employee.role is hit it shows undefined)

        alert( employee.name ) // Smith
        alert( employee.age ) // 34
        alert(employee.city)  // city
        alert(employee.role)// undefined as user does not understand what is actually happening


- Let us rewrite the above code withe  try-catch

```javascript
let json = '{ "city": "Brisbane", "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  alert( user.name );

} catch (err) {
  alert( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}
```
