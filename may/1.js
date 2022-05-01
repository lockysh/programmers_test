//1. 영어 끝말잇기function solution(n, words) {
  let list = [];
  let answer = [0, 0];

  for (let i = 1; i < words.length; i++) {
    list.push(words[i - 1]);
    if (!words[i - 1].endsWith(words[i][0])) {
      answer = [(i % n) + 1, Math.ceil(i / 3) + 1];
    } else {
      if (list.includes(words[i])) {
        answer = [(i % n) + 1, Math.ceil(i / 3) + 1];
      }
    }
  }
  return answer;
}

//테스트 케이스만 통과

/// reduce & indexOf
function solution(n, words) {
    let answer = 0;
    words.reduce((prev, now, idx) => {
        answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
        return now[now.length-1];
    }, "")

    return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
}

