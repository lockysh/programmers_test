// 1.소수 찾기function solution(numbers) {
  let answer = [];
  let nums = numbers.split('');

  // 소수 판별
  const isPrimeNum = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // 순열 만들기
  const getPermutation = (arr, fixed) => {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newNum = fixed + arr[i];
        const copyArr = [...arr];
        copyArr.splice(i, 1);
        if (!answer.includes(+newNum) && isPrimeNum(+newNum)) {
          answer.push(+newNum);
        }
        getPermutation(copyArr, newNum);
      }
    }
  };
  getPermutation(nums, '');
  return answer.length;
}

// 2. 가장 큰 수(정렬)

function solution(numbers) {
  let answer = numbers.sort(numFunc);

  // 0으로만 이뤄진 배열에 대한 예외처리
  return answer[0] == '0' ? '0' : answer.join('');
}
function numFunc(a, b) {
  const compare1 = (String(a) + String(b)) * 1;
  const compare2 = (String(b) + String(a)) * 1;
  return compare2 - compare1;
}
