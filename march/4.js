// 1. 3진법 뒤집기

function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

/// [...] 사용한 풀이

function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
}

// 2. 예산

function solution(d, budget) {
  const list = d.sort((a, b) => a - b);
  let help = 0;
  let answer = 0;

  for (i = 0; i < d.length; i++) {
    help += list[i];
    answer++;
    if (help > budget) {
      answer--;
    }
  }
  return answer;
}

/// reduce 사용한 풀이

function solution(d, budget) {
  d.sort((a, b) => a - b);

  while (d.reduce((a, b) => a + b, 0) > budget) d.pop();

  return d.length;
}

// 3. 약수의 개수와 덧셈
function solution(left, right) {
  let sum = 0;
  for (i = left; i <= right; i++) {
    let num = [];
    for (n = 1; n <= i; n++) {
      if (i % n == 0) num.push(n);
    }
    num.length % 2 == 0 ? (sum += i) : (sum -= i);
  }
  return sum;
}

/// isInteger 사용한 풀이

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

// 4. 폰켓몬

function solution(nums) {
  let list = [];
  for (i = 0; i < nums.length; i++) {
    if (!list.includes(nums[i])) list.push(nums[i]);
  }
  return list.length >= nums.length / 2 ? nums.length / 2 : list.length;
}

/// [...new Set] 사용한 풀이

function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}

/// spread operation 공부하기..
