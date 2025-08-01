const reverseString = (s) => {

  if (s.length === 0){
    return ""
  }
//base case - almost always the smallest - return 0/empty string

  return reverseString(s.slice(1)) + s[0]
  //reverseString call is first cause we're reversing string here

};

//recursive reverse string
console.log(reverseString('hello'))
