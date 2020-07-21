//Pig latin algorithm that takes words and puts the first letter followed by ay at the end

let myArgs = process.argv.slice(2); 
let latinString ="";

for (let arg of myArgs) {
    latinString += arg.substring(1) + arg.charAt(0) + "ay ";  
}
console.log(latinString);