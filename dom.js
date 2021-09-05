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
document.body.style.backgroundColor ="salmon"
const cityBox =document.querySelector("#city-box")
cityBox.style.border ="solid 3px black"
cityBox.style.paddingLeft ="20px"
cityBox.style.fontSize = "40px"
cityBox.style.fontFamily = "Garamond"

// const cityName =document.createElement("p")
// cityName.textContent ="city list"
// document.body.querySelector(".container").appendChild(cityName)

const showListButton =document.createElement("button")
showListButton.textContent ="Hide List"
document.body.querySelector(".container").appendChild(showListButton)

let xy = document.querySelectorAll("li:nth-child(odd)")
for(item of xy){
    item.style.color = "green"
}
let fullCityName =document.getElementsByTagName("p")

for(item of fullCityName){
    item.style.color = "blue"

}
let actualCity=document.querySelector(".city")
actualCity.style.fontSize = "50px"

const cityNameList =document.createElement("ul")
document.body.querySelector(".container").appendChild(cityNameList)

for(item of cities){
    let li =document.createElement("li")
    li.innerText=item.city
    cityNameList.appendChild(li)
}
let y = document.querySelectorAll("li:nth-child(odd)")
for(item of y){
    item.style.color = "green"
}let z = document.querySelectorAll("li:nth-child(even)")
for(item of z){
    item.style.color = "magenta"
}

showListButton.addEventListener("click",()=>{

    if(cityNameList.style.display =='none'){
        cityNameList.style.display ='list-item'
        showListButton.innerText ="Hide List"
    }else{
        cityNameList.style.display = 'none'
        showListButton.innerText ="Show List"
    }
   
})

function getRandomCity(){
    randomNumber = Math.floor(Math.random() * cities.length)
    return cities[randomNumber]
}

actualCity.addEventListener('click',() =>{
    let city = getRandomCity()
   actualCity.textContent=city.city
    fullCityName[1].textContent =city.nickName
})

// for (item of cities){
//     let li =document.createElement("li")
//     li.innerText =item.city
//     li.addEventListener('click',()=>{
//         alert(li.innerText)
//     })
//     cityNameList.appendChild(li)
// }
