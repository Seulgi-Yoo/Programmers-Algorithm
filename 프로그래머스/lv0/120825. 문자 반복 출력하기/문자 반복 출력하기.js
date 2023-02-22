function solution(str, n) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i].repeat(n)
    }
    return result;
}