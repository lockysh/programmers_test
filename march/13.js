// 프로그래머스 LV2
// 1. 숫자의 표현

function solution(n) {
  let answer = 1;
  for (let i = 1; i <= n / 2; i++) {
    let sum = 0;
    let k = i;
    while (sum < n) sum += k++;
    if (sum == n) answer++;
  }
  return answer;
}

/// 약수의 개수로 구한 풀이

function expressions(num) {
  let answer = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1) answer++;
  }
  return answer;
}

/// 이중 for문 사용한 풀이

function expressions(num) {
  let answer = 0;
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num; j++) {
      sum += j;
      if (sum == num) {
        answer++;
        sum = 0;
        break;
      }
      if (sum > num) {
        sum = 0;
        break;
      }
    }
  }
  return answer;
}
