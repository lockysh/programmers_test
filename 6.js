// 1. 문자열 내 마음대로 정렬하기

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (b[n] > a[n]) return -1;
    else {
      return a > b ? 1 : -1;
    }
  });
}

/// localCompare 사용한 풀이

function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}

/// map&substring 사용한 풀이

function solution(strings, n) {
  return strings
    .map((a) => [...a][n] + a)
    .sort()
    .map((a) => a.substring(1));
}

// 2. 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
  let list = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % divisor == 0) list.push(arr[i]);
  }
  return list.length ? list.sort((a, b) => a - b) : [-1];
}

/// filter 사용한 풀이

function solution(arr, divisor) {
  let answer = arr.filter((v) => v % divisor == 0);
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

// 3. 같은 숫자는 싫어

function solution(arr) {
  let list = [];
  for (i = 0; i < arr.length; i++) {
    arr[i] == arr[i + 1] ? null : list.push(arr[i]);
  }
  return list;
}

/// filter 사용한 풀이

function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
