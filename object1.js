const mySym = Symbol("key1")

const myProfile = {
    name: "rahul",
    lastloggedIn: ["sunday","monday"],
    age: 19,
    [mySym]: "key1",
    location: "vidisha",
    "yourAccount":567890

}
// console.log(myProfile.name);

// console.log(myProfile["age"])
// console.log(myProfile.yourAccount);
// console.log(myProfile[mySym]);
// console.log(typeof mySym);
myProfile.location = 20//changes the value

console.log(myProfile.location)
Object.freeze(myProfile.location)
myProfile.location = 23

myProfile.greetings = function(){
    console.log("Hello Jsuser")
}
myProfile.greetings()   
myProfile.greetings = function(){
    console.log(`Hello Jsuser,${this.name}`)
}  
myProfile.greetings() 

console.log(myProfile.greetings);
console.log(myProfile.greetings());
        