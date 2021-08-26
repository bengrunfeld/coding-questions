// Find the nth number in a fibonnaci sequence

const findNumInFibSequence = num => {
  const findNext = (count, lastTwo, result) => {
    if (count === num) return result;

    if (count === 0) {
      return findNext(1, [0, 1], 1)
    }

    result = lastTwo[0] + lastTwo[1]
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = result

    return findNext(++count, lastTwo, result)
  }

  return findNext(0, [0, 1], 0)
}

const tests = () => {
  const result = findNumInFibSequence(8);
  console.log(result)

  if (result === 21) {
    console.log("Test pass");
  } else {
    console.log("Tests fail");
  }
};

tests();
