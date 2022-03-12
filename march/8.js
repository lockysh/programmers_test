// 1. 신고 결과 받기

function solution(id_list, report, k) {
  let answer = new Array(id_list.length).fill(0);
  let report_list = new Map();

  id_list.map((user) => {
    report_list[user] = [];
  });

  report.map((user) => {
    const [user_id, report_id] = user.split(' ');
    if (!report_list[report_id].includes(user_id)) {
      report_list[report_id].push(user_id);
    }
  });

  for (const key in report_list) {
    if (report_list[key].length >= k) {
      //이용정지 유저
      report_list[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }
  return answer;
}

/// Set + Map 사용한 풀이

function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(' ');
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}

// 2. 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  let zero = 0;
  let count = 0;
  lottos.forEach((a) =>
    a === 0 ? zero++ : win_nums.includes(a) ? count++ : null
  );

  return [
    count >= 1 || zero >= 1 ? 7 - count - zero : 6,
    count > 1 ? 7 - count : 6,
  ];
}

/// filter 사용한 풀이

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
