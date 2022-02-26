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

// map 사용한 풀이
function sumMatrix(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}
