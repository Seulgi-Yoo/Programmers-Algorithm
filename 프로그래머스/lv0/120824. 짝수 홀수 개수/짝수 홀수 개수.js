function solution(arr) {
  let 짝수 = arr.filter(num => num % 2 === 0).length
  let 홀수 = arr.filter(num => num % 2 === 1).length
  return [짝수, 홀수]
}