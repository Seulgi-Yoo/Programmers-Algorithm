function solution(my_string) {
    // 문자열을 배열로 나누기 str.split()
    let answer = my_string.split('')
    // 배열 뒤집기 arr.reverse()
    answer = answer.reverse()
    // 배열을 문자열로 합치기 arr.join()
    answer = answer.join('')
    return answer;
}