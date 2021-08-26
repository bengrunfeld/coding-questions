const dataArr = [8, 1, 2, 9, 7, 5, 3, 4, 5]
// const dataArr = ["f", "d", "c", "j", "a", "c", "b"];

const sort = data => {
  const dataCopy = Object.assign([], data)

  let swapped = true;

  const bubbleSort = arr => {
    swapped = false;

    let end = arr.length - 1;

    for (let i = 0, j = 1; i < end; i++, j++) {
      if (arr[i] > arr[j]) {
        swapped = true;
        let tmp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = tmp
      }
    }
  }

  while (swapped) {
    bubbleSort(dataCopy)
  }

  return dataCopy
}

const res = sort(dataArr)

console.log(res)