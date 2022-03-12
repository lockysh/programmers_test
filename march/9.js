// 1. 위장

function solution(clothes) {
  let answer = 1;
  let table = clothes.reduce((acc, cur) => {
    acc[cur[1]] = acc[cur[1]] ? acc[cur[1]] + 1 : 1;
    return acc;
  }, {});

  for (let key in table) {
    answer *= table[key] + 1;
  }

  return answer - 1;
}

/// map사용한 풀이

function solution(clothes) {
  let answer = 1;
  let map = new Map();
  for (let i of clothes) {
    map.has(i[1]) ? map.set(i[1], map.get(i[1]) + 1) : map.set(i[1], 2);
  }
  for (let i of map) {
    answer *= i[1];
  }
  return answer - 1;
}
