// Find the minimum distance between letters in the first and second word.
// Questions: Case Sensitive? What to do if no input, wrong type?

const getChar = (x) => String.fromCharCode(x);

const findShortestDistance = (w1, w2) => {
  const w1Ascii = w1.split("").map((item) => item.charCodeAt(0));
  const w2Ascii = w2.split("").map((item) => item.charCodeAt(0));

  let tmp;
  let res;

  w1Ascii.forEach((i) => {
    w2Ascii.forEach((j) => {
      if (i > j) {
        const diff = i - j;

        if (!tmp || diff < tmp) {
          tmp = diff;
          res = [i, j];
        }
      }

      if (j > i) {
        const diff = j - i;

        if (!tmp || diff < tmp) {
          tmp = diff;
          res = [i, j];
        }
      }

      if (i === j) {
        tmp = 0;
        res = [i, j];
      }
    });
  });
  res = [getChar(res[0]), getChar(res[1])];
  return res;
};

const test = () => {
  const word1 = "omlnp";
  const word2 = "def";

  const result = findShortestDistance(word1, word2);
  console.log(result);

  if (result[0] === "l" && result[1] === "f") {
    console.log("Tests pass");
  } else {
    console.log("Tests fail");
  }
};

test();
