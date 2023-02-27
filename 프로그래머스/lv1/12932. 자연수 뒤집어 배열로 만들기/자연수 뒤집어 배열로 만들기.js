function solution(n) {
    let arr = n.toString().split('');
    let result = [];
    for (let num of arr) {
        result.unshift(Number(num))
    }
    return result;
}