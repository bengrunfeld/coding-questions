// 5,6,1,2,3,4
// 1,6,4,2,3,5    
// 1,6,6,2,3,5

const data = [1,6,6,2,3,5]
const result = Object.assign([], data)

let swapped = true;

const bubbleSort = arr => {
  swapped = false;

  let end = arr.length - 1;

  for (let i = 0, j = 1; i < end; i++, j++) {
    if (arr[i] > arr[j]) {
      swapped = true;
      let tmp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = tmp
    }
  }
}

while (swapped) {
  bubbleSort(result)
}

console.log(data)
console.log(result)