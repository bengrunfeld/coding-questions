// 23 - find the length of minimum sub Array exceeding sum.

const minSubArray = (arr, n, x) => {
  // Initilize length of smallest subarray as n+1
  let minLength = n + 1;

  // Pick every element as starting point
  //for start in range(0, length):
  for (let i = 0; i < n; i++) {
    // Initialize sum starting with current start
    let currentSum = arr[i];

    // If first element itself is greater
    if (currentSum > x) return 1;

    // Try different ending points for curremt start
    for (let j = i + 1; j < n; j++) {
      // add last element to current sum
      currentSum += arr[j];

      // If sum becomes more than x and length of this subarray
      // is smaller than current smallest length, update the smallest
      // length (or result)
      if (currentSum > x && j - i + 1 < minLength) {
        minLength = j - i + 1;
      }
    }
  }

  return minLength;
};

const tests = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const arrLength = arr.length;
  const number = 9;
  const lengthOfSubArray = minSubArray(arr, arrLength, number);

  console.log(lengthOfSubArray);

  if (lengthOfSubArray < arrLength + 1) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
};

tests();
