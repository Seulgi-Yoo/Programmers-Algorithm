function solution(numbers) {
    const answer = numbers.reduce((acc,n) => acc + n) / numbers.length;
    return answer;
}