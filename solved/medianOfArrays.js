const findMedian = arr => {
  const isEven = arr.length % 2 === 0
  const middle = Math.floor(arr.length / 2)

  if (!isEven) {
    const middleIndex = middle + 1
    return arr[middleIndex]
  }

  if (isEven) {
    const avg = (arr[middle - 1] + arr[middle]) / 2
    return avg
  }
}

const findMedianOfArrs = (arr1, arr2) => {
  const joined = [...arr1, ...arr2]
  const sorted = joined.sort()

  return findMedian(sorted)
}

const tests = () => {
  const arr1 = [1, 3]
  const arr2 = [2, 4]

  const result = findMedianOfArrs(arr1, arr2)
  console.log(result)
}

tests()
