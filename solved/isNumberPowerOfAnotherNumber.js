const isPower = (x, y) => {
  // The only power of 1 is 1 itself
  if (x == 1) return y == 1;

  // Repeatedly compute power of x
  let pow = 1;

  while (pow < y) {
    pow = pow * x;
  }

  // Check if power of x becomes y
  return pow === y;
};

const tests = () => {
  const res = isPower(10, 100);

  console.log(res);
};

tests();
