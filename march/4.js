// 3진법 뒤집기

function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

///[...] 사용한 풀이

function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
}

// 예산

function solution(d, budget) {
  const list = d.sort((a, b) => a - b);
  let help = 0;
  let answer = 0;

  for (i = 0; i < d.length; i++) {
    help += list[i];
    answer++;
    if (help > budget) {
      answer--;
    }
  }
  return answer;
}

/// reduce 사용한 풀이

function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}
