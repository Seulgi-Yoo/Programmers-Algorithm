function solution(numbers, k) {
    // i + 2 <= numbers.length 이면 인덱스 더해주면됨
    // i + 2 > numbers.length 이면 다시 앞으로 가서 더해줘야 함
    let current = 0; // 현재 공 가지고 있는 인덱스
    // k를 1씩 감소시키면서 1이 될때까지 while문 실행(마지막에 던진 사람을 리턴해야 하니)
    while (k > 1) {
    // 현재 공을 받은 사람에서 오른쪽으로 한 명 건너뛴 후, 그 다음 사람에게 공을 던지기
        current = (current + 2) % numbers.length;
        k--;
    }
      return numbers[current];  // k번째 공을 던지는 사람의 번호 리턴
}