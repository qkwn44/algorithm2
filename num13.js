//13 대소문자 변환
//대문자는 소문자로, 소문자는 대문자로 변환 시키기

function solution2(str2) {
  let answer2 = "";
  for (let x of str2) {
    if (x === x.toLowerCase()) {
      answer2 += x.toUpperCase();
    } else {
      if (x === x.toUpperCase()) {
        answer2 += x.toLowerCase();
      }
    }
  }
  return answer2;
}
let str2 = "alGoRithM";
console.log(solution2(str2));
