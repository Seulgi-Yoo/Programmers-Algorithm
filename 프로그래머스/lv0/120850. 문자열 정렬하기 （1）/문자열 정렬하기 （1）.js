function solution(my_string) {
    const num = my_string.split('').map(v => Number(v)).filter(v => !Number.isNaN(v)).sort((a, b) => a - b);
    
    return num;
}