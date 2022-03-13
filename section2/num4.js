//4. 점수계산
//나의 풀이
function solution() {
  let answer = "";
  let num = [0, 1, 1, 1, 0, 0, 0, 1, 1, 0];

  // for (let i = 0; i < num.length; i++) {
  for (let x of num) {
    for (let j = 0; j < num.length; j++) {
      if (x === 1) {
        answer++;
      }
      break;
    }
  }
  return answer;
}

console.log(solution());
// 1을 입력 받는 경우 점수에 1점 +
// 연속 1이 나올 경우 1점씩 누적해 추가하여 점수를 구하는 문제
// 연속 1이 나올 시 점수 누적 시킬 변수 하나를 만들어 문제 풀기

// function solution(arr) {
//   let answer = 0,
//     cnt = 0;
//   for (let x of arr) {
//     if (x === 1) {
//       cnt++;
//       answer += cnt;
//     } else cnt = 0;
//   }
//   return answer;
// }
// let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
// console.log(solution(arr));
