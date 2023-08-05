const myArray = [1,2,3,4,5]

for (const num of myArray) {
    // console.log(num);
}

const str = "rahul"

for (const name of str) {
    // console.log(name);
}

// maps

const map = new Map()
map.set('IN','India')
map.set('USA', 'United State of America')
map.set('Fr' ,'France')

for (const [key,value] of map) {
    console.log(key ,":-",value);
}

const newObj = {
    'game1':'PupG',
    'game2':'spiderman'
}

// for (const [key,value] of newObj) {
//     console.log(key,':-',value);
// }
