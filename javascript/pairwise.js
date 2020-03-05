
function getFirstNotcheckElement(arr, checkArr, element, current) {
  for(let i = current + 1; i < arr.length; i++) {
    if (arr[i] === element && checkArr[i] === false && checkArr[current] === false)
      return i;
  }
  return -1;
}
function pairwiseRecursive(arr, arg, current, checkArr) {
  if (arr.length < 2 || current >= arr.length - 1) return 0;
  var pairVal = arg - arr[current];
  var index = getFirstNotcheckElement(arr, checkArr, pairVal, current);
  if (index >= 0 && index > current) {
    var newCheckArr = checkArr;
    newCheckArr[current] = true;
    newCheckArr[index] = true;
    return index + current + pairwiseRecursive(arr, arg, current+1, newCheckArr);
  }
  return pairwiseRecursive(arr, arg, current+1, checkArr);
}

function pairwise(arr, arg) {
  var checkArr = Array(arr.length).fill(false);
  return pairwiseRecursive(arr, arg, 0, checkArr);
}

console.log(pairwise([1, 1, 1], 2));