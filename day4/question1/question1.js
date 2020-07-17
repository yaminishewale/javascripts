console.log(" even or odd ")

var value = prompt("enter a number:");
console.log(value);

let iseven = function(value)
{
    if(value%2 == 0)
      console.log(`the number entered is  ${value} and number is even`)
    else
      console.log(`the number entered is ${value} and number is odd`)
}

let result = iseven(value);
console.log(result);
