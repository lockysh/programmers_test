// 행렬의 덧셈

function solution(arr1, arr2) {
  answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
  }
  return answer;
}

/// map 사용한 풀이
function sumMatrix(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}

// 제일 작은 수 제거하기

function solution(arr) {
  let minNumber = Math.min(...arr);
  let answer = arr.filter((num) => num > minNumber);

  return answer.length ? answer : [-1];
}

/// splice,indexOf 사용한 풀이

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length ? arr : [-1];
}

//자릿수 더하기

function solution(n) {
  let num = (n + '').split('');
  let answer = 0;

  for (let i = 0; i < num.length; i++) {
    answer += parseInt(num[i]);
  }
  return answer;
}

/// reduce 사용한 풀이

function solution(n) {
  let num = (n + '').split('');
  let answer = num.reduce((a, b) => a + parseInt(b), 0);

  return answer;
}

//자연수 뒤집어 배열로 만들기

function solution(n) {
  let answer = (n + '')
    .split('')
    .reverse()
    .map((a) => parseInt(a));
  return answer;
}

//정수 내림차순으로 배치하기

function solution(n) {
  let answer = parseInt(
    (n + '')
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );

  return answer;
}

/// parseInt 안해주고 +answer이나 * 1로 숫자 변형 가능
