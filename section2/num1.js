//1. 큰 수 출력하기
// 앞 수보다 큰 수만 출력하는 프로그램 작성하기

//내가 푼 풀이
//문제 : 첫번째 원소를 배열에 넣지 않은 채 for문을 돌려서 7이 포함되지 않음
function solution(number) {
  let answer = [];
  for (let i = 0; i < number.length; i++) {
    if (number[i] > number[i - 1]) answer.push(number[i]);
  }
  return answer;
}
let number = [7, 3, 9, 5, 6, 12];

console.log(solution(number));

// function solution(arr) {
//   let answer = [];
//   answer.push(arr[0]);
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1]) answer.push(arr[i]);
//   }

//   return answer;
// }

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
