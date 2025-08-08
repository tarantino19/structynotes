class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getNodeValue = (head, index) => {

  let count = 0
  let current = head

  while (current !== null){

    if (count === index){
      return current.val
    }
    //check index and current count first before incrementing

    current = current.next
    count++
  }
  return null

};
//return - the node value of whatever the index passed is.
//
//1 - we need head and index
//2 - initiliaze count to 0
// 3 - current.next , increment 1
//
// 4 - if target index and count is equal - return the value of node.val


//The reason the `if` statement should come **before** incrementing (and moving to the next node) is to ensure you are checking the current node's position **before** you advance to the next one.
//check index and value first before incrementing
