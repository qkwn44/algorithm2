//14 가장 긴 문자열
// 주어진 문자열 중 가장 긴 문자열을 출력하세요.
function solution(s) {
  let answer = "";
  for (let x of s) {
    //초기에 빈 배열 answer의 길이 값과 첫 ele 요소의 길이를 비교한다
    if (x.length > answer.length) answer = x;
  }
  return answer;
}
let str = ["5", "teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));

// 가장 큰 수로 초기 세팅
function solution2(s) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
let str2 = ["5", "teacher", "time", "student", "beautiful", "good"];
console.log(solution2(str2));
