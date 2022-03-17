// 1. 비밀지도

function solution(n, arr1, arr2) {
  let temp = [];
  arr1 = arr1.map((a) => a.toString(2).padStart(n, '0'));
  arr2 = arr2.map((a) => a.toString(2).padStart(n, '0'));
  for (let i = 0; i < n; i++) {
    temp.push(arr1[i] / 1 + arr2[i] / 1);
  }
  return temp.join(' ').replace(/[1,2]/g, '#').replace(/0/g, ' ');
}
// split(' )사용 시 공백처리 실패

/// |(비트연산자) 사용한 풀이

function solution(n, arr1, arr2) {
  return arr1.map((a, i) =>
    (a | arr2[i])
      .toString(2)
      .padStart(n, '0')
      .replace(/0/g, ' ')
      .replace(/1/g, '#')
  );
}
