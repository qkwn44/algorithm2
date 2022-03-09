//11. 대문자 찾기
//해당 문자열에 알파벳 대문자가 몇 개 인지 알아내는 문제

//toUpperCase()를 활용해 대문자가 나올 경우에 answer에 값 누적 시키기

function soultion(str) {
  let answer = 0;
  for (let x of str) {
    if (x === x.toUpperCase()) answer++;
    // console.log(x.toUpperCase(), x); //콘솔창을 통해 들어 가는 값 확인 가능
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(soultion(str));
