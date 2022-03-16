// map set 카카오 문제 풀기

// 1. K번째 수

function solution(array, commands) {
  let temp = [];

  for (i = 0; i < commands.length; i++) {
    let select_array = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);
    temp.push(select_array[commands[i][2] - 1]);
  }
  return temp;
}

/// map 사용한 풀이

function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}

// 2. 소수 만들기

function solution(nums) {
  let answer = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        let number = nums[i] + nums[j] + nums[k];

        if (isPrime(number)) {
          answer++;
        }
      }
    }
  }

  function isPrime(sum) {
    if (sum < 2) return true;
    for (let i = 2; i < sum; i++) {
      if (sum % i == 0) return false;
    }
    return true;
  }
  return answer;
}
