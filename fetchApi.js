//-->Fetch Api is used to retrieve data from a server or update data on a server.
/*
let p = fetch('https://goweather.herokuapp.com/weather/Ny')

p.then((value1) => {
    console.log(value1.status)
    console.log(value1.ok)
    return value1.json()
}).then((value2) => {  //-->Getting the data from the server is a 2-stage process.Thats why we have 2 then() methods. 
    console.log(value2)
})
*/
//Sending Post Request-->


/*
let data = {
        method:"Post",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ //JSON.stringify()--> method converts a JavaScript object or value to a JSON string
                               //JSON.parse()--> method converts a JSON string to a JavaScript object
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
        }      
        fetch('https://jsonplaceholder.typicode.com/posts', data)
        .then((response) => response.json())
        .then((json) => console.log(json));
*/

// By using Async and Await-->
/*
const createTodo = async (todo) => {
    let data = {
            method: "POST",
            headers: {
                    "Content-type": "application/json"
            },
            body: JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', data)
    let response = await p.json()
    return response
}

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

const mainFunc = async () => {
    let todo = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
    let todor = await createTodo(todo)
    console.log(todor)
    console.log(await getTodo(101))
} 

mainFunc()

*/
