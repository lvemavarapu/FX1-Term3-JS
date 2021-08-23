


// let quotes =["I became a good pitcher when I stopped trying to make them miss the ball and started trying to make them hit it.",
// "There may be people that have more talent than you, but there’s no excuse for anyone to work harder than you do.",
// "Winning isn’t everything, but wanting to win is.",
// "You have to expect things of yourself before you can do them.",
// "Today, you have 100% of your life left.",
// "You miss 100% of the shots you don’t take",
// "Never say never because limits, like fears, are often just an illusion.",
// "The harder the battle, the sweeter the victory.",
// "It’s hard to beat a person who never gives up.",
// "Hard work beats talent when talent doesn’t work hard"

// ]

// for(initialization; condition;iteration){
//     statements
// }

// for(let i=0;i<quotes.length;i++){
//     console.log(i+1,quotes[i])
// }
//for ..each(quotes)

// quotes.forEach((item,i) =>{
//     console.log(i+1,item)
// })

// for(quote of quotes){
//     console.log(quote)
// }

// let select = prompt("which quote do you want to view?")
// console.log(quotes[select-1])

// console.log(Math.random(...quotes))
//while loop

// let count =1;
// while(count<11){
//     console.log(count)
//     count++;
// }
// let count = 17

// do{
//     count++;
//     console.log(count);
// }while ( count < 15)
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

    let select = prompt("which quote you want to see?")
    quotes.forEach((quote,index) => {
        console.log(index+1,quote.quote)
    })

   
   