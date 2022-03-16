// 1. 실패율

function solution(N, stages) {
  let fail = [];
  for (let i = 1; i <= N; i++) {
    fail.push([
      i,
      stages.filter((a) => a == i).length / stages.filter((a) => a >= i).length,
    ]);
  }
  return fail.sort((a, b) => b[1] - a[1]).map((a) => a[0]);
}
