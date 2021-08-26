// Given Input,print the following input: “SSSSSTTPPQ”  Output: “5S2T2P1Q”.

const encode = (string) => {
  const arr = string.split("");

  let result = "";

  let currentChar = arr[0];
  let currentRun = 1;

  let lastChar = arr[0];

  if (arr.length === 1) return `1${arr[0]}`;

  arr.forEach((item, i) => {
    if (i === 0) return;

    if (item === lastChar) {
      currentRun++;
    }

    if (item !== lastChar) {
      result = `${result}${currentRun}${currentChar}`;
      currentChar = item;
      currentRun = 1;
      lastChar = item;
    }

    if (i === arr.length - 1) {
      result = `${result}${currentRun}${currentChar}`;
    }
  });

  return result;
};

const tests = () => {
  const result = encode("PPQQQQRRRSSSSS");
  console.log("=>", result);

  if (result === "2P") {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
};

tests();
