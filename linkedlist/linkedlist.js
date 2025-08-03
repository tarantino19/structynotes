class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D ')

a.next = b   //a is next, pointing to b
b.next = c
c.next = d

//A - head -> B  -> C -> D -> null

//traversal algorithm

// non recursive - iterative version

const linkedListValues = (head) => {
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
};
//recursive version
// const linkedListValues = (head) => {
//   const values = [];
//   _linkedListValues(head, values);
//   return values;
// };

// const _linkedListValues = (head, values) => {
//   if (head === null) return;
//   values.push(head.val);
//   _linkedListValues(head.next, values);
// };
// printLinkedList(a)
