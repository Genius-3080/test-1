let arr = [1,2,3,4,5]
let testArr = []
for (let i = 0 ; i<arr.length; i++ ){
    testArr.push(arr.slice(0, i + 1).reduce((a,b)=> a+b))
}
console.log(testArr);

let arr2 = [2,10,5,8,12]
let testArr2 = []
for (let i = 0 ; i<arr2.length; i++ ){
    testArr2.push(arr2.slice(0, i + 1).reduce((a,b)=> a+b))
}
console.log(testArr2);

let arr3 = [9,14,3,2,1]
let testArr3 = []


for(let i = 0; i<arr3.length; i++){
    let result = 0

    for(let k = 0; k<=i; k++){
        result = result+arr3[k]}
    testArr3.push(result)
}
console.log(testArr3);




