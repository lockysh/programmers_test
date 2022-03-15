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
