let arr = [1,[2,[3,[4]]]];

// function flat(arr){
//     return arr.toString().split(",").map(item=>parseInt(item))
// }
// let result = flat(arr).map(item=>[item])

let result = arr.flat(Infinity).map(item=>[item])
console.log(result)