// Move an array element n places to the left.

const findShiftedIndex = (a, i, n) => {
  if (n < i) return i - n;

  let num = n;

  // 1. Remove offset
  num -= i;

  // 2. Num is less than one cycle
  if (num < a.length) return a.length - num;

  return a.length - (num % a.length) - 1;
};

const tests = () => {
  const arr = [1, 2, 3, 4, 5];
  const index = 3
  const shiftLeft = 3;  

  const result = findShiftedIndex(arr, index, shiftLeft);
  console.log("=>", result)

  if (result === 1) {
    console.log("Pass")
  } else {
    console.log("Fail")
  }
}


tests()