function myArray(number1,number2){
    console.log(number1 + number2)
}

myArray(2,4)

function newArray(num1,num2){
    let result = num1 + num2
    return result
}

console.log(newArray());

function loginMessage(username) {
    if(username === undefined){
        console.log("please enter your email");
        return
    }
    return `${username} just logged in`
}

console.log(loginMessage());

const user = {
    username:"rahul",
    id:"34ty",
    gmail:"rahul214@gmail.com",
    price:399

}

function mynewObject(aObject){
     return (`my name is ${aObject.username} and price is ${aObject.price}`)
}

console.log(mynewObject(user));

// mynewObject({
//     username:"rahul",
//     userId:"rahul@123"

// })


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(4));
console.log(calculateCartPrice(200,400,600,800));

const myNewArry = [200,300,500,600]

function sampleArray(putArray){
    return putArray[1]
}

console.log(sampleArray(myNewArry));