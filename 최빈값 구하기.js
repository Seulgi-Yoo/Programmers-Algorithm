/* 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 
정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 
최빈값이 여러 개면 -1을 return 합니다.
*/

// 각 요소가 몇 개 담겨있는지 확인하기 쉽게 객체를 활용
// reduce()로 arr의 각 요소에 접근, 각 요소를 key 값으로 하는 객체를 반환
// sort()를 사용하여 위에서 반환된 객체의 값(value)가 큰 순으로 key를 내림차순 정렬
// 최빈값이 여러 개라면 -1 리턴(조건문으로 쳐내기)
function solution(arr) {   
  let obj = arr.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1
      return acc
  }, {})
  let sortedKeys = Object.keys(obj).sort((a, b) => obj[b] - obj[a])
  
  if (obj[sortedKeys[0]] === obj[sortedKeys[1]]) return -1
  else return Number(sortedKeys[0])
}