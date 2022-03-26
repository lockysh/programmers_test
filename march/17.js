// 1. 이진 변환 반복하기

function solution(s) {
  let answer = [0, 0];

  while (s != 1) {
    answer[0]++;
    let cnt = 0;

    for (let i of s) {
      if (i == 1) cnt++;
    }
    answer[1] += s.length - cnt;
    s = cnt.toString(2);
  }
  return answer;
}

// 2. 주차 요금 계산

function solution(fees, records) {
  const [basicTime, basicFee, min, fee] = fees;
  const cars = {};
  const candidate = {};
  // IN했을 때 넣는거
  const lastCar = [];
  // 들어왔다가 나간 차
  const remainingCar = [];
  // 주차장에 남은 차

  for (let x of records) {
    let [clock, car, history] = x.split(' ');
    let [hour, min] = clock.split(':').map(Number);

    if (history === 'IN') {
      if (!lastCar.includes(car)) {
        candidate[car] = [hour, min, 0];
        remainingCar.push(car);
        continue;
      }
      candidate[car] = [hour, min, cars[car]];
      remainingCar.push(car);
    }

    if (history === 'OUT') {
      lastCar.push(car);
      remainingCar.splice(remainingCar.indexOf(car), 1);
      let lastIn = candidate[car];
      let time = (hour - lastIn[0]) * 60 + min - lastIn[1];

      if (cars.hasOwnProperty(car)) {
        cars[car] = cars[car] + time;
      } else {
        cars[car] = time;
      }
    }
  }

  for (let car of remainingCar) {
    let lastIn = candidate[car];
    let time = (23 - lastIn[0]) * 60 + 59 - lastIn[1];
    if (cars.hasOwnProperty(car)) {
      cars[car] = cars[car] + time;
    } else {
      cars[car] = time;
    }
  }
  const answer = [];

  for (let [car, time] of Object.entries(cars)) {
    let lastIn = candidate[car];
    basicTime >= time
      ? (time = basicFee)
      : (time = basicFee + Math.ceil((time - basicTime) / min) * fee);
    answer.push([car, time]);
  }

  return answer.sort((a, b) => a[0] - b[0]).map((v) => v[1]);
}
