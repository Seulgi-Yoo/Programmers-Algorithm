function solution(my_string, letter) {
    let strArr = my_string.split('');
    return strArr.filter(str => str !== letter).join('');
}