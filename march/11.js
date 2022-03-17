// 1. 실패율

function solution(N, stages) {
  let fail = [];
  for (let i = 1; i <= N; i++) {
    fail.push([
      i,
      stages.filter((a) => a == i).length / stages.filter((a) => a >= i).length,
    ]);
  }
  return fail.sort((a, b) => b[1] - a[1]).map((a) => a[0]);
}

// 2. 다트 게임

function solution(dartResult) {
  let answer = [];
  let score = 0;
  for (let i = 0; i < dartResult.length; i++) {
    if (Number(dartResult[i]) || dartResult[i] == '0') {
      if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
        score = 10;
        i++;
      } else score = dartResult[i];
    } else if (dartResult[i] === 'S') answer.push(Math.pow(score, 1));
    else if (dartResult[i] === 'D') answer.push(Math.pow(score, 2));
    else if (dartResult[i] === 'T') answer.push(Math.pow(score, 3));
    else if (dartResult[i] === '*') {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    } else if (dartResult[i] === '#') answer[answer.length - 1] *= -1;
  }
  return answer.reduce((acc, cur) => acc + cur, 0);
}

/// 정규식 사용한 풀이

function solution(dartResult) {
  let answer = [];
  let tmp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i].match(/[0-9]/)) {
      if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
        tmp = 10;
        i++;
      } else tmp = dartResult[i];
    } else if (dartResult[i] === 'S') answer.push(Math.pow(tmp, 1));
    else if (dartResult[i] === 'D') answer.push(Math.pow(tmp, 2));
    else if (dartResult[i] === 'T') answer.push(Math.pow(tmp, 3));
    else if (dartResult[i] === '*') {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    } else if (dartResult[i] === '#') answer[answer.length - 1] *= -1;
  }

  return answer.reduce((acc, v) => acc + v);
}
