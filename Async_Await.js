/*
async function myfun() {

  //async keyword is make sure that the function returns a promise

  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Delhi Weather is 27 Deg")
    }, 5000);
  })
  let bangaloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Bangalore Weather is 30 Deg");
    }, 8000);
  })

//   delhiWeather.then(alert)
//   bangaloreWeather.then(alert)
//   delhiWeather.then((value)=>{
//     console.log(value)
//   })
//   bangaloreWeather.then((value)=>{
//     console.log(value)
//   })

    console.log("Fetching Delhi Weather Data please wait...")
    let delhiW = await delhiWeather  //await- until the promise is fullfilled, the next line will not be executed
    console.log("Fetched Delhi Weather:"+delhiW)
    console.log("Fetching Bangalore Weather Data please wait...")
    let bengW = await bangaloreWeather //await- until the promise is fullfilled, the next line will not be executed
    console.log("Fetched Bangalore Weather:"+bengW)
    return[delhiW,bengW]

}

const cherry = () =>{  //this function will not wait for compelete execution of myfun() 
    console.log("I am cherry and I am not waiting for the weather data")
}

console.log("Welcome to weather control room")
let b = myfun()
cherry()
b.then((value)=>{
    console.log(value)
})

//If we want to wait for the complete execution of myfun() then we want to execute cherry() then we can use async and await-->
// const main1 = async()=>{
//     console.log("Welcome to weather control room")
//     let b = await myfun()
//     cherry()
// }
// main1()

//Note: By using async and await we can stop the execution of the code.

*/
