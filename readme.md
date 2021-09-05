# DOM - Document Object Model

- It represents the  document (HTMl) as a tree
- The parts/nodes  can be manipulated- they can be removed new nodes can be added to the Document
- referring the dom.html:
            - document is the root node which is ```<html>``` it is  known as the document element.
            - nodes in the dom tree are identified by a node type.
- to get the type of the node ```node.nodeType``` is used

## Node relationships

- In the exmaple, ```<body>``` is the child node of ```<html>``` and it is the parent node of ```<body>```

- ```<body>``` is the sibling of the ```<head>```
- Head to the browser console and show how  the  paragraph can be modified
  
  ``` Javascript
  let x = document.querySelector('p')
  x.innerHTML = " I would like to change this paragraph"
  x.style.color = " orange"
  x.style.border = " solid 2 px brown"
  x.style.backgroundColor = " salmon"
  ```

- Now refresh the page and show how the page reloads the HTML we  have originally defined.

- add few more p classes in the dom.html

  ```HTML
    <p class = "paraClass"> DOM manipulation .</p>
    <p class = "paraClass"> DOM manipulation</p>
    <p class = "paraClass"> DOM manipulation</p>
    <p class = "paraClass"> DOM manipulation</p>
    ```

    in the browser console:

    ```Javascript
    let y = document.querySelectorAll('.paraClass')
    ```

    show y, y[0],y[1]

```javascript
for (item of y){item.style.color = "red"}
```

- New elements can be created using the createElement
  
```javascript
let s = document.createElement("h1")
s.textContent = " this H1 is created through the console"
```

- can we see this on the page ?
  
  ```javascript
  document.body.appendChild(s)
  ```

- Now in the sript.js file add the following code
  
```javascript
document.body.style.backgroundColor = "salmon"
const cityBox = document.querySelector("#city-box") 
cityBox.style.border = "solid 2px black"
// with string interpolation ` solid 2px ${colors[6]}`
```

- how to create a new element using javascript and it has to be out side the box we have now
  
- Here we are creating a new element
  
```javascript
const cityName = document.createElement("p")
```

- assigning a value
  
```javascript
cityName.textContent = "city list"
```

- appending the new element, it gets added to the end of the body
  
```javascript
document.body.appendChild(cityName)
```

- If you want the element is to be added to the end of the container we can use the query selector

```javascript
document.body.querySelector(".container").appendChild(cityName)
```

```javascript
let fullCityName = document.getElementsByTagName("p")
for (item of fullCityName){
    item.style.color ="blue"
}
```

The above code  will make **all the paragraph tags** blue, now if you want to  edit  a specific paragraph tag

```javascript
let fullCityName = cityBox.getElementsByTagName("p")
for (item of fullCityName){
    item.style.color ="blue"
}
```

how to **change the size of the quote alone, not the source
**

```javascript
fullCityName[0].style.fontSize = "50px"
```
```javascript
let actualCity = document.querySelector(".city")
actualCity.style.fontSize = "50px"
```

- Next let us create an unordered list and add list items to the Ul
  
  ```javascript
  const cityNameList = document.createElement("ul")
   document.body.querySelector(".container").appendChild(cityNameList)

  for (item of cities){
    let li = document.createElement("li")
    li.innerText=item.city
    cityNameList.appendChild(li)
  }
  ```

  // following code changes the odd numbers text to green

```javascript
   let y = document.querySelectorAll("li:nth-child(odd)")
   for (item of y){
    item.style.color ="green"
  }

```

**Event Handling**

- Let us modify the create Element from paragraph to a button
  
  ```javascript
         const ShowCitiesButton = document.createElement("button")
        ShowCitiesButton.textContent = "city list"
        document.body.querySelector(".container").appendChild(ShowCitiesButton)
    ```

- Next let us add and eventlistener to toggle the ShowListButton(show/hide) when a click event happens
- step 1- it will display hide list button with no action.

```javascript
    ShowListButton.addEventListener("click",()=>{
    cityNameList.style.display == 'none'
    ShowListButton.innerText = "Hide list"
```

- step 2
- following code will toggle the button as per the event

```javascript
    ShowCitiesButton.addEventListener("click",()=>{
    if(cityNameList.style.display == 'none'){
        cityNameList.style.display = 'list-item'
        ShowCitiesButton.innerText = "Hide list"

    }else {
    cityNameList.style.display = 'none'
    ShowCitiesButton.innerText = "Show cities list"
    }
})
```

- In the beginning we have element called actualCity which we styled , we are actually seeing only city name and its nick, how can we  get  a different city name each time we click on the element.

```javascript
// this function below generates  a random number and cities array will use that number
function getRandomCity() {
    randomNumber = Math.floor(Math.random() * cities.length)
    return cities[randomNumber]

}
// here  that random  number is associted to the event listener 
actualCity.addEventListener('click',() =>{

    let city = getRandomCity()
    actualCity.textContent = city.city
    fullCityName[1].textContent =city.nickName
})
```

- if we would like to add  a event listener on the li, we can create an event listener on li as follows:
  
  ```javascript
  for (item of cities){
   let li = document.createElement("li")
    li.innerText=item.city
    li.addEventListener('click', ()=>{
    alert(li.innerText)
     })
    cityUL.appendChild(li)

}
```
