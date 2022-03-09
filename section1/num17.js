//17 중복단어제거

//나의 풀이 1
// function solution() {
//   let str = ["good", "time", "good", "apple", "time"];
//   let answer = [...new Set(str)];

//   return answer;
// }

//나의 풀이 2
// function solution() {
//   let answer = [];
//   let str = ["good", "time", "good", "apple", "time"];

//   for (let x of str) {
//     if (answer.indexOf(x) == -1) answer.push(x);
//   }
//   return answer;
// }

//나의 풀이3
//filter 함수 : 조건에 맞는 요소만을 반환받는 당식
//
const arrDup = ["이태원", "망원", "한강", "이태원", "망원", "을지로"];
const arrUnique = arrDup.filter((val, idx) => {
  return arrDup.indexOf(val) === idx;
  //값이 처음 나오는 배열 인덱스와 현재 인덱스가 같으면 포함
});
// console.log(arrUnique);
// console.log(arrDup.indexOf("이태원"));
//이태원과 망원은 값이 처음 나오늘 인덱스가 0,1 로만 찍힘 뒤에 중복되는 원소는 idx가 찍히지 않음

// console.log(str[1]);

function arr(s) {
  let answer;
  //인자로 넘어간 콜백함수가 참을 리턴한 배열의 요소만 담으면 된다.
  //특정 조건에 부합하는 요소들만 반환해서 새 배열을 만든다.
  answer = s.filter((v, i) => {
    // if (s.indexOf(v) === i) return true;
    //참을 리턴한 요소만 answer에 담아라

    //리팩토링
    return s.indexOf(v) === i;
  });

  return answer;
}
const string = ["이태원", "망원", "한강", "이태원", "망원", "을지로"];
// console.log(string.indexOf("망원"));
console.log(arr(string));
