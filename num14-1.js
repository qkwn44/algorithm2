function solution(s) {
  let max = "";
  for (let x of s) {
    if (x.length > max.length) max = x;
  }
  return max;
}
let str = ["5", "teacher", "time", "student", "react", "coffeeGood"];
console.log(solution(str));
