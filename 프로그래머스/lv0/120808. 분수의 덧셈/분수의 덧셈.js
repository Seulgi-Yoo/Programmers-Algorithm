function solution(numer1, denom1, numer2, denom2) {
    // 분수의 합: a/b + c/d = (a*d)+(b*c)/b*d
    // 기약 분수: 최대공약수로 분자와 분모를 각각 나누어주기
    const 분자 = (numer1 * denom2) + (numer2 * denom1)
    const 분모 = denom1 * denom2
    // 최대공약수 구하기
    const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));
    const 최대공약수 = getGCD(분자, 분모);
    return [분자/최대공약수, 분모/최대공약수];
}