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
  const curr = {};
  const inCar = {};
  const outCar = [];
  const remainingCar = [];

  for (let x of records) {
    let [times, carNum, state] = x.split(' ');
    let [hour, min] = times.split(':').map(Number);

    if (state === 'IN') {
      if (!outCar.includes(carNum)) {
        inCar[carNum] = [hour, min, 0];
        remainingCar.push(carNum);
        continue;
      }
      inCar[carNum] = [hour, min, curr[carNum]];
      remainingCar.push(carNum);
    }

    if (state === 'OUT') {
      outCar.push(carNum);
      remainingCar.splice(remainingCar.indexOf(carNum), 1);
      let lastIn = inCar[carNum];
      let time = (hour - lastIn[0]) * 60 + min - lastIn[1];

      if (curr.hasOwnProperty(carNum)) {
        curr[carNum] = curr[carNum] + time;
      } else {
        curr[carNum] = time;
      }
    }
  }

  for (let car of remainingCar) {
    let lastIn = inCar[car];
    let time = (23 - lastIn[0]) * 60 + 59 - lastIn[1];
    if (curr.hasOwnProperty(car)) {
      curr[car] = curr[car] + time;
    } else {
      curr[car] = time;
    }
  }
  const answer = [];

  for (let [car, time] of Object.entries(curr)) {
    let lastIn = inCar[car];
    basicTime >= time
      ? (time = basicFee)
      : (time = basicFee + Math.ceil((time - basicTime) / min) * fee);
    answer.push([car, time]);
  }

  return answer.sort((a, b) => a[0] - b[0]).map((v) => v[1]);
}

/// max시간 정해놓은 풀이

function solution(fees, records) {
  const parkingTime = {};
  records.forEach((r) => {
    let [time, id, type] = r.split(' ');
    let [h, m] = time.split(':');
    time = h * 1 * 60 + m * 1;
    if (!parkingTime[id]) parkingTime[id] = 0;
    if (type === 'IN') parkingTime[id] += 1439 - time;
    if (type === 'OUT') parkingTime[id] -= 1439 - time;
  });
  const answer = [];
  for (let [car, time] of Object.entries(parkingTime)) {
    if (time <= fees[0]) time = fees[1];
    else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1];
    answer.push([car, time]);
  }
  return answer.sort((a, b) => a[0] - b[0]).map((v) => v[1]);
}
