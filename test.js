{/* <button type="button"
        onclick="document.getElementById('demo').innerHTML = Date()">
        Click me to display Date and Time.</button>
        
        <p id="demo"></p>
let a = 1; */}
let aAgain = 1;
let aString = "1";  // note: this is string

console.log(a ==  aAgain);  
console.log(a === aAgain);  // true
 console.log(a ==  aString); // true. See below for explanation.
console.log(a===aString);

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
      

        
       let quotes =["I became a good pitcher when I stopped trying to make them miss the ball and started trying to make them hit it.",
                    "There may be people that have more talent than you, but there’s no excuse for anyone to work harder than you do.",
                    "Winning isn’t everything, but wanting to win is.",
                    "You have to expect things of yourself before you can do them.",
                    "Today, you have 100% of your life left.",
                    "You miss 100% of the shots you don’t take",
                    "Never say never because limits, like fears, are often just an illusion.",
                    "The harder the battle, the sweeter the victory.",
                    "It’s hard to beat a person who never gives up.",
                    "Hard work beats talent when talent doesn’t work hard"

      ]
      // FUNCTIONS

function addder(x,y, ...args){
  console.log(x,y,args)
}
adder(2,5,6,7,8)
// following the anonymous function for the same
      const adder = function (x,y, ...args){
        return args
      }
      const multiplier =function(x, y){
        return x * y
      }
      console.log(adder(6,7,8,9))
      console.log(multiplier(5,6))

// fat arror syntax, scoping rules are different when 
// traditional  way of declaration is

      const multiplier = (x, y)=>{
        return x * y
      }
      console.log(multiplier(5,6))
// return is implicit,  and 
//here  it is a single statement so we can get rid of {} in all other cases
// we need the {} .
      const multiplier = (x, y)=> x * y
      console.log(multiplier(5,6))

//destructuring arrays:
//powerful way to extract values from arrays 
      let people = ["Lavanya","Teej","Shauna"]

      let[firstPerson]= people
      // let[firstPerson, secondPerson] = people.split
      console.log(firstPerson)
      //console.log(secondPerson)

      //Spread & Rest operator:
      // more used in react, to get updated state.
      let people = ["Lavanya","Teej","Shauna"]
      let[firstPerson, ...others]= people
      console.log(others)

      let favColors={
        ben:"yellow",
        holly:"green",
        jade:"orange"
      }
      let { jade } =favColors
      console.log(`Toms fav color is ${jade}`)

      let { Kat } =favColors
      console.log(`Toms fav color is ${jade}`)
      // what will be the output
// best to use default values for
// interpolation cleaner
      let { Kat ="black" } =favColors
      console.log(`Toms fav color is ${kat}`)

