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

// 2. 키패드 누르기

function solution(numbers, hand) {
  const left = [1, 4, 7];
  const right = [3, 6, 9];
  const middle = [2, 5, 8, 0];

  let result = '';
  let Llocation = '10';
  let Rlocation = '12';

  for (i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num == 0) num = 11;

    if (left.includes(num)) {
      result += 'L';
      Llocation = num;
    } else if (right.includes(num)) {
      result += 'R';
      Rlocation = num;
    } else {
      const Ldistance = calDistance(Llocation, num);
      const Rdistance = calDistance(Rlocation, num);

      if (Ldistance === Rdistance) {
        if (hand == 'right') {
          result += 'R';
          Rlocation = num;
        } else {
          result += 'L';
          Llocation = num;
        }
      } else if (Ldistance > Rdistance) {
        result += 'R';
        Rlocation = num;
      } else if (Ldistance < Rdistance) result += 'L';
      Llocation = num;
    }
  }
  return result;
}

function calDistance(now, target) {
  let distance = 0;

  while (now !== target) {
    if (Math.abs(now - target) === 1) {
      distance += 1;
      now = target;
    } else if (now < target) {
      distance += 3;
      now += 3;
    } else if (now > target) {
      distance += 3;
      now -= 3;
    }
  }
  return distance;
}
