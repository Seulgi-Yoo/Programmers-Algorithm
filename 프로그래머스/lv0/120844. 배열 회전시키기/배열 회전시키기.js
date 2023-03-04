function solution(numbers, direction) {
    if (direction === 'left') {
        const first = numbers.shift(); // 앞에서 요소 빼오기
        numbers.push(first); // 뒤에 요소 넣기
    } else if (direction === 'right') {
        const last = numbers.pop(); // 뒤에서 요소 빼오기
        numbers.unshift(last); // 앞에 요소 넣기
    }
    return numbers;
}