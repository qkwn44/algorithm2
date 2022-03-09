//한개의 문자열 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은
//문자열에 몇개가 존재하는지 알아내는 프로그램을 작성하세요.

function solution(s, t) {
  //let answer = 0;
  //   for (let x of s) {
  //     if (x === t) answer++;
  //   }
  //let str = "";
  //return answer;

  // 2. 내장함수 사용
  //str문자열을 인자t마다 잘라준다.(R자리마다 자름)
  //잘라준 덩어리는 t 개수보다 +1 이므로 answer는 -1 빼서 length값 출력
  let answer = s.split(t).length;
  return answer - 1;
}
let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
