function sym(args) {
  return Array.prototype.slice.call(arguments).reduce((result, arrayItem) => {
    var nonDuplicateItemArray = arrayItem.filter(
      (item, index) => arrayItem.indexOf(item) === index
    );
    return [
      ...result.filter((item) => nonDuplicateItemArray.indexOf(item) === -1),
      ...nonDuplicateItemArray.filter((item) => result.indexOf(item) === -1),
    ];
  }, []).sort((a, b) => a - b);
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
