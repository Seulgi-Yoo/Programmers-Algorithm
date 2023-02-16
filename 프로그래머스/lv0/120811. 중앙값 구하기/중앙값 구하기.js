function solution(arr) {
  const sortArr = arr.sort((a, b) => a - b)
  return sortArr[Math.floor(arr.length / 2)]
}