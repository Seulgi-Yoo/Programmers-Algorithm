function solution(s){
    let answer = true;
    
    const regexP = /[p]/gi;
    const regexY = /[y]/gi;
    
    const pCount = (s.match(regexP) || []).length;
    const yCount = (s.match(regexY) || []).length;
    
    if (pCount !== yCount) answer = false;
    return answer;
}