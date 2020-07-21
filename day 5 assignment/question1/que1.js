console.log("filterrr function")
var inputArray = [];
var size = 5;
for(var i = 0; i<size; i++)
{
    inputArray[i] = prompt('enter element'+(i+1));
}


console.log(inputArray);

let odd = inputArray.filter(x=>x%2!==0)


let cubes = inputArray.filter(x=>x%2!==0).map(x=>x**3)
console.log(odd)
console.log(cubes)