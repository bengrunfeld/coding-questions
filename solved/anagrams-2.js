// ["dog", "god", "log", "cat", "tac"];

const words = {};

const sortIntoAnagrams = (arr) => {
  arr.forEach((item) => {
    const sortedWord = item
      .split("")
      .sort()
      .join("");

    if (!words[sortedWord]) {
      words[sortedWord] = [];
    }

    words[sortedWord].push(item);
  });

  const result = Object.keys(words).map((item) => words[item]);

  return result;
};

const tests = () => {
  let data = ["dog", "god", "log", "cat", "tac"];
  const expectedResult = [["dog", "god"], ["log"], ["cat", "tac"]];

  const result = sortIntoAnagrams(data);
  console.log(result);

  const arraysMatch = JSON.stringify(result) === JSON.stringify(expectedResult);

  if (arraysMatch) {
    console.log("Tests passed");
  } else {
    console.log("Tests failed");
  }
};

tests();
