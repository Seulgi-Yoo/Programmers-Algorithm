function solution(n) {
    let result = n - 1;
    for (let i = result; i > 0; i--) {
        if(n % i === 1) result = i;
    }
    return result;
}