function solution(numbers) {
    const sortedArr = numbers.sort((a, b) => b - a);
    let max = sortedArr[sortedArr.length-1] * sortedArr[sortedArr.length-2];
    if (sortedArr[0] * sortedArr[1] > max) {max = sortedArr[0] * sortedArr[1]};
    return max;
}