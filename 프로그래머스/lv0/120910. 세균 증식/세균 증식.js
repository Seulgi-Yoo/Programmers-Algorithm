function solution(n, t) {
    let cnt = 0;
    while (cnt < t) {
        n *= 2;
        cnt++;
    }
    return n;
}