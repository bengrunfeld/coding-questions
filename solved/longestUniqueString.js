// given a string of characters, find the longest uniform substring
// aabbbbccdd

const findLongestString = string => {
  const arr = string.split("")

  let longestIndex = 0
  let longestString = arr[0]
  let longestRun = 1
  
  let thisString = arr[0]
  let thisRun = 1

  let lastChar = arr[0]

  arr.forEach((item, i) => {
    if (i === 0) return

    if (item === lastChar) {
      thisRun++
      lastChar = item
      thisString = thisString + item

      if (thisRun > longestRun) {
        longestString = thisString
        longestRun = thisRun
        longestIndex = i
      }
    }

    if (item !== lastChar) {
      if (thisRun > longestRun) {
        longestIndex = i
      }

      thisRun = 1
      lastChar = item
      thisString = item
    }
  })

  // return longestString

  return [longestIndex - longestRun + 1, longestRun]
}

const test = () => {
  const result = findLongestString("aabbbbcccccdd")

  console.log("Result:", result)

  if (result[0] === 6 && result[1] === 5) {
    console.log("Tests pass")
  } else {
    console.log("Tests fail")
  }
}

test()