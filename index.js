// document.getElementById("count-el").innerText = 5 

let countEl = document.getElementById("count-el")

console.log(countEl) 

let count = 0  

function increment () { 
    count = count + 1 
    countEl.innerText = count
    console.log(count) 
}

function save () {  
    console.log(count) 
    
     
}

let message =" You have three new notifications"

console.log(message) 

let nAme = "Michael" 
let greeting = " Hi my name is " 

let myGreeting = greeting + " , " + nAme 

console.log(myGreeting) 