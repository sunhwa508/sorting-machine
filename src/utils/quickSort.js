const selectPivot = (left, right, array, reverseFlag) => {
  let targetArray = [...array];
  const centerIndex = Math.floor((left + right) / 2);

  const change = (firstIndex, secondIndex, array, reverseFlag) => {
    const changedArray = [...array];
    if (
      (reverseFlag == 0 && targetArray[firstIndex] > targetArray[secondIndex]) ||
      (reverseFlag == 1 && targetArray[firstIndex] < targetArray[secondIndex]) ||
      reverseFlag === -1
    ) {
      const tmp = changedArray[firstIndex];
      changedArray[firstIndex] = changedArray[secondIndex];
      changedArray[secondIndex] = tmp;
    }
    return changedArray;
  };
  targetArray = change(left, centerIndex, targetArray, reverseFlag);
  targetArray = change(centerIndex, right, targetArray, reverseFlag);
  targetArray = change(left, centerIndex, targetArray, reverseFlag);

  targetArray = change(centerIndex, right - 1, targetArray, -1);

  return [targetArray[right - 1], targetArray];
};

const quickSort = (array, reverseFlag = 0) => {
  if (array.length <= 1) {
    return array;
  }

  let tmp;
  let targetArray = [...array];
  const range = [[0, array.length - 1]];

  while (range.length) {
    let [left, right] = range.pop();
    let [pl, pr] = [left, right];
    let pivot;
    [pivot, targetArray] = selectPivot(left, right, targetArray, reverseFlag);

    pl += 1;
    pr -= 2;
    while (pl <= pr) {
      while ((reverseFlag == 0 && targetArray[pl] < pivot) || (reverseFlag == 1 && targetArray[pl] > pivot)) {
        pl++;
      }
      while ((reverseFlag == 0 && targetArray[pr] > pivot) || (reverseFlag == 1 && targetArray[pr] < pivot)) {
        pr--;
      }
      if (pl <= pr) {
        tmp = targetArray[pl];
        targetArray[pl] = targetArray[pr];
        targetArray[pr] = tmp;
        pl++;
        pr--;
      }
    }
    if (left < pr) {
      range.push([left, pr]);
    }
    if (right > pl) {
      range.push([pl, right]);
    }
  }
  return targetArray;
};

export { quickSort };
