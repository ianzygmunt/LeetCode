function numCheck() {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("Ian Zygmunt");
    } else if (i % 3 === 0) {
      arr.push("Ian");
    } else if (i % 5 === 0) {
      arr.push("Zygmunt");
    } else {
      arr.push(i);
    }
  }
  return arr;
}
console.log(numCheck());
