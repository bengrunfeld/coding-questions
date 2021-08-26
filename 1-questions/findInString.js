// String s can repeat infinitely. Find how many a's are in the string
// up until the index given. E.g. s = "ada", n = 1000.

const findCharInString = (s, n) => {
  const findNumA = (t) => t.reduce((a, b) => (b === "a" ? ++a : a), 0);
  const length = s.length;

  const numStringRepeats = Math.floor(n / length);
  const remainder = n % length;

  const stringArr = s.split("");

  if (remainder === 0) {
    return findNumA(stringArr) * numStringRepeats;
  }

  if (remainder > 0) {
    const res1 = findNumA(stringArr) * numStringRepeats;
    const res2 = findNumA(s.slice(0, remainder).split(""));

    return res1 + res2;
  }
};

const tests = () => {
  const s = "aab";
  const n = 9;

  const result = findCharInString(s, n);

  console.log(result);
};

tests();
