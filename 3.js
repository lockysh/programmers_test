//최대공약수와 최소공배수

function solution(n, m) {
  const num = n > m ? n : m;

  for (i = 1; i <= num; i++) {
    if (n % i == 0 && m % i == 0) {
      max = i;
    }
  }
  min = (n * m) / max;

  return [max, min];
}

//이상한 문자 만들기

function solution(s) {
  let str = s.split(' ');

  return str
    .map((a) => {
      let result = '';
      for (i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
          result += a[i].toUpperCase();
        } else {
          result += a[i].toLowerCase();
        }
      }
      return result;
    })
    .join(' ');
}

/// 이중 split.map 사용한 풀이

function solution(s) {
  return s
    .split(' ')
    .map((i) =>
      i
        .split('')
        .map((a, b) => (b % 2 === 0 ? a.toUpperCase() : a))
        .join('')
    )
    .join(' ');
}

//정수 제곱근 판별

function solution(n) {
  let sqrt = Math.sqrt(n);

  return sqrt % 1 == 0 ? Math.pow(sqrt + 1, 2) : -1;
}

//콜라츠 추측

function solution(num) {
  let answer = 0;

  for (i = 0; i < 500; i++) {
    if (num !== 1) {
      num = num % 2 == 0 ? num / 2 : num * 3 + 1;
    } else {
      return (answer = i);
    }
  }

  return (answer = -1);
}

/// while문 사용한 풀이

function solution(num) {
  let answer = 0;
  while (num !== 1 && answer <= 500) {
    num = num % 2 == 0 ? num / 2 : num * 3 + 1;
    answer++;
  }
  return num == 1 ? answer : -1;
}
