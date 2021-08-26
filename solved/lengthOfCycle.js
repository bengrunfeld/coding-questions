const countLengthOfCycle = (arr, startingIndex) => {
  let count = 0

  const checkCycle = (arr, index, startingIndex) => {
    count++ 

    if (count > arr.length) return -1

    if(arr[index] === startingIndex)
      return count

    return checkCycle(arr, arr[index], startingIndex)
  }

  return checkCycle(arr, startingIndex, startingIndex)
}

const tests = () => {
  let testsPassed = true;
  
  let testCases = [
    [[1, 0], 0, 2],
    [[1, 2, 0], 0,  3],
    [[2, 4, 1, 4, 0, 4], 1,  4],
    [[1, 2], 0, -1],
  ];
  
  testCases.forEach(testCase => {
    testsPassed &= 
      countLengthOfCycle(testCase[0], testCase[1]) === testCase[2];
  })

  return testsPassed;
}

if(tests()) {
  console.log("Test passes");
} else {
  console.log("Tests failed");
}
