

// following code prints the numbers lessthan 50
//we can use a for loop to begin with and check the logic.

let numbers = [4,67,89,90,88,43,21]
for(item of numbers){
    if(item<50){
        numbersLessThan50.push(item)
    }
}
console.log(numbersLessThan50)
// make sure to view the output on the browser console
// we can use array.filter method to perform the same operation in a much 
// efficient way     
 let numbers = [4,67,89,90,88,43,21]
 let numbersLessThan50 = numbers.filter(item => item<30)
 console.log(numbersLessThan50)

// Now let us try the filter  method on an array of Objects

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
            // following filter method prints the quotes by Michael Jordon        
            let mjQoutes = console.log(quotes.filter(quote => quote.source == 'Michael Jordan'))
            console.log(mjQoutes)

            let numbers = [4,67,89,90,88,43,21]
            for(item of numbers){
                numbers1.push(1)
            }
            console.log(numbers1)

            // increment value of every value of array by 1
            let numbers = [4,67,89,90,88,43,21]
            for(item of numbers){
                    numbers1.push(item +1)
                }
            console.log(numbers1)
            // using map method
            let  numbers1  = numbers.map(item => item+1)
            console.log(numbers1)

            // using map method printing square of the each number in an array
            let numbers = [4,67,89,90,88,43,21]
            let  numberSquare  = numbers.map(item => item * item)
            console.log(numberSquare)
           
            // Now let us go back to the quotes example
            // let us  themap function to print quotes in

              let uppers = quotes.map(q => q.quote.toUpperCase())
              console.log(uppers)

            // using the filter method to  print the quotes  by Michael Jordan
             let mjQoutes = console.log(quotes.filter(quote => quote.source == 'Michael Jordan'))
             console.log(mjQoutes)

            // we can combine filter and map methods to acheive the result in 
              let mjQuotes = quotes.filter(quote => quote["source"]=="Michael Jordan")
                    .map(quote => quote.quote.toUpperCase());

           let educators = ["lavanya","teej","shauna"]
           let[edu1,edu2,edu3] = educators
            console.log(edu1)
            console.log(edu2) 
            console.log(edu3)   
         

