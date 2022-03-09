// 1. 크레인 인형뽑기 게임

function solution(board, moves) {
  let result = [];
  let answer = 0;
  for (let i = 0; i < moves.length; i++) {
    const idx = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][idx] == 0) continue;

      if (board[j][idx] == result[result.length - 1]) {
        result.pop();
        answer += 2;
      } else result.push(board[j][idx]);
      board[j][idx] = 0;
      break;
    }
  }
  return answer;
}
