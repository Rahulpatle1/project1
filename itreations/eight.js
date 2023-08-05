const myNum = [ 1, 2, 3, 4, 5 ]

// const newNum = myNum.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}` );
//     return acc + currval;
// },0)

const newNum = myNum.reduce( (acc,currval) => (acc + currval),0)

console.log(newNum);