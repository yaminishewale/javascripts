console.log("fetch api")
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json()).then(data=>console.log(data))

fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body: JSON.stringify({
        userId:111,
        title:"nyggg",
        body:'lorem ipsum',

    })
}).then(response=>response.json()).then(data=>console.log(data))



