function solution(sides) {
// 내림차순 정렬 (정적 배열이라 가능)
    // let sortArr = sides.sort((a, b) => b - a)
    // let sum = sortArr[1] + sortArr[2];
    // if (sortArr[0] < sum) return 1;
    // else return 2;
    
// Math.max(), reduce() 사용
    let max = Math.max(...sides);
    let sum = sides.reduce((a, c) => a + c) - max;
    return max < sum ? 1 : 2;
}