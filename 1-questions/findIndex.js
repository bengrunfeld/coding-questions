const findIndex = (arr, places, startIndex) => {
  if (startIndex + places < arr.length - 1) return startIndex + places;

  return (startIndex + places) % arr.length;
};

const arr = [1, 2, 3, 4];
const startIndex = 1;
const placesFromStartIndex = 7;

const index = findIndex(arr, placesFromStartIndex, startIndex);

console.log(`=> Index: ${index}`);
