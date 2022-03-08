// 1. 모의고사

function solution(answers) {
  const pattern = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let result = [0, 0, 0];
  let answer = [];

  for (i = 0; i < pattern.length; i++) {
    for (j = 0; j < answers.length; j++) {
      if (pattern[i][j % pattern[i].length] === answers[j]) result[i]++;
    }
  }
  for (n = 0; n < pattern.length; n++) {
    if (result[n] === Math.max(...result)) answer.push(n + 1);
  }
  return answer;
}

/// filter 사용한 풀이

function solution(answers) {
  let answer = [];
  let a1 = [1, 2, 3, 4, 5];
  let a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  let a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  let a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  let max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}

// 2. 음양 더하기

function solution(absolutes, signs) {
  let sum = 0;
  for (i = 0; i < signs.length; i++) {
    signs[i] ? (sum += absolutes[i]) : (sum -= absolutes[i]);
  }
  return sum;
}

/// reduce 사용한 풀이

function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}

// 3. 내적

function solution(a, b) {
  let answer = 0;
  for (i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

/// reduce 사용한 풀이

function solution(a, b) {
  return a.reduce((acc, a, i) => (acc += a * b[i]), 0);
}

// 4. 없는 숫자 더하기

function solution(numbers) {
  let sum = 0;
  for (i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) sum += i;
  }
  return sum;
}

/// reduce 사용한 풀이

function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

// 5. 완주하지 못한 선수

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

/// pop 사용한 코드

const solution = (p, c) => {
  p.sort();
  c.sort();
  while (p.length) {
    let pp = p.pop();
    if (pp !== c.pop()) return pp;
  }
};
