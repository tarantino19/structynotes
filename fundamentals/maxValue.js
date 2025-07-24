const maxValue = (nums) => {
  let maxNumber = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNumber) {
      maxNumber = nums[i];
    }
  }

  return maxNumber;
};

console.log("red");
// const maxValue = (nums) => {
//   let maxNumber = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > maxNumber) {
//       maxNumber = nums[i];
//     }
//   }

//   return maxNumber;
// };
//

const maxValue = (nums) => {
  let maxNumber = -Infinity;

  for (let num of nums){
    if (num > maxNumber){
      maxNumber = num
    }
  }

  return maxNumber
}

console.log(maxValue([1, 5, 10, 200, 1000, 20]))
