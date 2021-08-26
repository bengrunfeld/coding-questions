const shiftLeft = (arr, shiftLeft) => {
  const findShiftedIndex = (a, i, n) => {
    // 1. If shiftLeft is less than the current index
    if (n <= i) {
      const offset = i - n;

      if (offset === -1) {
        a.length - 1;
      }

      return offset;
    }

    let num = n;

    // 2. Num is less than one cycle
    if (num <= a.length) {
      num -= i;

      return a.length - num;
    }

    // 3. Num is more than one cycle
    const remainder = num % a.length;

    if (remainder === 0) return i;

    if (i === 0) return a.length - remainder;

    if (i - remainder < 0) {
      const x = remainder - i;
      return a.length - x;
    }

    return i - remainder;
  };

  return arr.reduce((a, b, i) => {
    const shiftedIndex = findShiftedIndex(arr, i, shiftLeft);
    a[shiftedIndex] = b;
    return a;
  }, []);
};

const tests = () => {
  const arr = [1, 2, 3, 4, 5];
  const offset = 11;

  const result = shiftLeft(arr, offset)

  console.log(result);
};

tests();
