function solution(x, n) {
    const result = [];
    let i = x;
    while(n > 0) {
        result.push(i);
        i += x;
        n--;
    }
    
    return result;
}