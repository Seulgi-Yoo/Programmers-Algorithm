function solution(my_string) {
    const arr = my_string
        .split('')
        .map(num => Number(num))
        .filter(num => !Number.isNaN(num))
        .reduce((a, c) => a + c, 0)
    return arr
}