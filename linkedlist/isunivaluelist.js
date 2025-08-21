class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;


const isUnivalueList = (head) => {

  let current = head  //this id just an initialization -current currently pointing to head
  //after the first loop of while inside it, current will no longer be head - fugeddaboutit na

  while (current !== null){
    if (current.val !== head.val) return false //head.val never changes here - but current does
    current =  current.next  //the current gets assigned to the next so current at the start becomes then "current" but head never changes
  }
  return true
};

isUnivalueList(a); // true


// - **`current.val`**
//   As you traverse the list with `current = current.next`, `current` points to each node in the list, one by one.
//   So, `current.val` gives you the value of the node you are currently visiting, and this value can change as you move through the list.

// - **`head.val`**
//   `head` always points to the very first node in the list.
//   `head.val` is the value of the first node, and it never changes during the traversal.



---


// can i do reverse and get same result like current.val === head.val  return true


Great question! Let’s clarify what happens if you reverse the logic.

### Your Current Code

```/dev/null/example.js#L1-9
const isUnivalueList = (head) => {
  let current = head;
  while (current !== null) {
    if (current.val !== head.val) return false;
    current = current.next;
  }
  return true;
};
```

This code returns `false` as soon as it finds a node whose value is **not** equal to `head.val`. If it never finds such a node, it returns `true` at the end.

---

### What if you reverse the logic?

If you write:

```/dev/null/example.js#L1-9
const isUnivalueList = (head) => {
  let current = head;
  while (current !== null) {
    if (current.val === head.val) return true;
    current = current.next;
  }
  return false;
};
```

**This is NOT equivalent!**
Here’s why:

- This code will return `true` as soon as it finds a node whose value **is** equal to `head.val` (which will always be the first node, and possibly others).
- It does **not** check that *all* nodes have the same value—it only checks if *any* node matches the head.
