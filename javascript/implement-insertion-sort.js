function insertionSort(array) {
  var n = array.length;
  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j-1]) {
        var tmp = array[j];
        array[j] = array[j-1];
        array[j-1] = tmp;
      }
    }
  }
  return array;
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
