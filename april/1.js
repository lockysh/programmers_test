// 1. 짝지어 제거하기
function solution(s) {
  let string = s.split('');
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i + 1]) {
      string.splice(i, 2);
      i = -1;
    }
  }
  return string.length > 0 ? 0 : 1;
}

///stack으로 접근한 풀이

function solution(s) {
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    if (answer[answer.length - 1] !== s[i]) answer.push(s[i]);
    else answer.pop();
  }

  return answer.length ? 0 : 1;
}

// 2. 가장 큰 수(정렬)

function solution(numbers) {
  let answer = numbers.sort(numFunc);

  // 0으로만 이뤄진 배열에 대한 예외처리
  return answer[0] == '0' ? '0' : answer.join('');
}
function numFunc(a, b) {
  const compare1 = (String(a) + String(b)) * 1;
  const compare2 = (String(b) + String(a)) * 1;
  return compare2 - compare1;
}

/// map 사용한 풀이

function solution(numbers) {
  let answer = numbers
    .map((v) => v + '')
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join('');

  return answer[0] === '0' ? '0' : answer;
}
