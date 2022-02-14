function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        //splice 때문에 뒷 순서들이 -1씩 당겨지게 됨
        //-> 지우고자하는 j가
        //arr.splice(i, 1);
        //arr.splice(j, 1);
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
