// const promiseOne = new Promise(function(resolve,reject) {
    
//     setTimeout(() => {
//         console.log('async is completed')
//         resolve()
//     },1000)

// })

// promiseOne.then( () => {
//     console.log('promise consumed')
// })

// new Promise(function (resolve,reject) {
    
//     setTimeout( () =>{
//         console.log('Async two resolved');
//         resolve()
//     })
// }).then(function(){
//     console.log('promise2 consumed')
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout( () => {
//         resolve({username:'Rahulpatle1', password:1234})
//     })
// })

// promiseThree.then( (user) => {
//     console.log(user);
// })
const promiseFour = new Promise( (resolve,reject) => {
    setTimeout( () => {
        let error = false;
        if (!error) {
           resolve({username:'Rahulpatle1',password:1234}) 
        }else{
            reject('ERROR:Somthing went wrong !')
        }
    })
})

promiseFour.then( (user) => {
    console.log(user)
    return user.username
}).then( (username) => {
    console.log(username)
}).catch( (error) => {
    console.log(error)
}).finally( () => {
    console.log('The promise has worked')
})

// const promiseFive = new Promise( (resolve,reject) => {
//     setTimeout( () => {
//         let error = true;
//         if (!error) {
//            resolve({username:'javascript',password:1234}) 
//         }else{
//             reject('ERROR:js went wrong !')
//         }
//     })
// })

// async function consumepromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }



