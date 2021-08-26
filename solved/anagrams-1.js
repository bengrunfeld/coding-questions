const alreadyUsed = {}
// ["dog", "god", "log", "cat", "tac"];

const sortIntoAnagrams = (arr) => {
  let result = [];

  arr.forEach((first, i) => {
    if (alreadyUsed[first]) return;

    const firstSorted = first.split("").sort().join();

    let row = [first]

    arr.forEach((second, j) => {
      if (i === j) return;
      
      const secondSorted = second.split("").sort().join();

      if (firstSorted === secondSorted) {
        row.push(second)
        alreadyUsed[second] = true
      } 
    });

    result.push(row)
  });

  return result;
};

const tests = () => {
  let data = ["dog", "god", "log", "cat", "tac"];
  const expectedResult = [["dog", "god"], ["log"], ["cat", "tac"]];

  const result = sortIntoAnagrams(data);
  console.log(result)

  const arraysMatch = JSON.stringify(result) === JSON.stringify(expectedResult);

  if (arraysMatch) {
    console.log("Tests passed");
  } else {
    console.log("Tests failed");
  }
};

tests();
