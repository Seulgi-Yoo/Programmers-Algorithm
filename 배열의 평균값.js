// 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// 모든 요소의 합 / 요소의 갯수를 반환
function solution(numbers) {
  const answer = numbers.reduce((acc,cur) => acc + cur) / numbers.length;
  return answer;
}