const maxValue = (nums) => {
  let maxNumber = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNumber) {
      maxNumber = nums[i];
    }
  }

  return maxNumber;
};
