// //Callbacks

// const processAsync = (param1, param2, callback) => {
//     //do something

//     console.log("init processAsync")

//     if(callback) callback(false, "done!")

//     console.log("finish processAsync")
// }

// processAsync("hello", "world", (error, response) => {
//     console.log("processAsync callback", error, response)
// })


// const func = (callback) => {
//     console.log("func executed")
//     callback()
// }

// const button = document.createElement("button");
// button.innerText = "Action";
// button.addEventListener("click", () => {
//     console.log("init action")

//     func(() =>{
//         console.log("func callback: start")
        
//         for (let index = 0; index < 2000000000; index++){

//         }

//         console.log("func callback: end")
//     })
// })

// document.body.appendChild(button);

// Promises => puede tener 3 estado .fullfill .pending .failed


// promise
//     .then((result) => {
//         console.log("promise result", result)
//     })
//     .catch(error =>{
//         console.log("promise error", error)
//     }) 
//     .finally(()=> {
//         console.log("promise finally")
//     })

// console.log("finish file")



// const promiseA = new Promise((resolve, reject) =>{
//     console.log("in promise A")
//     setTimeout(() => resolve("ok A!"), 1500)
// });

// const promiseB = new Promise((resolve, reject) =>{
//     console.log("in promise B")
//     setTimeout(() => resolve("ok B!"), 1000)
// });


// const funcAsync = async () => {
// try{    
//     const resp = await promiseB
//     console.log("funcAsync", resp)
// } catch (error) {
//     console.log("funcAync error", error)
// }

// const funcAsync2 = async () =>{
//     await funcAsync();
// }


// funcAsync();

// Promise.any([
//     promiseA, promiseB, Promise.reject("autoresolve")])
//     .then(resp => console.log(resp))
//     .catch(error => console.log("erro",error))

// Promise.race([
//     promiseA, promiseB
// ])
//     .then(resp => console.log(resp))
//     .catch(error => console.log("erro",error))

// Promise.allSettled(
//     [ promiseA, promiseB ]
// )
// .then(([ respPromiseA, respPromiseB ])=> console.log ("allSettled",resp))

// Promise.all([
//     promiseA,
//     promiseB
// ])
// .then(([respA, respB]) =>{
//     console.log("then",resp)
// })
// .catch(error => console.log(error))

// const headers = new Headers();
// headers.append ("Content-Type", "application/json")


// const request = new Request(
//     "https://jsonplaceholder.typicode.com/posts",
//     {
//         method: "POST",
//         headers,
//         body: JSON.stringify({
//             userdId: 1,
//             title: "asdasd",
//             body: "asdasdasd"
//         })
//     }
// )

// fetch(request)
//     .then(Response => Response.json())
//     .then(data => console.log (data))


//PUT

// fetch("https://jsonplaceholder.typicode.com/posts/1",
//     {
//         method: "PUT",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             userdId: 1,
//             title: "asdasd",
//             body: "asdasdasd"
//     })
// )

// fetch("https://jsonplaceholder.typicode.com/posts/1",
//     {
//         method: "DELETE"
//     }
// )

// class Padre {
//     nombre = "";
//     edad = 21;

//     constructor(edad,nombre){

//     }

//     metod = () => {

//     }
// }

// class Persona extends Padre {
//     constructor(){
//         super(44,"Leo")
//     }
// } 

// const persona 

const controller = new AbortController();
const abortSignal = controller.signal;

const button = document.createElement("button");
button.innerText = "cancel";

button.addEventListener("click", () => {
    controller.abort();
})

document.body.appendChild(button);

fetch("https://mdn.github.io/dom-examples/abort-api/sintel.mp4", {signal: abortSignal})
    .then(response => response.blob())
    .then(myBlob => {
        const video = document.createElement("video");
        video.setAttribute("controls", "");
        video.src = URL.createObjectURL(myBlob)
        document.body.appendChild(video)
    })
    .catch(error => console.log("GET video error", error))