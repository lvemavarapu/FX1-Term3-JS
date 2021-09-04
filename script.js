let cities =[
{
    city: 'Sydney',
    nickName:'The harbour city',
    country:'Australia',

},
{
    city: 'Paris',
    nickName:'The City of light',
    country:'',

},
{
    city: 'Chicago',
    nickName:'The Windy city',
    country:'USA',

},
{
    city: 'Mumbai',
    nickName:'The city of dreams',
    country:'India',

},
{
    city: 'Singapore',
    nickName:'The Lion City',
    country:'Singapore',

},
{
    city: 'Florence',
    nickName:'The City of Lilies',
    country:'Italy',

},
{
    city: 'Barcelona',
    nickName:'The City of Counts',
    country:'Spain',

},
{
    city: 'Helsinki ',
    nickName:'The White City of the North',
    country:'Finland',

},
{
    city: 'Manila',
    nickName:'City by the Bay',
    country:'Philipines',

}]
// source:https://travelaway.me/100-cities-and-their-nicknames/

document.body.style.backgroundColor = "salmon"
const cityBox = document.querySelector("#city-box") 
cityBox.style.border = "solid 2px black"
// with string interpolation ` solid 2px ${colors[6]}`

// const cityName = document.createElement("p")
// cityName.textContent = "city list"
// //  following  will add the new element  to the end of the body

// //document.body.appendChild(cityName)
// //following will add to the end of the container
// document.body.querySelector(".container").appendChild(cityName)
const ShowCitiesButton = document.createElement("button")
ShowCitiesButton.textContent = "Hide"
document.body.querySelector(".container").appendChild(ShowCitiesButton)

// let fullCityName = document.getElementsByTagName("p")

let fullCityName = cityBox.getElementsByTagName("p")
for (item of fullCityName){
    item.style.color ="white"
 }

// fullCityName[0].style.fontSize = "50px"

let actualCity = document.querySelector(".city")
actualCity.style.fontSize = "50px"
// let us create a new element un-ordered list to  
//display the  list of the city names  listed above.

const cityUL = document.createElement("ul")
document.body.querySelector(".container").appendChild(cityUL)

//iterate through the array of cities 
//part1
for (item of cities){
    let li = document.createElement("li")
    li.innerText=item.city
    cityUL.appendChild(li)
    
}
//part2
// for (item of cities){
//     let li = document.createElement("li")
//     li.innerText=item.city

//     li.addEventListener('click', ()=>{
        
//         alert(li.innerText)
//     })
//     cityUL.appendChild(li)
    
// }

// let us style the odd numbers to green
let y = document.querySelectorAll("li:nth-child(odd)")
for (item of y){
    item.style.color ="green"
}

// Next let us add  a button to show and hide the list of cities
// const cityName = document.createElement("p")
// cityName.textContent = "city list"
//  following  will add the new element  to the end of the body
// we can edit the above the code

ShowCitiesButton.addEventListener("click",()=>{
    if(cityUL.style.display == 'none'){
        cityUL.style.display = 'list-item'
    ShowCitiesButton.innerText = "Hide list"

    }else {
    cityUL.style.display = 'none'
    ShowCitiesButton.innerText = "Show cities list"
    }
})

function getRandomCity() {
    randomNumber = Math.floor(Math.random() * cities.length)
    return cities[randomNumber]

}

actualCity.addEventListener('click',() =>{

    let city = getRandomCity()
    actualCity.textContent = city.city
    fullCityName[1].textContent =city.nickName
})


