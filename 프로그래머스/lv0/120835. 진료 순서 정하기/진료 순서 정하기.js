function solution(emergency) {
    // 응급도 높은 순(숫자 큰 순)으로 정렬
    // 각 요소의 인덱스 + 1을 해당 요소의 값으로 대체
    const sortedEmergency = emergency.slice().sort((a, b) => b - a);
    return emergency.map((x) => sortedEmergency.indexOf(x) + 1);
}