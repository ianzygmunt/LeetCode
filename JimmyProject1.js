function numCheck(testArray) {
  let arr = [];
  for (let i = testArray.length - 1; i >= 0; i--) {
    if (testArray[i] % 3 === 0 && testArray[i] % 5 === 0) {
      arr.push("Ian Zygmunt");
    } else if (testArray[i] % 3 === 0) {
      arr.push("Ian");
    } else if (testArray[i] % 5 === 0) {
      arr.push("Zygmunt");
    } else {
      arr.push(testArray[i]);
    }
  }
  return arr;
}
let x = [1, 2, 5, 7, 12, 15, 19];
console.log(numCheck(x));
