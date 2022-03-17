let array = ["jayesh","sunil", "dhairya"]

// for(let i=0;i<array.length;i++){
//     console.log(array[i])
// }

// es6
let newArray = array?.map((item,index)=>{
    array[index]=item+15
    return item+44
})
console.log(array,newArray)