// 1. 땅따먹기

function solution(land) {
  let answer = 0;
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      let arr = land[i - 1].slice();
      arr[j] = 0;

      land[i][j] += Math.max(...arr);
      answer = Math.max(answer, land[i][j]);
    }
  }
  return answer;
}

/// reduce 사용한 풀이

function solution(land) {
  var answer = 0;

  return Math.max(
    ...land.reduce(
      (a, c) => {
        return [
          c[0] + Math.max(a[1], a[2], a[3]),
          c[1] + Math.max(a[0], a[2], a[3]),
          c[2] + Math.max(a[0], a[1], a[3]),
          c[3] + Math.max(a[0], a[1], a[2]),
        ];
      },
      [0, 0, 0, 0]
    )
  );
}

// 2. 가장 큰 정사각형 찾기

function solution(board) {
  let answer = 0;

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        board[i][j] =
          Math.min(board[i][j - 1], board[i - 1][j], board[i - 1][j - 1]) + 1;
        if (board[i][j] > answer) {
          answer = board[i][j];
        }
      }
    }
  }

  return board.length == 1 || board[0].length == 1 ? 1 : answer * answer;
}
