// 1. 짝지어 제거하기function solution(s) {
  let string = s.split('');
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i + 1]) {
      string.splice(i, 2);
      i = -1;
    }
  }
  return string.length > 0 ? 0 : 1;
}
// 효율성 문제로 통과X

///stack으로 접근한 풀이

function solution(s) {
    const answer = [];

      for(let i = 0 ; i < s.length ; i++ ){
        if( answer[answer.length-1] !== s[i] ) answer.push(s[i]);
          else answer.pop();
    }

  return answer.length ? 0 : 1;
}
