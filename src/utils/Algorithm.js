export const bubbleSort_ascending = arr => {
  let noSwaps;
  for (let k = 0; k < arr.length; k++) {
    if (isNaN(arr[k])) {
      return ["형식에 맞는 값을 넣어주세요!"];
    }
  }

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] * 1 > arr[j + 1] * 1) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

export const bubbleSort_descending = arr => {
  let noSwaps;
  for (let k = 0; k < arr.length; k++) {
    if (isNaN(arr[k])) {
      return ["형식에 맞는 값을 넣어주세요!"];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j - 1] * 1 < arr[j] * 1) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
};
