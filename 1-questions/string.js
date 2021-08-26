const a = "Hello";

const sortedBase = a
  .toLowerCase()
  .split("")
  .sort()
  .join();

const arr = ["Hel", "Helloo", "Olleh"];

const result = arr.map((item) => {
  const sortedVal = item
    .toLowerCase()
    .split("")
    .sort()
    .join();

  return sortedBase === sortedVal;
});

console.log(result);
