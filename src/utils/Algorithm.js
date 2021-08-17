export const sort_ascending = arr => {
  if (arr.length < 1) {
    return ["Please enter a number"];
  }
  for (let k = 0; k < arr.length; k++) {
    if (isNaN(arr[k])) {
      return ["Invalid NUMBER !!"];
    }
  }
  let minIndex, temp, i, j;
  for (i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] * 1 < arr[minIndex] * 1) {
        minIndex = j;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
};
export const sort_descending = arr => {
  if (arr.length < 1) {
    return ["Please enter a number"];
  }
  for (let k = 0; k < arr.length; k++) {
    if (isNaN(arr[k])) {
      return ["Invalid NUMBER !!"];
    }
  }
  let minIndex, temp, i, j;
  for (i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] * 1 > arr[minIndex] * 1) {
        minIndex = j;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
};
