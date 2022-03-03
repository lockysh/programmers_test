// 1. 부족한 금액 계산하기

function solution(price, money, count) {
  let total = 0;
  for (i = 1; i <= count; i++) {
    total += price * i;
  }
  return money > total ? 0 : total - money;
}

// 2. 최소 직사각형

function solution(sizes) {
  const list = sizes.map((size) => size.sort((a, b) => b - a));
  let width = Math.max.apply(
    null,
    list.map((a) => a[0])
  );
  let height = Math.max.apply(
    null,
    list.map((a) => a[1])
  );

  return width * height;
}

/// forEach 사용한 풀이

function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}

// 3. 나머지가 1이 되는 수 찾기

function solution(n) {
  for (i = 0; i < n; i++) {
    if (n % i == 1) return i;
  }
}

/// while문 사용한 풀이

function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}
