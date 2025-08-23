class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeNode = (head, targetVal) => {
  if (head.val === targetVal) return head.next
  let prev = null
  let current = head

  while (current !== null){

    if (current.val === targetVal){
        prev.next = current.next
        break
    }

    prev = current
    current = current.next
  }
  return head
};

module.exports = {
  removeNode,
};
