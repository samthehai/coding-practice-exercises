function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    const arr1Object = Object.fromEntries(arr1.map(([value, key]) => [key, value]));
    var sum = arr2.reduce((result, item) => {
        var retVal = result;
        if (arr1Object[item[1]] === undefined) {
            retVal[item[1]] = item[0];
        } else {
            retVal[item[1]] = retVal[item[1]] + item[0];
        }
        return retVal;
    }, arr1Object);
    var unsortArr = Object.entries(sum).map(([value, key]) => [key, value]);
    return unsortArr.sort((a, b) => a[1].localeCompare(b[1]));
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
