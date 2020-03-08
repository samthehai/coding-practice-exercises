function bubbleSort(array) {
  var n = array.length;
  for (let j = 0; j < n; j++) {
    for (let i = n-1; i > j; i--) {
      if (array[i] < array[i-1]) {
        var tmp = array[i];
        array[i] = array[i-1];
        array[i-1] = tmp;
      }
    }
  }
  return array;
}

console.log(
  bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
);
