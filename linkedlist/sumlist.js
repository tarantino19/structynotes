class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const sumList = (head) => {
  let current = head;
  let totalSum = 0

  while (current !== null) {
    totalSum += current.val
    current = current.next
  }

  return totalSum
};

const sumlist = sumList(a); // 19
console.log(sumlist)


//recursive
//

// const sumList = (head) => {
//   if (head === null) return 0;
//   head.val + sumList(head.next)
// };


// can you explain the    while (current !== null) {
//     totalSum += current.val
//     current = current.next
//   }
 // part and why i cant just do totalSum = current.val + current.next

 // You’re iterating through a linked list. In a singly linked list, each node has a `val` and a pointer to the next node (`next`). The loop:

 // ```/dev/null/example.js#L1-5
 // while (current !== null) {
 //   totalSum += current.val
 //   current = current.next
 // }
 // ```

 // does two things repeatedly:
 // 1. Accumulates the current node’s value into `totalSum`.
 // 2. Advances `current` to the next node.

 // This repeats until `current` becomes `null` (end of the list).

 // Why you can’t do `totalSum = current.val + current.next`:
 // - `current.val` is a number (or whatever value you stored).
 // - `current.next` is a reference to the next node object, not a number. Adding them doesn’t make sense.
 // - Even if you tried `current.val + current.next.val`, that would only add two nodes (current and the immediate next) and would still fail when `current.next` is `null` at the last node.
 // - A list can have any length, so you need to traverse all nodes one by one to sum all values, which is what the loop does.

 // If you prefer a recursive version (conceptually similar but not always recommended due to call stack limits):

 // ```/dev/null/example.js#L1-8
 // function sumList(node) {
 //   if (node === null) return 0
 //   return node.val + sumList(node.next)
 // }
 // ```

 // But the while loop is iterative, stack-safe, and straightforward.
