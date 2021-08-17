const selectPivot = (left, right, array, flag) => {
  let targetArray = [...array];
  const centerIndex = Math.floor((left + right) / 2);

  const change = (firstIndex, secondIndex, array, flag) => {
    const changedArray = [...array];
    if (
      (flag == 0 && targetArray[firstIndex] > targetArray[secondIndex]) ||
      (flag == 1 && targetArray[firstIndex] < targetArray[secondIndex]) ||
      flag === -1
    ) {
      const tmp = changedArray[firstIndex];
      changedArray[firstIndex] = changedArray[secondIndex];
      changedArray[secondIndex] = tmp;
    }
    return changedArray;
  };
  targetArray = change(left, centerIndex, targetArray, flag);
  targetArray = change(centerIndex, right, targetArray, flag);
  targetArray = change(left, centerIndex, targetArray, flag);

  targetArray = change(centerIndex, right - 1, targetArray, -1);

  return [targetArray[right - 1], targetArray];
};

const quickSort = (array, flag = 0) => {
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
    [pivot, targetArray] = selectPivot(left, right, targetArray, flag);

    pl += 1;
    pr -= 2;
    while (pl <= pr) {
      while ((flag == 0 && targetArray[pl] < pivot) || (flag == 1 && targetArray[pl] > pivot)) {
        pl++;
      }
      while ((flag == 0 && targetArray[pr] > pivot) || (flag == 1 && targetArray[pr] < pivot)) {
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
