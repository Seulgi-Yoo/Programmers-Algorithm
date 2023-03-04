function solution(num_list, n) {
    // var answer = [[]];
    // return answer;
    let result = [];
    // 시작점 n씩 증가하면서 n개 요소를 slice해 result에 push 해주기
    for (let i = 0; i < num_list.length; i += n) {
        result.push(num_list.slice(i, i + n));
    }
    return result;
}