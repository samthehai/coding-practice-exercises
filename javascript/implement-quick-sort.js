function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function quickSort(array) {
  var n = array.length;
  if (n < 2) return array;
  let pivot = getRandom(0, array.length);
  let lower = [];
  let greater = [];
  for (let i = 0; i < n; i++) {
    if (i === pivot) continue;
    if (array[i] <= array[pivot]) {
      lower.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [
    ...quickSort(lower),
    array[pivot],
    ...quickSort(greater),
  ]
}

// test array:
console.log(
  quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
);
