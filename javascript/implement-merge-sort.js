
function merge(firstArray, secondArray) {
  let firstIndex = 0, secondIndex = 0;
  let retArray = [];
  while(firstIndex < firstArray.length
    && secondIndex < secondArray.length) {
      if (firstArray[firstIndex] <= secondArray[secondIndex]) {
        retArray.push(firstArray[firstIndex++]);
      } else {
        retArray.push(secondArray[secondIndex++]);
      }
  }
  if (firstIndex < firstArray.length) {
    retArray.push(...firstArray.slice(firstIndex,));
  }
  if (secondIndex < secondArray.length) {
    retArray.push(...secondArray.slice(secondIndex,));
  }
  return retArray;
}

function mergeSort(array) {
  if (array.length < 2) return array;
  let mid = Math.floor((0 + array.length) / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid,);
  return merge(mergeSort(left), mergeSort(right));
}

mergeSort([1, 4, 2, 8, 345, 123]);
