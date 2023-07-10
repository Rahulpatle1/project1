const tinderuser = new Object()
// tinderuser = {}



tinderuser.id = "12223rt"
tinderuser.email = "rahul215@gmail.com"
tinderuser.address = "balaghat"
tinderuser.password = 23545

// console.log(tinderuser);

const NewUser = {
    newuserDeatial:{
        email:"rahul215@gmail.com",
        username:{
            firstname:"Rahul",
            lastname:"patle"
        }

    }
}

// console.log(NewUser);
// console.log(NewUser.newuserDeatial);
// console.log(NewUser.newuserDeatial.username);
// console.log(NewUser.newuserDeatial.username.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = Object.assign({},obj1,obj2)

console.log(obj3);

const obj4 = {...obj1,...obj2}

console.log(obj4);

const users = [
    {
        id:"rahul244",
        gmail:"rahul215@gmail.com"

    },
    {

    },
    {

    },
    {

    }
]

// console.log(users[0].gmail)

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

const course = {
    coursename:"pysicsWallah",
    price:3500,
    duration:"6-8 months"


}

const{coursename:newcourse} = course
// console.log(coursename);
console.log(newcourse);

