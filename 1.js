// x만큼 간격이 있는 n개의 숫자

function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

/// Array.fill 이용한 풀이

function solution(x,n) {
    return Array(n).fill(x).map((v, i) => (i+1) * v)
}

--

// 짝수와 홀수
function solution(num) {
    if(num %2 == 0) {
        answer = "Even"
    } else {
        answer = "Odd"
    }
    return answer
}

///삼항연산자 사용한 풀이

function solution(num) {
    return num%2 ? "Odd" : "Even";
}

--

//평균 구하기

function solution(arr) {
    let answer = 0;
    let sum = 0;
    
    for (let i = 0 ; i< arr.length ; i++) {
        sum = sum + arr[i]
    }

    return answer = sum/arr.length;
}
///reduce 사용한 풀이

function solution(arr) {
    return arr.reduce((a,b)=> a+b) /arr.length;
}

// 핸드폰 번호 가리기

function solution(phone_number) {
    const len = phone_number.length -4;
    answer = '*'.repeat(len) + phone_number.slice(-4);
    return answer;
}

///substring 사용한 풀이

function solution(phone_number) {
    const len = phone_number.length -4;
    return "*".repeat(len) + phone_number.substring(len);
}

//하샤드 수

function solution(x) {
    let sum = 0;
    let arr = String(x).split('');
    
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    
    return (x%sum == 0) ? true : false;
}

// 직사각형 별 찍기

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    const row = "*".repeat(a);
    for (let i =0; i < b; i++) {
        console.log(row);
    }
});