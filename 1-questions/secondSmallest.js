// 5,6,1,2,3,4
// 1,6,4,2,3,5    
// 1,6,6,2,3,5

const data = [1,6,6,2,3,5]
const dataCopy = Object.assign([], data)

const sortedData = dataCopy.sort((a, b) => a - b)

console.log(data)
console.log(sortedData[1])