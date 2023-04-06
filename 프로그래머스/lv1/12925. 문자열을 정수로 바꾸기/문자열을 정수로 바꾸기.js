function solution(s) {
    let sign = 1; 
    if (s[0] === '-') {
        sign = -1;
        s = s.slice(1);
    } else if (s[0] === '+') {
        s = s.slice(1);
    }
    return sign * parseInt(s)   
}