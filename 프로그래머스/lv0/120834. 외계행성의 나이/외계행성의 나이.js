function solution(age) {
    const ageA = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let result = ''
    let arr = String(age).split('')
    for (let i = 0; i < arr.length; i++) {
        result = result + ageA[Number(arr[i])]
    }
    return result;
}