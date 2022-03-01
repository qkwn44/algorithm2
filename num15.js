//15 가운데 문자 출력
//소문자로 된 문자열에서 가운데 문자를 출력하는 프로그램을 작성하세요
//단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력.

function solution2(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 == 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);

  return answer;
}

let str2 = "faltWhite";
console.log(solution2(str2));

//나의 풀이
/*function solution(str) {
  let oddNum = "";
  let evenNum = "";

  if (str.length % 2 == 1) {
    //홀수 자리 구하기
    let a = parseInt(str.length / 2);
    let odd_Char = str.substr(a, 1);

    oddNum = odd_Char;
    return oddNum;
  } else {
    //짝수 자리 구하기
    let b = str.length / 2;
    let even_Char = str.substr(b - 1, 2);

    evenNum = even_Char;
    return evenNum;
  }
}
let str = "go0od";
let char = ["go0od", "faltWhite"];
console.log(solution(str)); */

//리팩토링
function solution3(str) {
  let answer;
  let odd = parseInt(str.length / 2);

  if (str.length % 2 == 1) answer = str.substr(odd, 1);
  else answer = str.substr(odd - 1, 2);
  return answer;
}
let str = "good";
console.log(solution3(str));
