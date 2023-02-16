function solution(arr) {   
    let obj = arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc
    }, {})
    let sortedKeys = Object.keys(obj).sort((a, b) => obj[b] - obj[a])
    
    if (obj[sortedKeys[0]] === obj[sortedKeys[1]]) return -1
    else return Number(sortedKeys[0])
}