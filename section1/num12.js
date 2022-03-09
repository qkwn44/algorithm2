// 12 대문자로 통일
// 해당 문자열을 모두 대문자로 변경하는 문제

function solution(str) {
  let answer = "";
  for (let x of str) {
    if (x === x.toLowerCase()) answer += x.toUpperCase();
  }
  return answer;
}
let str = "itisTimeToStudy";
console.log(solution(str));
