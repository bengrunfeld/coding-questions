// Write a function that checks if a number is an Armstrong Number
// i.e. a three digit number that the sum of each digit cubed
// is equal to the number itself

// 371

const isArmstrongNumber = (number) => {
  const stringNum = number.toString();
  const digits = stringNum.split("");

  const sumCubedDigits = digits.reduce((a, b) => a + Math.pow(b, 3), 0);

  return sumCubedDigits === number;
};

const tests = () => {
  if (isArmstrongNumber(371)) {
    console.log("Tests passed");
  } else {
    console.log("Tests failed");
  }
};

tests();
