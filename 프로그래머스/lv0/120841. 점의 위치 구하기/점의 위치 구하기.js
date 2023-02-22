function solution(dot) {
    let [n, m] = dot
    if (n > 0 && m > 0) {
        return 1;
    }     
    else if (n < 0 && m > 0) {
        return 2;
    }
    else if (n < 0 && m < 0) {
        return 3;
    }
    else if (n > 0 && m < 0) {
        return 4;
    }
}