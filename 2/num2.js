//나의 풀이
function solution() {
  let student = [130, 135, 148, 145, 150, 153];

  let answer = "1";
  let max = student[0];
  for (let i = 0; i < student.length; i++) {
    if (max < student[i + 1]) {
      answer++;
      max = student[i + 1];
    }
  }
  return answer;
}
console.log(solution());
