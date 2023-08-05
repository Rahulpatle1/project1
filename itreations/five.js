const coding = ["java","python","cpp","ruby"]

// for (const key in coding) {
//    console.log(key);
// }

// coding.forEach( (item) =>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName:"javascript",
        languageFile:"js"
    },
    {
        languageName:"C++",
        languageFile:"cpp"
    },
    {
        languageName:"java",
        languageFile:"java",
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})