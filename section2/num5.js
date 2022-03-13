// //5. 등수구하기

// function solution(arr) {
//   let n = arr.length;
//   //1차원 배열 초기화
//   let answer = Array.from({ length: n }, () => 1);
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[j] > arr[i]) answer[i]++;
//     }
//   }
//   return answer;
// }
// let arr = [92, 92, 92, 100, 76];
// console.log(solution(arr));

const solution = (arr) => {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; i < arr.length; j++) {
      if (arr[i] < arr[j]) count++;
    }
    answer.push(count + 1);
  }
  return answer;
};
const arr = [87, 89, 92, 92, 76];
console.log(solution(arr));
