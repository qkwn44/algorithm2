//4. 점수계산
//나의 풀이
// function solution() {
//   let answer = "";
//   let num = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

//   console.log(num[1]);
//   for (let i = 0; i < num.length; i++) {
//     for (let j = 0; j < num.length; j++) {
//       if (num[j] === 1) {
//         answer++;
//       }
//       break;
//     }
//   }
//   return answer;
// }

// console.log(solution());
function solution(arr) {
  let answer = 0,
    cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  return answer;
}
let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
