function solution(letter) {
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
    const morseArr = letter.split(' '); // letter를 공백 기준으로 잘라서 배열로 변환
    let result = '';
    for (let i = 0; i < morseArr.length; i++) {
        result += morse[morseArr[i]];; // 해독할 모스부호를 키 값으로 가지고 있는 요소 찾아서 value 더해주기
     }
    return result;
}