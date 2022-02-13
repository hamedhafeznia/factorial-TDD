  export function factorial(num) {
  if (num < 0) {
    return false
  } 

  if (num === 0) {
    return  1
  } 

  if(num === 1) {
    return 1
  }

  if(num > 1) {
    return num * factorial(num - 1);
  }
}

export function getFactorials(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(factorial(array[i]))
  }
  return result;
}

getFactorials([3, 0, 4, -1, 2, 6]);
