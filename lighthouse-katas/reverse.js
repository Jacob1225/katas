//Command line arguments 
let myArgs = process.argv.slice(2);

for (let arg of myArgs) {
    let reversedString = "";
    for (let i = arg.length -1; i >= 0; i--) {
        reversedString += arg[i]; 
    }
     console.log(reversedString);
}
