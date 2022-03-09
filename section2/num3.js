//3. 가위바위보
//이기면 a 지면 b 비기면 d

//경우를 따질 땐 기준을 정해서 풀면 된다.
//조건문으로 a가 이기는 상황을 만들고 그 외 상황은 b가 answer에 들어가도록 작성
function solution(A, B) {
  let answer = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) answer.push("D");
    else if (A[i] === 1 && B[i] === 3) answer.push("A");
    else if (A[i] === 2 && B[i] === 1) answer.push("A");
    else if (A[i] === 3 && B[i] === 2) answer.push("A");
    else answer.push("B");
  }
  return answer;
}
//논리연산자 && 사용해서 양쪽 모두 참이어야 true가 반환된다. 하나라도 거짓일 경우 else if / else 로 넘어간다
let A = [2, 3, 3, 1, 3];
let B = [1, 1, 2, 2, 3];
console.log(solution(A, B));
