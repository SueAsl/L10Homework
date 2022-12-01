let arr = [18, 26, 39, 80, 76];

let func = (array, num) => {
  let newArr = []
  let index = array.length - 1;
  while (index >= 0) {
    newArr[index + 1] = array[index]
    index--
  }
  newArr[0] = num
  return newArr
};

console.log(func(arr, 4));
