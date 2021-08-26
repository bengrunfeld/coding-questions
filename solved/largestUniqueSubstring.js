const lengthOfLongestSubstring = function(s) {
  if (s.length === 1) return 1

  const arr = s.split("");

  let longestString = "";
  let longestRun = 0;

  let currentString = "";
  let currentRun = 0;

  let used = {};

  arr.forEach((firstLetter, i) => {
    used[firstLetter] = true;
    currentString = firstLetter;

    let stop = false;

    arr.forEach((nextLetter, j) => {
      if (j <= i || stop) return;
      
      if (used[nextLetter] || nextLetter === firstLetter) {
        currentRun = 1;

        if (currentString.length > longestRun) {
          longestRun = currentString.length;
          longestString = currentString;
        }

        stop = true;
        return;
      }

      currentString = `${currentString}${nextLetter}`;
      used[nextLetter] = true;

      if (currentString.length > longestRun) {
        longestRun = currentString.length;
        longestString = currentString;
      }
    });

    currentString = "";
    used = {};
  });

  return [longestRun, longestString];
};

const tests = () => {
  const string = "aaabcbdeaf"
  const result = lengthOfLongestSubstring(string);
  
  console.log(result)

  if (result[0] === 6) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
};

tests();

/*
arr.forEach((item, i) => {
    if (!used[item]) {
      used[item] = true;
      currentString = `${currentString}${item}`;
      currentRun = currentString.split("").length;

      if (currentRun > longestRun) {
        longestString = currentString;
        longestRun = currentRun;
      }

      return;
    }

    // aab

    if (used[item]) {
      currentString = currentString.slice(1);

      if (!used[item]) {
        used[item] = true;
        currentString = `${currentString}${item}`;
        currentRun = currentString.split("").length;

        if (currentRun > longestRun) {
          longestString = currentString;
          longestRun = currentRun;
        }

        return;
      }
    }
  });
*/
