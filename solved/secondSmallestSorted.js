// 5,6,1,2,3,4

const findSecondSmallestSorted = (arr, offset) => {
  const shift = (offset < arr.length) ? offset : offset % arr.length
  
  return arr[shift + 1]
}


const tests = () => {
  const data = [6,7,8,1,2,3,4,5]
  const result = findSecondSmallestSorted(data, 3)

  console.log(result)

  if (result === 2) {
    console.log("Pass")
  } else {
    console.log("Fail")
  }
}

tests()