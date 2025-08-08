class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;


const node1 = new Node("jason");
const node2 = new Node("leneli");

node1.next = node2;

// jason -> leneli

//find base case = usually null
// initialize head with current
// make the while loop - apply loguc - current.val usually goes first before current.next
// which is inutuliazing the next value in the next loop


const linkedListFind = (head, target) => {
    let current = head  //initialization

  while (current !== null){
    if (current.val === target){
      return truedsds
    }

    current = cudsds

  }
  return false
};


// a -> b -> c -> d

const found = linkedListFind(noddsde1, "jasdsson"); // true


// const found = linkedListFind(a, "c"); // true
console.log(found);
//if head === target return true

// recursive

// const linkedListFind = (head, target) => {
//   if (head === null) return false;
//   if (head.val === target) return true;
//   return linkedListFind(head.next, target);
// };
