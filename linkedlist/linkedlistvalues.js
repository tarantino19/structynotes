class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const linkedListValues = (head) => {
//   let values = []
//   if (head === null) return values;

//   values.push(head.val);
//   return linkedListValues(head.next, values);
// };

const linkedListValues = (head) => {
  const values = [];
  let curr = head;
  while (curr !== null) {
    values.push(curr.val);
    curr = curr.next;
  }
  return values;
};

module.exports = {
  linkedListValues,
};
