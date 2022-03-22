// 1. JadenCase 문자열 만들기

function solution(s) {
  return s
    .split(' ')
    .map((a) => a.charAt(0).toUpperCase() + a.substring(1).toLowerCase())
    .join(' ');
}
// 참고자료 : https://thisthat.dev/string-char-at-vs-string-bracket-notation/
// a[0]은 빈 문자열을 만나면 undefined를,a.charAt(0)은 빈 문자열을 만나면 빈 문자열을 반환한다.

// 2. N개의 최소공배수

function solution(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}

// 3. 행렬의 곱셈

function solution(a, b) {
  let answer = [];

  for (let i = 0; i < a.length; i++) {
    answer.push([]);
    for (let j = 0; j < b[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < b.length; k++) {
        sum += a[i][k] * b[k][j];
      }
      answer[i].push(sum);
    }
  }
  return answer;
}

/// map&reduce 사용한 풀이

function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0))
  );
}

// 4. 최소값 만들기

function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}

/// reduce 사용한 풀이

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}

// 5. 다음 큰 숫자

function solution(n) {
  const one = n
    .toString(2)
    .split('')
    .filter((a) => a == 1).length;
  while (true) {
    n++;
    if (
      n
        .toString(2)
        .split('')
        .filter((a) => a == 1).length == one
    )
      return n;
  }
}

///match 사용한 풀이

function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}

// 6. 최대값과 최소값

function solution(s) {
  const answer = [Math.min(...s.split(' ')), Math.max(...s.split(' '))];
  return answer.join(' ');
}

/// 문자열에서 max 사용 가능

function solution(s) {
  const arr = s.split(' ');
  return Math.min(...arr) + ' ' + Math.max(...arr);
}
