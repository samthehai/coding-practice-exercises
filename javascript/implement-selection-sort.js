function selectionSort(array) {
  var n = array.length;
  for (let i = 0; i < n; i++) {
    let smallestIndex = i;
    for (let j = i; j < n; j++) {
      if (array[j] < array[smallestIndex]) {
        smallestIndex = j;
      }
    }
    let tmp = array[i];
    array[i] = array[smallestIndex];
    array[smallestIndex] = tmp;
  }
  return array;
}


console.log(
  selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
);
