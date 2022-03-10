// 1. 체육복

function solution(n, lost, reserve) {
  let list = Array(n).fill(1);

  for (let i = 0; i < list.length; i++) {
    if (lost.includes(i)) list[i - 1]--;
    if (reserve.includes(i)) list[i - 1]++;
  }
  for (let i = 0; i <= list.length; i++) {
    if (list[i] == 0 && list[i + 1] == 2) {
      list[i]++;
      list[i + 1]--;
    } else if (list[i] == 2 && list[i + 1] == 0) {
      list[i]--;
      list[i + 1]++;
    }
  }
  return list.filter((a) => a >= 1).length;
}

///
