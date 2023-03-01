function solution(rsp) {
    // 가위는 2 바위는 0 보는 5
    let answer = '';
    for (let i = 0; i < rsp.length; i++) {
        switch (rsp[i]) {
            case '2':
                answer += '0';
                break;
            case '0':
                answer += '5';
                break;
            case '5':
                answer += '2';
                break;
        }
    }
    return answer;
}