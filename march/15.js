// 1. 124 나라의 숫자

function solution(n) {
  let answer = '';
  const pattern = [4, 1, 2];
  while (n) {
    answer = pattern[n % 3] + answer;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }
  return answer;
}

// 2. 올바른 괄호

function solution(s) {
  s = s.split('');
  if (s[0] == ')' || s[s.length - 1] == '(') {
    return false;
  } else {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      s[i] == '(' ? count++ : count--;
      if (count < 0) return false;
    }
    return count == 0 ? true : false;
  }
}

/// 더 간결한 풀이

function solution(s) {
  let cum = 0;
  for (let paren of s) {
    cum += paren === '(' ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}

// 3. 피보나치 수

function solution(n) {
  let temp = [0, 1];
  for (let i = 2; i <= n; i++) {
    let num = (temp[i - 2] + temp[i - 1]) % 1234567;
    temp.push(num);
  }
  return temp[n];
}

/// 정수 범위를 초과하는 것을 방지해줘야 한당.
