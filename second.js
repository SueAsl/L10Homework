let arr1 = [7555, '', 'Nike', null, undefined, 639, 0];

let filtered = (array) => {
  let arr2 = [];
  let n = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      arr2[n] = array[i]
      n++
    }
  }
  return arr2
};


console.log(filtered(arr1)); //1st method


let arr2 = arr1.filter(function(val) {
  return val
});


console.log(arr2); //2nd method
