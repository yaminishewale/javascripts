console.log("print marks and grade using switch")

var marks = prompt("enter a marks:");
console.log(marks);


switch(marks)
{
    case marks>80:
        console.log(`the marks are ${marks} and grade is A`)
    case marks>50:
        console.log(`the marks are ${marks} and grade is B`)   
    default:
        console.log(`the marks are ${marks} and grade is A`)      
}