console.log("destructuring the objects")


const student = {
    name : "yamini",
    age : 20,
    projects:{
        dicegame :"Two players dice game using javascript"
    }
}

console.log(student.name);
console.log(student.projects.dicegame)

const {name , age} = student
console.log(name, age)