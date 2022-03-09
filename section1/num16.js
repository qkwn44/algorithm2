//16 중복문자제거
//주어진 문자열에서 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요

// function solution(s) {
//   let answer;
//   for (let i = 0; i < s.length; i++) {
//     console.log(s[i], i, s.indexOf(s[i]));
//     if (s.indexOf(s[i]) === i) answer += s[i];
//   }
//   return answer;
//}

//나의 풀이
// function solution(s) {
//   let answer = "";
//   console.log(s.indexOf("e"));
//   for (let x of s) {
//     if (answer.indexOf(x) == -1) answer += x;
//   }
//   return answer;
// }

//특정 문자열 갯수 찾기
function solution2(s) {
  let count = "";
  for (let x of s) {
    if (x.indexOf("k") !== -1) count += x;
  }
  return count.length;
}

function solution3(str) {
  //   let str = "erwodjoo0";
  let put = "";
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i], i, str.indexOf(str[i]));

    if (str.indexOf(str[i]) === "o") put += str[i];
  }
  return put.length;
}
console.log(solution3("erwodjoo0"));

console.log(solution2("kewekkert"));

// const str = "ksekkset";
// console.log(solution("ksekkset"));
