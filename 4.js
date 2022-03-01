//1. 수박수박수박수박수
function solution(n) {
  let answer = '';
  for (i = 1; i <= n; i++) {
    if (i % 2 == 0) answer += '박';
    else answer += '수';
  }

  return answer;
}

///substring 이용한 풀이

function solution(n) {
  return '수박'.repeat(n).substring(0, n);
}

//2. 문자열 정수로 바꾸기

function solution(s) {
  return Number(s);
}

//3. 시저 암호

function solution(s, n) {
  let answer = '';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      answer += ' ';
      continue;
    }

    let lowerOrUpper = lower.includes(s[i]) ? lower : Upper;
    let idx = lowerOrUpper.indexOf(s[i]) + n;
    if (idx >= lowerOrUpper.length) idx -= lowerOrUpper.length;
    answer += lowerOrUpper[idx];
  }
  return answer;
}

//4. 약수의 합

function solution(n) {
  let answer = 0;
  for (i = 1; i <= n; i++) {
    if (n % i == 0) answer += i;
  }
  return answer;
}

//5. 소수 찾기

function solution(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }
  for (let i = 2; i <= n; i++) {
    if (arr[i] === 0) continue;
    for (let j = i * 2; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  return arr.filter((v) => v !== 0).length;
}

//6. 문자열 내림차순으로 배치하기

function solution(s) {
  return s.split('').sort().reverse().join('');
}

//7. 문자열 내 p와 y의 개수

function solution(s) {
  const arr = s.split('');
  const findP = arr.filter((a) => a == 'p' || a == 'P').length;
  const findY = arr.filter((a) => a == 'y' || a == 'Y').length;

  return findP == findY ? true : false;
}

///match 사용한 풀이

function numPY(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}

//8. 문자열 다루기 기본

function solution(s) {
  if (s.length == 4 || s.length == 6) {
    return s.split('').every((a) => !isNaN(a));
  }
  return false;
}

///정규식 공부하기..
