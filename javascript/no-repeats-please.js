const swapArrayElements = (a, x, y) => x != y && a[x] && a[y] && [
  ...a.slice(0, x),
  a[y],
  ...a.slice(x+1, y),
  a[x],
  ...a.slice(y+1),
] || a;

function permute(str, start, end, result) {
  if (start == end && checkNonRepeatConsecutive(str)) {
    result.push(str.join(''));
  } else {
    for (let i = start; i <= end; i++) {
      let swapArray = swapArrayElements(str, start, i);
      permute(swapArray, start+1, end, result);
      swapArray = swapArrayElements(str, start, i);
    }
  }
}

function checkNonRepeatConsecutive(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == str[i + 1]) {
      return false;
    }
  }
  return true;
}

function permAlone(str) {
  var result = [];
  var strArray = str.split('');
  permute(strArray, 0, strArray.length - 1, result);
  return result.length;
}

console.log(permAlone('aab'));
