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

/// 이차원배열 사용한 풀이

function solution(numbers, hand) {
  const key_dict = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };
  let answer = '';
  let lHand = '*';
  let rHand = '#';

  for (let i = 0; i < numbers.length; i++) {
    if ([1, 4, 7].includes(numbers[i])) {
      answer += 'L';
      lHand = numbers[i];
    } else if ([3, 6, 9].includes(numbers[i])) {
      answer += 'R';
      rHand = numbers[i];
    } else {
      const l = key_dict[lHand];
      const r = key_dict[rHand];
      const c = key_dict[numbers[i]];

      const distance_left = Math.abs(l[0] - c[0]) + Math.abs(l[1] - c[1]);
      const distance_right = Math.abs(r[0] - c[0]) + Math.abs(r[1] - c[1]);

      if (distance_right < distance_left) {
        answer += 'R';
        rHand = numbers[i];
      } else if (distance_right > distance_left) {
        answer += 'L';
        lHand = numbers[i];
      } else {
        if (hand == 'right') {
          answer += 'R';
          rHand = numbers[i];
        } else {
          answer += 'L';
          lHand = numbers[i];
        }
      }
    }
  }
  return answer;
}

// 3. 숫자 문자열과 영단어

function solution(s) {
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let answer = s;

  for (let i = 0; i < numbers.length; i++) {
    answer = answer.split(numbers[i]).join(i);
  }
  return answer * 1;
}

/// 정규식 사용한 풀이

function solution(s) {
  let charSet = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let [key, value] of Object.entries(charSet)) {
    let re = new RegExp(`${key}`, 'g');
    s = s.replace(re, value);
  }
  return parseInt(s);
}
