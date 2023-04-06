function solution(n) {
    const answer = parseInt(String(n).split('').map(v => parseInt(v)).sort((a, b) => b - a).join(''));
    return answer;
}