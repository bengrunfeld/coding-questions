// Return a list of numbers that pass through the filters

const a = [5, 2, 1, 8, 9, 7, 15, 6];

const filters = [
  [5, 10],
  [7, 12],
  [0, 9],
];

const result = a.reduce((a, b) => {
  const filteredNum = filters.reduce((accum, filter) => {
    if (!accum) return accum;

    return b >= filter[0] && b <= filter[1];
  }, true);

  return filteredNum ? [...a, b] : a;
}, []);

console.log("---->>>>");
console.log(result);
