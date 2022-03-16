let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
console.log(countEl);

let count = 0; 
console.log(count);

function increment() {
    count +=1;
    countEl.textContent = count
}
 
// Create a function, save(), which logs out the count when it's called
const save = () => {
    console.log(count);
     let previousEntDash = count + " - ";
     console.log(previousEntDash); 
    saveEl.textContent += " " + previousEntDash;
//  set the counter back to zero when save button is clicked
    count = 0;
    countEl.textContent = count;
}
