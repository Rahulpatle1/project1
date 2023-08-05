// for (let i = 1; i <= 20; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(i*2);
// }

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(`table of ${i}`);
//     for (let j = 1; j <= 10 ; j++) {
//         const element = j;
//         console.log(i + `*` + j + `=` + i*j);
        
//     }
    
// }

let myArray = ["batman","superman","saktiman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

let months = ["january" ,"fabruary" , "march" ,"April","May", "june ","july", "AUG","sep","oct",
"nov","dec"]

for (let i = 0; i < months.length; i++) {
    const element = months[i];
    console.log(`month no.${i+1} and month is ${element}`);
    
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}
