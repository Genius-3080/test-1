let arr = [1,2,3,4,5]
let testArr = []
for (let i = 0 ; i<arr.length; i++ ){
    testArr.push(arr.slice(0, i + 1).reduce((a,b)=> a+b))
}
console.log(testArr);