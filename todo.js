//querySelector() returns the first Element within the document 
//that matches the specified selector, or group of selectors. 
//If no matches are found, null is returned.

//getElementById() returns an Element 
//object representing the element whose id property 
//matches the specified string. 

const btnAdd = document.querySelector("#btnAdd")
const input = document.querySelector("#input")
const container = document.querySelector(".container")
const list = document.querySelector("#list")
const deleteBtn = document.getElementById("fa-trash");
let storageArr = []
console.log(deleteBtn)

// The addEventListener() method of the EventTarget interface 
//sets up a function that will be called whenever the specified 
//event is delivered to the target.

if (localStorage.length >= 1) {
  let getStorage = JSON.parse(localStorage.getItem("list"))
  getStorage.forEach((e) => {
   storageArr.push(e)
  })

  storageArr.forEach((e) => {
     //creating a new element "li"//
     let li = document.createElement("li")
     //console.log() : checking if button is clicked//
     console.log("clicked")
 
     //appendChild() : 
     //Append an item to a list:
     list.appendChild(li)
     // The textContent property sets or returns 
     //the text content of the specified node, and all its descendants.
     li.textContent = e
     
     //creating a new element "span" = trash-icon//
     let span = document.createElement("span")
     //The appendChild() method of the Node interface adds 
     //a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, appendChild() 
     //moves it from its current position to the new position. 
     li.appendChild(span)
     //Adds one or more tokens to the list
     span.classList.add("fa", "fa-trash")
     span.addEventListener("click", function() {
       console.log(e.textContent)
       console.log("Delete")
       //.remove() : removes the element from the DOM.
       li.remove()
  })
  })
}



btnAdd.addEventListener("click", function(){
  storageArr.push(input.value)
  localStorage.setItem("list", JSON.stringify(storageArr))
  addList()
})

//creating a function//
function addList(){

    //creating a new element "li"//
    let li = document.createElement("li")
    //console.log() : checking if button is clicked//
    console.log("clicked")

    //appendChild() : 
    //Append an item to a list:
    list.appendChild(li)
    // The textContent property sets or returns 
    //the text content of the specified node, and all its descendants.
    li.textContent = input.value
    
    //creating a new element "span" = trash-icon//
    let span = document.createElement("span")
    //The appendChild() method of the Node interface adds 
    //a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, appendChild() 
    //moves it from its current position to the new position. 
    li.appendChild(span)
    //Adds one or more tokens to the list
    span.classList.add("fa", "fa-trash")
    console.log(storageArr)
    span.addEventListener("click", function() { 
      console.log("Delete")
      //.remove() : removes the element from the DOM.
      li.remove()
  })

  li.addEventListener("click", function() {
    li.classList.add("strikethrough")
  })
}



//localStorage.setItem("name", "Siri");
//setItem(key, value) - to set a new key-value pair

//localStorage.getItem("name");
//getItem(key) - to get the value of a key

//localStorage.removeItem("name");
//removeItem(key) - to remove a key-value pair

//clear() - to clear all the key-value pairs
//localStorage.clear();


