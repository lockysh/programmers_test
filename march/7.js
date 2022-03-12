// 1. 체육복

function solution(n, lost, reserve) {
  let list = Array(n).fill(1);

  for (let i = 0; i < reserve.length; i++) {
    const index = reserve[i] - 1;
    list[index]++;
  }

  for (let i = 0; i < lost.length; i++) {
    const index = lost[i] - 1;
    list[index]--;
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
