const exclusiveItems = (a, b) => {

  const setA = new Set(a)
  const setB = new Set(b)

  const exclusiveArray = []

  for (let num of setA){
    if (!setB.has(num)){
      exclusiveArray.push(num)
    }
  }

  for (let num of setB){
    if (!setA.has(num)){
      exclusiveArray.push(num)
    }
  }

  console.log(exclusiveArray)
  return exclusiveArray


};

exclusiveItems([4,2,1,6], [3,6,9,2,10]);


//2 arrays input
//get all the exclusive numbers in the two arrays

//approach
//set - turn into sets
//start uteating 1st array, check for matching items in 2nd set.
//01 - if it's there then dont push, if it is push to new array
//then the other way around, m loops through new

//use sets if i want unique items in an array
