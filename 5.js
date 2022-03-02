// 1. 서울에서 김서방 찾기

function solution(seoul) {
  const location = seoul.indexOf('Kim');
  return `김서방은 ${location}에 있다`;
}

// 2. 2016

function solution(a, b) {
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const num = new Date(`2016-${a}-${b}`).getDay();
  return day[num];
}

// 3. 가운데 글자 가져오기

function solution(s) {
  const center = Math.floor(s.length / 2);
  const arr = s.split('');
  return s.length % 2 == 0
    ? arr.splice(center - 1, 2).join('')
    : arr.splice(center, 1).join('');
}

/// substr 사용한 풀이

function solution(s) {
  const center = s.length / 2;
  return s.substr(Math.ceil(center) - 1, s.length % 2 == 0 ? 2 : 1);
}

// 4. 두 정수 사이의 합

function solution(a, b, sum = 0) {
  for (i = Math.min(a, b); i <= Math.max(a, b); i++) sum += i;
  return sum;
}
